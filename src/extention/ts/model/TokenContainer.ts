import Context from "../Context";
import HTMLDocument from "./HTMLDocument";
import MenuListWrapper from "./MenuListWrapper";
import MenuSVGButton from "./MenuSVGButton";
import TokenListPlug from "./TokenListPlug";
import TokenParagraph from "./TokenParagraph";

export default class TokenContainer {
    private containerElement: HTMLElement;
    
    constructor() {
        const doc: HTMLDocument = Context.getContext.getDocument;
        this.containerElement = <HTMLElement> doc.querySelector(".token_container");
    }

    public appendChild(token: HTMLElement): void {
        this.containerElement.appendChild(token);
    }

    public render(tokenList: HTMLElement[]): void {
        this.clearList();
        if(!tokenList.length) {
            this.appendChild(TokenListPlug.buildHTML())
        } else {
            tokenList.forEach((element) => {
                this.appendChild(element);
            })
        }
    }

    public clearList(): void {
        this.containerElement.innerHTML = "";
    }

    public static buildHTML(token_key: string, token_value: string, id: number): HTMLElement {
        const div_token: HTMLElement = document.createElement("DIV");
        div_token.classList.add("token", "show");
        div_token.setAttribute('data-id', String(id));
        const div_preshow: HTMLElement = document.createElement("div");
        div_preshow.classList.add("preshow");
        div_preshow.appendChild(MenuSVGButton.buildHTML());
        div_preshow.appendChild(MenuListWrapper.buildHTML());
        div_preshow.appendChild(TokenParagraph.buildHTML(token_key, token_value))
        div_token.appendChild(div_preshow);
        return div_token;
    }
}