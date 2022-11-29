import AppContext from "../AppContext"
import PageModel from "./PageModel"
import Visitor from './Visitor';

export default class CalendarModel extends PageModel {

  enter(): void {
    this.wasEntered();
    AppContext.setState(this);
  }

  leave(): void {
    this.wasLiving();
  }

  checkMe(condition: string): void {
    if (condition.includes("trainer/calendar")) {
      if (!this.entered) {
        this.enter();
        return;
      }
    } else {
      if (this.nextModel) {
        this.leave();
        this.nextModel.checkMe(condition)
      }
    }
  }
}