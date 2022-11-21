import AppContext from "../AppContext";
import PageModel from "./PageModel";
import Visitor from './Visitor';

export default class CurrentDimplomaModel extends PageModel implements Visitor {

  constructor() {
    super();
    this.name = new.target.name;
  }

  enter(): void {
    this.entered = true;
    AppContext.setState(this);
  }

  leave(): void {
    this.entered = false;
  }

  checkMe(condition: string): void {
    if (condition.includes("trainer/diploma/")) {
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