import AppContext from "../AppContext";
import PageModel from "./PageModel";

export default class UncheckedDimplomaModel extends PageModel {
  checkMe(condition: string): void {
    if (!this.entered) {
      if (condition.includes("trainer/diplomas?q") && condition.includes("status_eq%5D=0")) {
        AppContext.setState(this);
        this.enter();
        return;
      }
    }
    if (this.nextModel) {
      this.lived();
      this.nextModel.checkMe(condition)
    }
  }
}