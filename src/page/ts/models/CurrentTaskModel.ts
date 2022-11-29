import EventManager from "../listener/EventManager";
import Listener from "../listener/Listener";
import PageModel from "./PageModel"
import TabsOpenClose from '../commands/TabsOpenClose';
import TakeAWork from '../commands/TakeAWork';
import ApprovingWork from '../commands/ApprovingWork';
import DecliningWork from '../commands/DecliningWork';
import ObservingHandlerList from '../mutationObserver/ObservingHandlerList';
import Observable from './Observable';
import MutationHandler from '../mutationObserver/MutationHandler';

export default class CurrentTaskModel extends PageModel implements Observable {
  protected matchers: string[] = ["trainer/task/"]

  enter(): void {
    this.createObservers();
    this.createListener();
  }

  leave(): void {
    this.clearObservers();
    this.removeListener();
    new TabsOpenClose().execute();
  }

  public createObservers() {
    ObservingHandlerList.append(
      MutationHandler.create(() => { 
        const wrapperBlock: HTMLElement = document.querySelector('.src-features-trainer-trainerTask-components-Task--wrapper--X6tFI');
        if(wrapperBlock) {
          console.log(12)
          // wrapperBlock.style.cssText = `
          //   width: 90%;
          //   display: flex;
          //   flex-direction: column;
          //   justify-content: center;
          //   padding-left: 20px;
          //   padding-right: 20px;
          // `
          // const taskBlock: HTMLElement = <HTMLElement>wrapperBlock.firstElementChild;
          // // const historyBlock: HTMLElement = <HTMLElement>wrapperBlock.lastElementChild;
          // if(taskBlock) {
          //   const newWrapperBlock: HTMLElement = document.createElement("div");
          //   newWrapperBlock.style.cssText = `
          //     display: flex;
          //     order: 1;
          //     flex-direction: column;
          //     justify-content: space-between;
          //   `

          //   taskBlock.style.cssText = `
          //     display: flex;
          //     justify-content: space-around;
          //   `
          //   taskBlock.append(newWrapperBlock);
          // }
          
        }
       }, this.name)
    );
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
