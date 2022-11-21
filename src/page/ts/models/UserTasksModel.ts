import AppContext from "../AppContext"
import PageModel from "./PageModel"
import Visitor from "./Visitor";

export default class UserTasksModel extends PageModel implements Visitor {
  
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
    if (condition.includes("trainer/tasks") && condition.includes("events_user_id_eq")) {
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