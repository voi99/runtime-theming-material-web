import "@material/web/chips/assist-chip.js";
import "@material/web/chips/chip-set.js";
import "@material/web/chips/filter-chip.js";
import "@material/web/chips/input-chip.js";
import "@material/web/chips/suggestion-chip.js";

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";
import { SectionComponent } from "./../section/section.component";

@Component({
  selector: "app-chips",
  standalone: true,
  template: `
    <app-section title="Chips">
      <md-chip-set>
        <md-assist-chip label="Assist" />
        <md-filter-chip label="Filter" />
        <md-input-chip label="Input" />
        <md-suggestion-chip label="Suggestion" />
        <md-suggestion-chip label="Chip with icon">
          <md-icon slot="icon">local_laundry_service</md-icon>
        </md-suggestion-chip>
      </md-chip-set>
    </app-section>
  `,
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [SectionComponent],
})
export class ChipsComponent {}
