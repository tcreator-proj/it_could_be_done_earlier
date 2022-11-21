import { ClassNames } from '../enums/ClassNames';
import Executive from './Executive';
export default class TakeAWork implements Executive {
  private takeAHomeworkButton: HTMLButtonElement;

  constructor() {
    this.takeAHomeworkButton = document.querySelector(ClassNames.takeAHomeWorkButton);
  }

  execute(): void {
    this.takeAHomeworkButton?.click();
  }
}