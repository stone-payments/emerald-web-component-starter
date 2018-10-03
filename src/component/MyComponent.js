import { SlingElement, html } from 'sling-framework';

export class MyComponent extends SlingElement {
  static get properties() {
    return {};
  }

  render({ disabled, type }) {
    return html`
      <style>
        @import url('sling-web-component-starter/src/index.css');
      </style>
      <p>
        <slot></slot>
      </p>
    `;
  }
}
