export default class TokenKey {
    constructor(private element: HTMLElement) {}

    public get key(): string {
        return this.element.textContent;
    }

    public setKey(nodeText: string): void {
        this.element.textContent = nodeText.trim();
    }

    public compare(searchString: string): boolean {
        return this.element.textContent.trim() === searchString;
    }

    public static buildHTML(key: string): HTMLElement {
        const span: HTMLElement = document.createElement("SPAN");
        span.textContent = key.trim();
        span.classList.add('token_key');
        return span;
    }
}