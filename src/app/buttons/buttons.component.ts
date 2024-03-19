import "@material/web/button/elevated-button";
import "@material/web/button/filled-button";
import "@material/web/button/filled-tonal-button";
import "@material/web/button/outlined-button";
import "@material/web/button/text-button";
import "@material/web/icon/icon";

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";
import { SectionComponent } from "../section/section.component";

@Component({
  selector: "app-buttons",
  standalone: true,
  template: `<app-section title="Buttons">
    <div class="flex-wrapper">
      <md-filled-button>Filled</md-filled-button>
      <md-outlined-button>Outlined</md-outlined-button>
      <md-elevated-button>Elevated</md-elevated-button>
      <md-filled-tonal-button>Tonal</md-filled-tonal-button>
      <md-text-button>Text</md-text-button>
      <md-filled-tonal-button>
        Send
        <svg slot="icon" viewBox="0 0 48 48">
          <path d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z" />
        </svg>
      </md-filled-tonal-button>

      <md-text-button trailing-icon>
        Open
        <svg slot="icon" viewBox="0 0 48 48">
          <path
            d="M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h13.95v3H9v30h30V25.05h3V39q0 1.2-.9 2.1-.9.9-2.1.9Zm10.1-10.95L17 28.9 36.9 9H25.95V6H42v16.05h-3v-10.9Z" />
        </svg>
      </md-text-button>
    </div>
  </app-section>`,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [SectionComponent],
})
export class ButtonsComponent {}
