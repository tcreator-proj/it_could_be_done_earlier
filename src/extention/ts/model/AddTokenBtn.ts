import Context from "../Context";
import EventSponsor from "../interfaces/EventSponsor";
import HTMLDocument from "./HTMLDocument";

export default class AddTokenBtn implements EventSponsor {
    private containerElement: HTMLElement;
    
    constructor() {
        const doc: HTMLDocument = Context.getContext.getDocument;
        this.containerElement = <HTMLElement> doc.querySelector(".btn-add-token");
    }

    public addEvent(event: string, handler: EventListener): void {
        this.containerElement.addEventListener(event, handler);
    }

}