import { CheckCallback } from '../types/checkCallback';
import Visitor from './Visitor';
export default abstract class PageModel implements Visitor {
  protected nextModel: PageModel | null;
  protected entered: boolean = false;
  protected name: string;

  constructor() {
    this.name = new.target.name;
  }

  enter(): void {
    throw new Error('Method not implemented.');
  }

  leave(): void {
    throw new Error('Method not implemented.');
  }

  setNextModel(model: PageModel): PageModel {
    this.nextModel = model;
    return this.nextModel;
  }

  checkMe(condition: CheckCallback): void {
    throw new Error('You need to describe this method')
  }

  wasEntered(): void {
    this.entered = true;
  }

  wasLiving(): void {
    this.entered = false;
  }
}