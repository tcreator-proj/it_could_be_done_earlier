import Context from "../Context";
import HTMLDocument from "./HTMLDocument";

export default class MainFrame {
    private mainFrame: HTMLElement;
    
    constructor() {
        const doc: HTMLDocument = Context.getContext.getDocument;
        this.mainFrame = <HTMLElement> doc.querySelector(".main_frame");
    }

    public hide(): void {
        this.mainFrame.classList.remove("show");
        this.mainFrame.classList.add("hide");
    }

    public show(): void {
        this.mainFrame.classList.remove("hide");
        this.mainFrame.classList.add("show");
    }
}