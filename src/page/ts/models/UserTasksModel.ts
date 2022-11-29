import Listenable from "./Listenable";
import Observable from "./Observable";
import PageModel from "./PageModel"
import ObservingHandlerList from '../mutationObserver/ObservingHandlerList';
import EventManager from "../listener/EventManager";

export default class UserTasksModel extends PageModel implements Observable, Listenable {
  protected matchers: string[] = ["trainer/tasks", "events_user_id_eq"]

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
    this.createListener();
  }

  leave(): void {
    this.clearListener();
  }
}