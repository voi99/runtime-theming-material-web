import "@material/web/checkbox/checkbox.js";

import { SectionComponent } from "../section/section.component";
import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "app-checkbox",
  standalone: true,
  template: ` <app-section title="Checkbox">
    <div class="flex-wrapper">
      <label for="one">
        <md-checkbox id="one" />
        Checkbox one
      </label>

      <md-checkbox />
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
      align-items: center;
      gap: 2rem;
    }
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [SectionComponent],
})
export class CheckboxComponent {}
