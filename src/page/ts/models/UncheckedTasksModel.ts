import AppContext from "../AppContext"
import ObservingHandlerList from "../mutationObserver/ObservingHandlerList";
import PageModel from "./PageModel"
import Visitor from './Visitor';
import Observable from './Observable';
import Handler from "../mutationObserver/Handler";
import RebuildAsBlockTask from "../mutationsHandler/RebuildAsBlockTask";

export default class UncheckedTasksModel extends PageModel implements Visitor, Observable {

  constructor() {
    super();
    this.name = new.target.name;
  }

  enter(): void {
    this.entered = true;
    AppContext.setState(this);
    // this.createObservers();
  }

  leave(): void {
    // this.clearObservers();
    this.entered = false;
  }

  
  public createObservers() {
    ObservingHandlerList.instance.append(
      Handler.create(RebuildAsBlockTask, this.name)
    );
  }

  public clearObservers() {
    ObservingHandlerList.instance.removeHandlerByName(this.name);
  }

  checkMe(condition: string): void {
    if (condition.includes("trainer/tasks") && condition.includes("status_eq")) {
      if (!this.entered) {
        this.enter();
        return;
      }
    } else {
      if (this.nextModel) {
        this.leave();
        this.nextModel.checkMe(condition);
      }
    }
  }
}