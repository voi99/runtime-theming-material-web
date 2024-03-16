import { Component, input } from "@angular/core";

@Component({
  selector: "app-section",
  standalone: true,
  template: `
    <div>
      <h3>{{ title() }}</h3>
      <ng-content />
    </div>
  `,
  styles: `
    div {
      background-color: var(--md-sys-color-surface-variant);
      border-radius: 28px;
      padding: 1rem;
    }
    h3 {
      margin-top: 0;
      margin-bottom: 0.8rem;
      color: var(--md-sys-color-on-surface-variant);
    }
  `,
})
export class SectionComponent {
  title = input.required<string>();
}
