import "@material/web/select/outlined-select";
import "@material/web/select/filled-select";
import "@material/web/select/select-option";

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";
import { SectionComponent } from "../section/section.component";

@Component({
  selector: "app-select",
  standalone: true,
  template: `
    <app-section title="Select">
      <div class="flex-wrapper">
        <md-outlined-select>
          <md-select-option selected value="apple">
            <div slot="headline">Apple</div>
          </md-select-option>
          <md-select-option value="apricot">
            <div slot="headline">Apricot</div>
          </md-select-option>
        </md-outlined-select>

        <md-filled-select>
          <md-select-option value="apple">
            <div slot="headline">Apple</div>
          </md-select-option>
          <md-select-option value="apricot">
            <div slot="headline">Apricot</div>
          </md-select-option>
        </md-filled-select>
      </div>
    </app-section>
  `,
  styles: ``,
  imports: [SectionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SelectComponent {}
