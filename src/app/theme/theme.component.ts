import { Component, computed, effect, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { applyTheme, argbFromHex, themeFromSourceColor } from "@material/material-color-utilities";
import { DEFAULT_COLOR } from "./default-theme";
import { LS_SOURCE_COLOR_KEY, getSavedColor } from "./helpers";

@Component({
  selector: "app-theme",
  template: ` <input type="color" [ngModel]="color()" (ngModelChange)="color.set($event)" /> `,
  standalone: true,
  imports: [FormsModule],
})
export class ThemeComponent {
  color = signal(getSavedColor() || DEFAULT_COLOR);

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
    applyTheme(this.theme(), { target: document.body });
  });

  saveSourceColorEffect = effect(() => {
    localStorage.setItem(LS_SOURCE_COLOR_KEY, this.color());
  });
}
