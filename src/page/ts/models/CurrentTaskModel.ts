import AppContext from "../AppContext"
import EventManager from "../listener/EventManager";
import Listener from "../listener/Listener";
import PageModel from "./PageModel"
import TabsOpenClose from '../commands/TabsOpenClose';
import TakeAWork from '../commands/TakeAWork';
import ApprovingWork from '../commands/ApprovingWork';
import DecliningWork from '../commands/DecliningWork';
import Visitor from './Visitor';

export default class CurrentTaskModel extends PageModel implements Visitor {

  constructor() {
    super();
    this.name = new.target.name;
  }

  enter(): void {
    this.entered = true;
    this.createListener();
    AppContext.setState(this);
  }

  leave(): void {
    this.entered = false;
    this.removeListener();
    new TabsOpenClose().execute();
  }

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

  private createListener() {
    EventManager.instance.create(this.name, new Listener("keydown", (evt: KeyboardEvent) => {
      if (evt.ctrlKey && evt.code === "BracketRight") {
        console.log("Open all links")
        evt.preventDefault();
        new TabsOpenClose().execute();
      }
    }))

    EventManager.instance.create(this.name, new Listener("keydown", (evt: KeyboardEvent) => {
      if (evt.ctrlKey && evt.code === "Space") {
        console.log("Кнопка взятия на проверку - действие")
        new TakeAWork().execute();
        evt.preventDefault();
      }
    }))

    // Approving 
    EventManager.instance.create(this.name, new Listener("keydown", (evt: KeyboardEvent) => {
      if (evt.ctrlKey && evt.code === "Enter") {
        new ApprovingWork().execute()
        evt.preventDefault();
        // backToTaskListButton.click();
      }
    }))

    // Declining
    EventManager.instance.create(this.name, new Listener("keydown", (evt: KeyboardEvent) => {
      if (evt.altKey && evt.code === "Enter") {
        new DecliningWork().execute();
        evt.preventDefault();
      }
    }))
  }

  private removeListener() {
    EventManager.instance.clearState(this.name);
  }

  public pinnedAllHandlers() {
    const textArea: HTMLElement = document.querySelector(".CodeMirror-scroll");

    if (textArea) {
      textArea.tabIndex = 2;

      textArea.focus();
    }
  }
}
