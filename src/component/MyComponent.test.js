import { registerComponent } from 'sling-helpers';
import { MyComponent } from './MyComponent.js';

registerComponent('my-sling-web-component', MyComponent);

let $myComponent;

describe('MyComponent', () => {
  beforeEach(() => {
    $myComponent = document.createElement('my-sling-web-component');
    document.body.appendChild($myComponent);
  });

  afterEach(() => {
    document.body.removeChild($myComponent);
    $myComponent = undefined;
  });
});
