import "@material/web/slider/slider";

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";
import { SectionComponent } from "../section/section.component";

@Component({
  selector: "app-slider",
  standalone: true,
  template: `
    <app-section title="Slider">
      <div class="flex-wrapper">
        <md-slider labeled />
        <md-slider range value-start="25" value-end="50" />
        <md-slider step="5" ticks min="0" max="20" />
      </div>
    </app-section>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [SectionComponent],
})
export class SliderComponent {}
