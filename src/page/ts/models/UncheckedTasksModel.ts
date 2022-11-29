import ObservingHandlerList from "../mutationObserver/ObservingHandlerList";
import PageModel from "./PageModel"
import Observable from './Observable';
import Handler from "../mutationObserver/MutationHandler";
import RebuildAsBlockTask from "../mutationObserver/mutationsHandler/RebuildAsBlockTask";
import Listenable from './Listenable';
import EventManager from "../listener/EventManager";
import Listener from "../listener/Listener";
import { keydownByEnterOnTask } from '../listener/listeners/keydownByEnterOnTask';

export default class UncheckedTasksModel extends PageModel implements Observable, Listenable {
  protected matchers: string[] = ["trainer/tasks", "status_eq"]
  createListener(): void {
    EventManager.create(this.name, new Listener("keydown", keydownByEnterOnTask))
  }

  clearListener(): void {
    EventManager.clearState(this.name);
  }

  enter(): void {
    this.createObservers();
    this.createListener();
  }

  leave(): void {
    this.clearObservers();
    this.clearListener();
  }

  
  public createObservers() {
    ObservingHandlerList.append(
      Handler.create(RebuildAsBlockTask, this.name)
    );
  }

  public clearObservers() {
    ObservingHandlerList.removeHandlerByName(this.name);
  }
}