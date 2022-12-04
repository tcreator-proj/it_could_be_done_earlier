import Listenable from "./Listenable";
import Observable from "./Observable";
import PageModel from "./PageModel"
import ObservingHandlerList from '../mutationObserver/ObservingHandlerList';
import EventManager from "../listener/EventManager";
import Handler from "../mutationObserver/MutationHandler";
import RestiledTrainerBlock from "../mutationObserver/mutationsHandler/RestiledTrainerBlock";

export default class UserTasksModel extends PageModel implements Observable, Listenable {
  protected matchers: string[] = ["trainer/tasks", "events_user_id_eq"]

  createObservers(): void {
    ObservingHandlerList.append(
      Handler.create(RestiledTrainerBlock, this.name)
    );
  }
  clearObservers(): void {
    ObservingHandlerList.removeHandlerByName(this.name);
  }
  createListener(): void {
    
  }
  clearListener(): void {
    EventManager.clearState(this.name);
  }

  enter(): void {
    this.createObservers();
  }

  leave(): void {
    this.clearObservers();
  }
}