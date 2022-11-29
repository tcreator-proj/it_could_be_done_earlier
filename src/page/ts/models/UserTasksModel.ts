import AppContext from "../AppContext"
import Listenable from "./Listenable";
import Observable from "./Observable";
import PageModel from "./PageModel"
import Visitor from "./Visitor";
import ObservingHandlerList from '../mutationObserver/ObservingHandlerList';
import EventManager from "../listener/EventManager";

export default class UserTasksModel extends PageModel implements Observable, Listenable {

  createObservers(): void {
    throw new Error("Method not implemented.");
  }
  clearObservers(): void {
    ObservingHandlerList.removeHandlerByName(this.name);
  }
  createListener(): void {
    throw new Error("Method not implemented.");
  }
  clearListener(): void {
    EventManager.clearState(this.name);
  }

  enter(): void {
    this.entered = true;
    AppContext.setState(this);
    this.createListener();
  }

  leave(): void {
    this.entered = false;
    this.clearListener();
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