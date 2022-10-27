export default class TokenValue {
    constructor(private element: HTMLElement) {}

    public get value(): string {
        return this.element.textContent;
    }

    public setValue(nodeText: string): void {
        this.element.textContent = nodeText.trim();
    }

    public static buildHTML(value: string): HTMLElement {
        const span: HTMLElement = document.createElement("SPAN");
        span.textContent = value.trim();
        span.classList.add('token_value');
        return span;
    }
}