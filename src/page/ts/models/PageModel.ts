export default abstract class PageModel {
  protected nextModel: PageModel | null;
  protected entered: boolean = false;
  protected name: string;

  setNextModel(model: PageModel): PageModel {
    this.nextModel = model;
    return this.nextModel;
  }

  checkMe(condition: string): void {
    throw new Error('You need to describe this method')
  }

  public init() {
    throw new Error('You need to describe this method')
  }

  public enter() {
    this.entered = true;
  }

  public lived() {
    this.entered = false;
  }
}