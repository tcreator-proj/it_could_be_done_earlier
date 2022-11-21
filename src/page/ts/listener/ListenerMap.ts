import Listener from "./Listener";

export default class ListenerMap {
  private listenersMap: Map<string, Listener>;
  constructor() {
    this.listenersMap = new Map();
  }

  protected set(listener: Listener): void {
    this.listenersMap.set(listener.id, listener);
  }

  protected remove(id: string): boolean {
    this.listenersMap.get(id).deleteMe();
    return this.listenersMap.delete(id);
  }
}