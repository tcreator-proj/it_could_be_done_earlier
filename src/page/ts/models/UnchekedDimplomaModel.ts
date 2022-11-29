import AppContext from "../AppContext";
import PageModel from "./PageModel";
import Visitor from './Visitor';

export default class UncheckedDimplomaModel extends PageModel {

  enter(): void {
    this.entered = true;
    AppContext.setState(this);
  }

  leave(): void {
    this.entered = false;
  }

  checkMe(condition: string): void {
    if (condition.includes("trainer/diplomas?q") && condition.includes("status_eq%5D=0")) {
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