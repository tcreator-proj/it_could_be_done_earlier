import Executive from '../commands/Executive';
import { nanoid } from 'nanoid';

export default class Handler implements Executive{
  protected _id: string;
  protected _handler: Function; 

  constructor(handler: Function) {
    this._id = nanoid();
    this._handler = handler;
  }

  get id(): string {
    return this.id;
  }

  execute(): void {
    this._handler();
  }
}