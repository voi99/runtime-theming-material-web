import "@material/web/iconbutton/filled-icon-button";
import "@material/web/iconbutton/filled-tonal-icon-button";
import "@material/web/iconbutton/icon-button";
import "@material/web/iconbutton/outlined-icon-button";

import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { SectionComponent } from "../section/section.component";

@Component({
  selector: "app-icon-button",
  standalone: true,
  imports: [SectionComponent],
  template: `
    <app-section title="Icon Button">
      <div class="flex-wrapper">
        <md-icon-button>
          <md-icon>favorite</md-icon>
        </md-icon-button>
        <md-filled-icon-button>
          <md-icon>videocam</md-icon>
        </md-filled-icon-button>
        <md-filled-tonal-icon-button>
          <md-icon>settings</md-icon>
        </md-filled-tonal-icon-button>
        <md-outlined-icon-button>
          <md-icon>more_vert</md-icon>
        </md-outlined-icon-button>
        <md-filled-icon-button toggle>
          <md-icon>close</md-icon>
          <md-icon slot="selected">check</md-icon>
        </md-filled-icon-button>
      </div>
    </app-section>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IconButtonComponent {}
