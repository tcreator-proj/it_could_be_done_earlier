import AppContext from "../AppContext"
import PageModel from "./PageModel"

export default class CurrentTaskModel extends PageModel {
  constructor() {
    super();
    this.name = new.target.name;
  }

  checkMe(condition: string): void {
    if (!this.entered) {
      if (condition.includes("trainer/task/")) {
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