import { Component } from "@angular/core";
import { ButtonsComponent } from "./buttons/buttons.component";
import { ThemeComponent } from "./theme/theme.component";
import { SwitchComponent } from "./switch/switch.component";
import { TextFieldComponent } from "./text-field/text-field.component";
import { ChipsComponent } from "./chips/chips.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { FabComponent } from "./fab/fab.component";
import { IconButtonComponent } from "./icon-button/icon-button.component";

@Component({
  selector: "app-root",
  standalone: true,
  template: `
    <div class="container">
      <app-theme />
      <app-buttons />
      <app-fab />
      <app-chips />
      <app-icon-button />
      <app-switch />
      <app-text-field />
      <app-checkbox />
    </div>
  `,
  styles: `
    .container {
      margin: auto;
      max-width: 1024px;
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  `,
  imports: [
    ButtonsComponent,
    SwitchComponent,
    ThemeComponent,
    TextFieldComponent,
    ChipsComponent,
    CheckboxComponent,
    FabComponent,
    IconButtonComponent,
  ],
})
export class AppComponent {}
