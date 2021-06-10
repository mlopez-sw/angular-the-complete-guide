import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CounterService {
  activeToInactiveCount = 0;
  inactiveToActiveCount = 0;
  constructor() {}

  incrementActive() {
    this.activeToInactiveCount++;
    console.log("To active", this.activeToInactiveCount);
  }
  incrementInactive() {
    this.inactiveToActiveCount++;
    console.log("To inactive", this.inactiveToActiveCount);
  }
}
