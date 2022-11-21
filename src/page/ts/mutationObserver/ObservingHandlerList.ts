import Handler from "./Handler";

export default class ObservingHandlerList {
  protected handlerList: Handler[];

  constructor() {
    this.handlerList = [];
  }

  public append(handler: Handler): void {
    this.handlerList.push(handler);
  }

  public removeHandler(id: string): void {
    this.handlerList = this.handlerList.filter((handler: Handler) => handler.id !== id)
  }

  public runEverything(): void {
    this.handlerList.forEach((handler: Handler) => handler.execute());
  }
}