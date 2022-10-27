import * as EasyMDE from "easymde";
import Context from "../Context";
import HTMLDocument from "./HTMLDocument";

export default class Editor {
    private editor: HTMLElement;
    private form_to_editor: HTMLElement;
    private editorMDEContainer: EasyMDE;
    constructor() {
        const doc: HTMLDocument = Context.getContext.getDocument;
        this.form_to_editor = <HTMLElement> doc.querySelector(".form_to_editor");
        this.editor = <HTMLElement> doc.getById("text_edit");
    }

    public init() {
        this.editorMDEContainer = new EasyMDE(this.editor);
    }

    public get easymde(): EasyMDE{
        return this.editorMDEContainer;
    }

    public on(event: any, handler: EventListener): void {
        this.editorMDEContainer.codemirror.on(event, handler);
    }

    public show() {
        this.form_to_editor.classList.add("show");
    }

    public hide() {
        this.form_to_editor.classList.remove("show");
    }
}