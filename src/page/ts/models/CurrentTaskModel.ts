import AppContext from "../AppContext"
import EventManager from "../listener/EventManager";
import Listener from "../listener/Listener";
import PageModel from "./PageModel"
import TabsOpenClose from '../commands/TabsOpenClose';
import TakeAWork from '../commands/TakeAWork';
import ApprovingWork from '../commands/ApprovingWork';
import DecliningWork from '../commands/DecliningWork';
import ObservingHandlerList from '../mutationObserver/ObservingHandlerList';
import Observable from './Observable';

export default class CurrentTaskModel extends PageModel implements Observable {

  checkMe(condition: string): void {
    if (condition.includes("trainer/task/")) {
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

  enter(): void {
    this.wasEntered();
    this.createObservers();
    this.createListener();
    AppContext.setState(this);
  }

  leave(): void {
    this.wasLiving();
    this.clearObservers();
    this.removeListener();
    // new TabsOpenClose().execute();
  }

  public createObservers() {
    // ObservingHandlerList.instance.append(
    //   Handler.create(() => {console.log(1)}, this.name)
    // );
  }

  public clearObservers() {
    ObservingHandlerList.removeHandlerByName(this.name);
  }

  private createListener() {
    EventManager.create(this.name, new Listener("keydown", (evt: KeyboardEvent) => {
      if (evt.ctrlKey && evt.code === "BracketRight") {
        evt.preventDefault();
        new TabsOpenClose().execute();
      }
    }))

    EventManager.create(this.name, new Listener("keydown", (evt: KeyboardEvent) => {
      if (evt.ctrlKey && evt.code === "Space") {
        new TakeAWork().execute();
        evt.preventDefault();
      }
    }))

    // Approving 
    EventManager.create(this.name, new Listener("keydown", (evt: KeyboardEvent) => {
      if (evt.ctrlKey && evt.code === "Enter") {
        new ApprovingWork().execute()
        evt.preventDefault();
        // backToTaskListButton.click();
      }
    }))

    // Declining
    EventManager.create(this.name, new Listener("keydown", (evt: KeyboardEvent) => {
      if (evt.altKey && evt.code === "Enter") {
        new DecliningWork().execute();
        evt.preventDefault();
      }
    }))
  }

  private removeListener() {
    EventManager.clearState(this.name);
  }
}
