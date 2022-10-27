export default class LocalStorage {
     public constructor(protected storage: Storage) {}

    public getStorage() : Storage {
        return this.storage;
    }

    public getItem(name: string): string {
        return this.storage.getItem(name);
    }

    public getItemAny(name: string): any {
        return JSON.parse(this.getItem(name));
    }
}