import "@material/web/textfield/filled-text-field.js";
import "@material/web/textfield/outlined-text-field.js";

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
  styles: ``,
  imports: [SectionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TextFieldComponent {}
