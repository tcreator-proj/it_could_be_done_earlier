import parseToHTMLElement from "../util/parseToHTMLElement";

export default class TokenListPlug {
    public static buildHTML(): HTMLElement {
        return parseToHTMLElement(`
        <div class="token_list_plug">
        <span class="plug unselectable">
            Token list is empty. You can create youre first token)
        </span></div>`)
    }
}