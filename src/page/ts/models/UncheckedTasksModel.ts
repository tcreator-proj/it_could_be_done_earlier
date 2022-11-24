import AppContext from "../AppContext"
import ObservingHandlerList from "../mutationObserver/ObservingHandlerList";
import PageModel from "./PageModel"
import Visitor from './Visitor';
import Observable from './Observable';
import Handler from "../mutationObserver/MutationHandler";
import RebuildAsBlockTask from "../mutationObserver/mutationsHandler/RebuildAsBlockTask";
import Listenable from './Listenable';
import EventManager from "../listener/EventManager";
import Listener from "../listener/Listener";

export default class UncheckedTasksModel extends PageModel implements Visitor, Observable, Listenable {

  constructor() {
    super();
    this.name = new.target.name;
  }

  createListener(): void {
    EventManager.create(this.name, new Listener("keydown", (evt: KeyboardEvent) => {
      if(evt.code === "Enter") {
        evt.preventDefault();
        const focusedBlock: HTMLElement = <HTMLElement>document.activeElement;
        console.log(focusedBlock, focusedBlock.getAttribute("item-styled"))
        if(focusedBlock.hasAttribute("item-styled")) {
          const statusTaskOnFocusedBlock: HTMLElement = focusedBlock.querySelector('[data-testid="trainer-tasks-status"]');
          console.log(statusTaskOnFocusedBlock)
          if(statusTaskOnFocusedBlock) {
            const statusLinkToPesonalWorkPage: HTMLElement = <HTMLElement>statusTaskOnFocusedBlock.firstElementChild;
            statusLinkToPesonalWorkPage && statusLinkToPesonalWorkPage.click();
          }
        }
      }
    }))
  }
  clearListener(): void {
    EventManager.clearState(this.name);
  }

  enter(): void {
    this.entered = true;
    AppContext.setState(this);
    this.createObservers();
    this.createListener();
  }

  leave(): void {
    this.clearObservers();
    this.clearListener();
    this.entered = false;
  }

  
  public createObservers() {
    ObservingHandlerList.append(
      Handler.create(RebuildAsBlockTask, this.name)
    );
  }

  public clearObservers() {
    ObservingHandlerList.removeHandlerByName(this.name);
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