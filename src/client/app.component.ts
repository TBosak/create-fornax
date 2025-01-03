import { Component, BaseComponent } from "fornaxjs";

@Component({
  selector: "app-component",
  style: `nav { margin-left: 3em; margin-right: 3em; }
          .container { text-align: center; }`,
  template: `
    <nav>
      <ul>
        <li><strong>Fornax</strong></li>
      </ul>
      <ul>
        <li><a href="/">Hello World</a></li>
      </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent extends BaseComponent {}
