import "@material/web/fab/fab";

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";
import { SectionComponent } from "../section/section.component";

@Component({
  selector: "app-fab",
  standalone: true,
  template: `
    <app-section title="FAB">
      <div class="flex-wrapper">
        <md-fab label="Navigate">
          <md-icon slot="icon">navigation</md-icon>
        </md-fab>
        <md-fab variant="primary" aria-label="Edit">
          <md-icon slot="icon">edit</md-icon>
        </md-fab>
        <md-fab variant="secondary" aria-label="Edit">
          <md-icon slot="icon">edit</md-icon>
        </md-fab>
        <md-fab variant="tertiary" aria-label="Edit">
          <md-icon slot="icon">edit</md-icon>
        </md-fab>
      </div>
    </app-section>
  `,
  imports: [SectionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FabComponent {}
