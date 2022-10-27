import TokenKey from "./TokenKey";
import TokenValue from "./TokenValue";

export default class TokenParagraph {
    private value: TokenValue;
    private key: TokenKey;
    constructor(token_preshow: HTMLElement) {
        this.key = new TokenKey(<HTMLElement> token_preshow.firstChild);
        this.value = new TokenValue(<HTMLElement> token_preshow.lastChild);
    }

    public compareKey(compairingKey: string): boolean {
        return this.key.key.includes(compairingKey);
    }


    public static buildHTML(key: string, value: string): HTMLElement {
        const paragraph: HTMLElement = document.createElement("P");
        paragraph.classList.add("preshow_textarea", "unselectable")
        paragraph.appendChild(TokenKey.buildHTML(key));
        paragraph.appendChild(TokenValue.buildHTML(value));
        return paragraph;
    }
}