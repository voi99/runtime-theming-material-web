import "@material/web/icon/icon.js";
import "@material/web/iconbutton/outlined-icon-button.js";

import { CUSTOM_ELEMENTS_SCHEMA, Component, computed, effect, inject, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { applyTheme, argbFromHex, themeFromSourceColor } from "@material/material-color-utilities";
import { DEFAULT_COLOR } from "./default-theme";
import { DARK_MODE_KEY, SOURCE_COLOR_KEY, getSavedColor, getSavedThemeMode } from "./helpers";
import { SectionComponent } from "../section/section.component";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-theme",
  template: `<app-section title="Theme Controls">
    <div class="theme-controls">
      <div class="source-color-picker">
        <label for="color-input" class="color-input-label">
          <span> Source Color </span>
          <span class="color-input-wrapper">
            <div class="overflow">
              <input id="color-input" type="color" [ngModel]="color()" (ngModelChange)="color.set($event)" />
            </div>
          </span>
        </label>
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
      gap: 1rem;
      align-items: center;

      .source-color-picker {
        padding: 0.5rem;
        border-radius: 12px;
        background-color: var(--md-sys-color-surface-variant);
        color: var(--md-sys-color-on-surface-variant);

        .color-input-label {
          display: flex;
          align-items: center;
          gap: 0.75rem;

          .color-input-wrapper {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            box-sizing: border-box;
            border: 1px solid var(--md-sys-color-on-secondary-container);
            position: relative;

            .overflow {
              width: 100%;
              height: 100%;
              overflow: hidden;
              border-radius: inherit;
              display: flex;
              align-items: center;
              justify-content: center;

              #color-input {
                border: none;
                background: none;
                min-width: 150%;
                min-height: 150%;
              }
            }
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
  isDarkMode = signal<boolean>(getSavedThemeMode());
  theme = computed(() => themeFromSourceColor(argbFromHex(this.color())));

  applyThemeEffect = effect(() => {
    applyTheme(this.theme(), {
      target: this.#document.body,
      dark: this.isDarkMode(),
    });
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
