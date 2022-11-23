import { nanoid } from 'nanoid';

export default class MutationHandler {
  protected _id: string;
  protected _handler: Function;
  protected _name: string;

  private constructor(handler: Function, name: string) {
    this._name = name;
    this._id = nanoid();
    this._handler = handler;
  }

  public static create(handler: Function, name: string): MutationHandler {
    return new MutationHandler(handler, name);
  }

  get id(): string {
    return this.id;
  }

  run(mutations: MutationRecord[]): void {
    this._handler(mutations);
  }

  public equals(name: string): boolean {
    return this._name === name;
  }
}