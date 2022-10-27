import HTMLDocument from "./HTMLDocument";

export default class HTMLDocumentEvents extends HTMLDocument {
    constructor(document: Document) {
        super(document);
    }

    public on(event: string, handler: EventListener) {
        this.document.addEventListener(event, handler);
    }
}