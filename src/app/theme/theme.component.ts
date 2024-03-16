import { CUSTOM_ELEMENTS_SCHEMA, Component, computed, effect, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { applyTheme, argbFromHex, themeFromSourceColor } from "@material/material-color-utilities";
import { DEFAULT_COLOR } from "./default-theme";
import { LS_IS_DARK_MODE_KEY, LS_SOURCE_COLOR_KEY, getSavedColor, getSavedThemeMode } from "./helpers";
import { SectionComponent } from "../section/section.component";
import "@material/web/icon/icon.js";
import "@material/web/iconbutton/outlined-icon-button.js";

@Component({
  selector: "app-theme",
  template: `<app-section title="Theme Controls">
    <input type="color" [ngModel]="color()" (ngModelChange)="color.set($event)" />

    <md-outlined-icon-button (click)="toggleMode()">
      <md-icon>
        @if (isDarkMode()) {
          dark_mode
        } @else {
          light_mode
        }
      </md-icon>
    </md-outlined-icon-button>
  </app-section> `,
  standalone: true,
  imports: [FormsModule, SectionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ThemeComponent {
  color = signal(getSavedColor() || DEFAULT_COLOR);
  isDarkMode = signal<boolean>(getSavedThemeMode());

  theme = computed(() =>
    themeFromSourceColor(argbFromHex(this.color()), [
      {
        name: "custom-1",
        value: argbFromHex(this.color()),
        blend: true,
      },
    ])
  );

  applyThemeEffect = effect(() => {
    applyTheme(this.theme(), { target: document.body, dark: this.isDarkMode() });
  });

  saveSourceColorEffect = effect(() => {
    localStorage.setItem(LS_SOURCE_COLOR_KEY, this.color());
  });

  saveThemeModeEffect = effect(() => {
    localStorage.setItem(LS_IS_DARK_MODE_KEY, this.isDarkMode().toString());
  });

  toggleMode() {
    this.isDarkMode.update((prev) => !prev);
  }
}
