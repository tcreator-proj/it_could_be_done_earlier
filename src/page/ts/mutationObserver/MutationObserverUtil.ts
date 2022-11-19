import ObserverInit from "./ObserverInit";

export default class MutationObserverUtil {
  private currentObserver: MutationObserver;

  public change(observerInit: ObserverInit) {
    if(this.currentObserver) {
      this.disconnect();
    }
    this.currentObserver = observerInit.observer;
    this.currentObserver.observe(observerInit.node, observerInit.settings);
  }

  public disconnect(): void {
    this.currentObserver.disconnect();
  }
}