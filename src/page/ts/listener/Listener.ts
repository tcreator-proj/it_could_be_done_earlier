import { nanoid } from "nanoid";

export default class Listener {
  private handler: EventListenerOrEventListenerObject;
  private _id: string;
  private event: string;

  constructor(event: string, handler: EventListenerOrEventListenerObject) {
    this.event = event;
    this.handler = handler;
    this._id = nanoid();
    
    document.body.addEventListener(event, handler);
  }

  public get id(): string {
    return this._id;
  }

  public deleteMe(): void {
    document.body.removeEventListener(this.event, this.handler);
  } 
}
