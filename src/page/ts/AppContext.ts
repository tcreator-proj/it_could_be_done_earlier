import PageModel from "./models/PageModel";
import MutationObserverUtil from "./mutationObserver/MutationObserverUtil";
import ObserverInit from "./mutationObserver/ObserverInit";

export default abstract class AppContext {
  private static _pages: PageModel[];
  private static _state: PageModel;
  private static _mutationObserver: MutationObserverUtil;

  public static setState(model: PageModel): void {
    AppContext._state = model;
  }

  public static init(pageList: PageModel[]): void {
    AppContext._mutationObserver = new MutationObserverUtil();
    AppContext._pages = pageList;
    AppContext._pages.forEach((el: PageModel, i: number) => {
      const next: PageModel = AppContext._pages.at(i + 1);
      if(next) {
        el.setNextModel(next);
        return;
      }
      el.setNextModel(null);
    })
  }

  public static changeState(condition: string): void {
    AppContext._pages[0].checkMe(condition);
    AppContext._state && AppContext._state.init()
  }

  public static changeObserver(observerInit: ObserverInit): void {
    AppContext._mutationObserver.change(observerInit);
  }
}