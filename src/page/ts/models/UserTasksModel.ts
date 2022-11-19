import AppContext from "../AppContext"
import PageModel from "./PageModel"

export default class UserTasksModel extends PageModel {
  checkMe(condition: string): void {
    if (!this.entered) {
      if (condition.includes("trainer/tasks") && condition.includes("events_user_id_eq")) {
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