import { ClassNames } from "../enums/ClassNames";

export default class DecliningWork {
  protected sendForRevisionButton: HTMLButtonElement;

  constructor() {
    this.sendForRevisionButton = document.querySelector(ClassNames.sendForRevisionButton);
  }
  
  execute(): void {
    this.sendForRevisionButton?.click();
  }
}