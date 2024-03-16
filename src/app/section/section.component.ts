import { Component, input } from "@angular/core";

@Component({
  selector: "app-section",
  standalone: true,
  template: `
    <div class="section">
      <h3>{{ title() }}</h3>
      <div class="section-content">
        <ng-content />
      </div>
    </div>
  `,
  styles: `
    .section {
      background-color: var(--md-sys-color-surface-variant);
      border-radius: 28px;
      padding: 1.15rem;

      h3 {
        margin-top: 0;
        margin-bottom: 0.35rem;
        color: var(--md-sys-color-on-surface-variant);
      }

      .section-content {
        background-color: var(--md-sys-color-surface);
        border-radius: 12px;
        padding: 1rem;
      }
    }
  `,
})
export class SectionComponent {
  title = input.required<string>();
}
