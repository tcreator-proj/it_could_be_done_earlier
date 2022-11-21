import { ClassNames } from '../enums/ClassNames';
import Executive from './Executive';
export default class ApprovingWork implements Executive{
  protected approveButton: HTMLButtonElement;

  constructor() {
    this.approveButton = document.querySelector(ClassNames.approveItButton);
  }
  
  execute(): void {
    this.approveButton?.click();
  }
}