import { Component } from "@angular/core";

@Component({
  selector: "app-warning-alert",
  template: ` <p>This is a warning!</p> `,
  styles: [
    `
      p {
        padding: 1em 2em;
        background: yellow;
        box-shadow: 1px 1px 1px gray;
        border-radius: 2px;
      }
    `,
  ],
})
export class WarningAlertComponent {}
