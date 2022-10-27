export default class HTMLDocument {
    public constructor(protected document: Document) {}

    public getDocument() : Document {
        return this.document;
    }

    public getById(id: string): HTMLElement {
        let idString: string = "#" + id;
        const htmlElement: HTMLElement = this.document.getElementById(idString);
        if(htmlElement !== null) {
            return htmlElement;
        }
        return null;
    }

    public querySelector(selector: string): Element {
        let idString: string = selector;
        const htmlElement: Element = this.document.querySelector(idString);
        if(htmlElement !== null) {
            return htmlElement;
        }
        return null;
    }

    public querySelectorAll(selector: string): NodeList {
        let idString: string = selector;
        const htmlElement: NodeList = this.document.querySelectorAll(idString);
        if(htmlElement.length !== 0) {
            return htmlElement;
        }
        return null;
    }

    public get location(): Location {
        return this.document.location;
    }
}