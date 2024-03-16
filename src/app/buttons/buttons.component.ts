import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import '@material/web/button/elevated-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/text-button.js';
import '@material/web/icon/icon.js';

@Component({
  selector: 'app-buttons',
  standalone: true,
  template: ` <div class="flex-wrapper">
    <md-filled-button> Filled </md-filled-button>
    <md-outlined-button> Outlined </md-outlined-button>
    <md-elevated-button> Elevated </md-elevated-button>
    <md-filled-tonal-button>Tonal</md-filled-tonal-button>
    <md-text-button> Text </md-text-button>
  </div>`,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ButtonsComponent {}
