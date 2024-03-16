import { Component } from "@angular/core";
import { ButtonsComponent } from "./buttons/buttons.component";
import { ThemeComponent } from "./theme/theme.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [ButtonsComponent, ThemeComponent],
  template: `
    <div class="container">
      <app-theme />
      <app-buttons />
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
})
export class AppComponent {}
