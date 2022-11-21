import AppContext from "../AppContext"
import PageModel from "./PageModel"
import Visitor from './Visitor';

export default class ScheduleModel extends PageModel implements Visitor {

  enter(): void {
    this.entered = true;
    AppContext.setState(this);
  }

  leave(): void {
    this.entered = false;
  }

  constructor() {
    super();
    this.name = new.target.name;
  }

  checkMe(condition: string): void {
    if (condition.includes("trainer/schedule")) {
      if (!this.entered) {
        this.enter();
        return;
      }
    } else {
      if (this.nextModel) {
        this.nextModel.checkMe(condition)
      }
    }
  }
}