import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-directives",
  templateUrl: "./directives.component.html",
  styleUrls: ["./directives.component.css"],
})
export class DirectivesComponent implements OnInit {
  showPassword = false;
  log = [];
  constructor() {}

  ngOnInit(): void {}

  onShowPassword() {
    this.showPassword = !this.showPassword;
    this.log.push(this.log.length + 1);
  }
}
