export default class ObserverInit {
  private observingNode: Node;
  private currentObserver: MutationObserver;
  private mutatuionSetting: MutationObserverInit = {
    attributes: true,
    // childList: true,
    subtree: true
  };

  constructor(node: Node, callback: MutationCallback) {
    this.currentObserver = new MutationObserver(callback);
    this.observingNode = node;
  }

  public get observer(): MutationObserver {
    return this.currentObserver;
  }

  public get node(): Node {
    return this.observingNode;
  }

  public get settings(): MutationObserverInit {
    return this.mutatuionSetting;
  }
}