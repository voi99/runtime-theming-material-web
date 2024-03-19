import "@material/web/icon/icon";
import "@material/web/iconbutton/outlined-icon-button";

import { CUSTOM_ELEMENTS_SCHEMA, Component, computed, effect, inject, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DARK_MODE_KEY, SOURCE_COLOR_KEY, getSavedColor, isDarkModeSaved } from "./helpers";
import { SectionComponent } from "../section/section.component";
import { DOCUMENT } from "@angular/common";
import { applyMaterialTheme, themeFromSourceColor } from "../utils-from-material-web/material-color-helpers";

export const DEFAULT_COLOR = "#8714fa";

@Component({
  selector: "app-theme",
  template: `<app-section title="Runtime Theming">
    <div class="theme-controls">
      <div class="color-picker-wrapper">
        <div class="color-picker-overflow">
          <input id="color-input" type="color" [ngModel]="color()" (ngModelChange)="color.set($event)" />
        </div>
      </div>

      <md-outlined-icon-button (click)="toggleMode()">
        <md-icon>
          @if (isDarkMode()) {
            dark_mode
          } @else {
            light_mode
          }
        </md-icon>
      </md-outlined-icon-button>
    </div>
  </app-section> `,
  standalone: true,
  styles: `
    .theme-controls {
      display: flex;
      gap: 0.65rem;
      align-items: center;

      .color-picker-wrapper {
        display: flex;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        position: relative;

        .color-picker-overflow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 50%;

          #color-input {
            border: none;
            background: none;
            min-width: 150%;
            min-height: 150%;
          }
        }
      }
    }
  `,
  imports: [FormsModule, SectionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ThemeComponent {
  #document = inject(DOCUMENT);

  color = signal(getSavedColor() || DEFAULT_COLOR);
  isDarkMode = signal<boolean>(isDarkModeSaved());
  theme = computed(() => themeFromSourceColor(this.color(), this.isDarkMode()));

  applyThemeEffect = effect(() => {
    applyMaterialTheme(this.#document, this.theme());
  });

  saveSourceColorEffect = effect(() => {
    localStorage.setItem(SOURCE_COLOR_KEY, this.color());
  });

  saveThemeModeEffect = effect(() => {
    localStorage.setItem(DARK_MODE_KEY, this.isDarkMode().toString());
  });

  toggleMode() {
    this.isDarkMode.update((prev) => !prev);
  }
}
