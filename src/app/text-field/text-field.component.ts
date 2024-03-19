import "@material/web/textfield/filled-text-field";
import "@material/web/textfield/outlined-text-field";

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";
import { SectionComponent } from "../section/section.component";

@Component({
  selector: "app-text-field",
  standalone: true,
  template: `
    <app-section title="Text Field">
      <div class="flex-wrapper">
        <md-filled-text-field label="Label" value="Value" />
        <md-outlined-text-field label="Label" value="Value" />
      </div>
    </app-section>
  `,
  styles: `
    .flex-wrapper {
      gap: 1.25rem;
    }
  `,
  imports: [SectionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TextFieldComponent {}
