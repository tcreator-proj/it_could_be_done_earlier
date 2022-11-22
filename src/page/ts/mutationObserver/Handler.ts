import Executive from '../commands/Executive';
import { nanoid } from 'nanoid';

export default class Handler implements Executive{
  protected _id: string;
  protected _handler: Function;
  protected _name: string;

  private constructor(handler: Function, name: string) {
    this._name = name;
    this._id = nanoid();
    this._handler = handler;
  }

  public static create(handler: Function, name: string): Handler {
    return new Handler(handler, name);
  }

  get id(): string {
    return this.id;
  }

  execute(): void {
    this._handler();
  }

  public equals(name: string): boolean {
    return this._name === name;
  }
}