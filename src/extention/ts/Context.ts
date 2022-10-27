import HTMLDocument from "./model/HTMLDocument";
import HTMLDocumentEvents from "./model/HTMLDocumentEvents";
import LocalStorage from "./model/LocalStorage";


// singltone
export default class Context {
  private window: Window;
  private static instance: Context;

  private constructor(window: Window) {
    this.window = window;
  }

  public static get getContext(): Context {
    if(Context.instance === undefined) {
      Context.instance = new Context(window);
    }
    return Context.instance;
  }

  public get getWindow(): Window {
    return Context.getContext.window;
  }

  public get getDocument(): HTMLDocument {
    return new HTMLDocument(this.getWindow.document);
  }

  public get getDocumentEvent(): HTMLDocumentEvents {
    return new HTMLDocumentEvents(this.getWindow.document);
  }

  public get getLocalStorage(): LocalStorage {
    return new LocalStorage(this.getWindow.localStorage);
  }
}