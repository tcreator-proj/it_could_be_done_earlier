import MutationHandler from "./MutationHandler";

export default class ObservingHandlerList {
  protected handlerList: MutationHandler[];
  protected static _instance: ObservingHandlerList;

  protected constructor() {
    this.handlerList = [];
  }

  private static get instance(): ObservingHandlerList {
    if(!ObservingHandlerList._instance) {
      ObservingHandlerList._instance = new ObservingHandlerList();
    }
    return ObservingHandlerList._instance;
  }

  public static append(handler: MutationHandler): void {
    ObservingHandlerList.instance.handlerList.push(handler);
  }

  public static removeHandlerByName(name: string): void {
    ObservingHandlerList.instance.handlerList = ObservingHandlerList
      ._instance
      .handlerList
      .filter((handler: MutationHandler) => !handler.equals(name))
  }

  public static runEverything(mutations: MutationRecord[]): void {
    ObservingHandlerList
      .instance
      .handlerList
      .forEach((handler: MutationHandler) => handler.run(mutations));
  }
}