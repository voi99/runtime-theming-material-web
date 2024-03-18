import "@material/web/switch/switch.js";

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";
import { SectionComponent } from "../section/section.component";

@Component({
  selector: "app-switch",
  standalone: true,
  imports: [SectionComponent],
  template: ` <app-section title="Switch">
    <div class="flex-wrapper">
      <label for="wifi">
        Wi-Fi
        <md-switch selected id="wifi" />
      </label>

      <label for="switch">
        Bluetooth
        <md-switch id="switch" />
      </label>
    </div>
  </app-section>`,
  styles: `
    label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--md-sys-color-on-surface-variant);
    }

    .flex-wrapper {
      gap: 1.5rem;
    }
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwitchComponent {}
