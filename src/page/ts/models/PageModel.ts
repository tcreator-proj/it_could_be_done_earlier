import AppContext from '../AppContext';
import Visitor from './Visitor';
export default abstract class PageModel implements Visitor {
  protected matchers: string[];
  protected nextModel: PageModel | null;
  protected entered: boolean = false;
  protected name: string;

  constructor() {
    this.name = new.target.name;
  }

  abstract enter(): void;
  abstract leave(): void;

  setNextModel(model: PageModel): PageModel {
    this.nextModel = model;
    return this.nextModel;
  }

  checkMe(condition: string): void {
    const matchingResult: boolean = this.matchers.every((matchString: string) => condition.includes(matchString))
    if (matchingResult) {
      if (!this.entered) {
        this.wasEntered();
        this.enter();
        AppContext.setState(this);
        return;
      }
    } else {
      if (this.entered) {
        this.wasLiving();
        this.leave();
      }
      if (this.nextModel) {
        this.nextModel.checkMe(condition)
      }
    }
  }

  wasEntered(): void {
    this.entered = true;
  }

  wasLiving(): void {
    this.entered = false;
  }
}