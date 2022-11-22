import Handler from "./Handler";

export default class ObservingHandlerList {
  protected handlerList: Handler[];
  protected static _instance: ObservingHandlerList;

  protected constructor() {
    this.handlerList = [];
  }

  public static get instance(): ObservingHandlerList {
    if(!ObservingHandlerList._instance) {
      ObservingHandlerList._instance = new ObservingHandlerList();
    }
    return ObservingHandlerList._instance;
  }

  public append(handler: Handler): void {
    this.handlerList.push(handler);
  }

  public removeHandlerByName(name: string): void {
    this.handlerList = this.handlerList.filter((handler: Handler) => !handler.equals(name))
  }

  public runEverything(): void {
    this.handlerList.forEach((handler: Handler) => handler.execute());
  }
}