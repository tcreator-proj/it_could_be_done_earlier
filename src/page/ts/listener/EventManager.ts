import Listener from "./Listener";
import ListenerMap from "./ListenerMap";

export default class EventManager extends ListenerMap {
  protected stateListeners: Map<string, string[]> = new Map();
  protected static _instance: EventManager;

  private constructor() {
    super();
  }

  private static get instance(): EventManager {
    if (!EventManager._instance) {
      EventManager._instance = new EventManager();
    }
    return EventManager._instance;
  }

  public static create(stateName: string, listener: Listener): void {
    if (EventManager.instance.stateListeners.has(stateName)) {
      EventManager.instance.stateListeners.get(stateName).push(listener.id);
    } else {
      EventManager.instance.stateListeners.set(stateName, [listener.id]);
    }

    EventManager.instance.set(listener);
  }

  public static clearState(stateName: string): void {
    if(EventManager.instance.stateListeners.has(stateName)) {
      const stateListenerList: string[] = EventManager.instance.stateListeners.get(stateName);
      stateListenerList.forEach((id: string) => EventManager.instance.remove(id));
      EventManager.instance.stateListeners.delete(stateName);
    }
  }
}