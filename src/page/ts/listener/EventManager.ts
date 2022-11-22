import Listener from "./Listener";
import ListenerMap from "./ListenerMap";

export default class EventManager extends ListenerMap {
  protected stateListeners: Map<string, string[]> = new Map();
  protected static _instance: EventManager;

  private constructor() {
    super();
  }

  static get instance(): EventManager {
    if (!EventManager._instance) {
      EventManager._instance = new EventManager();
    }
    return EventManager._instance;
  }

  public create(stateName: string, listener: Listener): void {
    if (this.stateListeners.has(stateName)) {
      this.stateListeners.get(stateName).push(listener.id);
    } else {
      this.stateListeners.set(stateName, [listener.id]);
    }

    this.set(listener);
  }

  public clearState(stateName: string): void {
    if(this.stateListeners.has(stateName)) {
      const stateListenerList: string[] = this.stateListeners.get(stateName);
      stateListenerList.forEach((id: string) => this.remove(id));
      this.stateListeners.delete(stateName);
    }

  }
}