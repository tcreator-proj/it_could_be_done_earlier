import Context from "../Context";
import EventSponsor from "../interfaces/EventSponsor";
import HTMLDocument from "./HTMLDocument";

export default class FilterInput implements EventSponsor {
    private txtInput: HTMLElement;
    constructor() {
        const document: HTMLDocument = Context.getContext.getDocument;
        this.txtInput = <HTMLElement> document.querySelector(".filter_input");
    }
    
    public addEvent(event: string, handler: EventListener): void {
        this.txtInput.addEventListener(event, handler);
    }
}