export default class Flags {
  protected flagMap: Map<string, boolean>;
  protected static _instance: Flags;

  constructor() {
    this.flagMap = new Map();
  }

  public static get instance(): Flags {
    if (!Flags._instance) {
      Flags._instance = new Flags();
    }
    return Flags._instance;
  }

  public getValue(key: string): boolean {
    if (this.flagMap.has(key)) {
      return this.flagMap.get(key)
    }
  }

  public setValue(key: string, value: boolean): void {
    this.flagMap.set(key, value);
  }
}