import TokenParagraph from "./TokenParagraph";

export default class TokenList {
    private tokenArray: HTMLElement[];
    constructor() {
        this.tokenArray = new Array<HTMLElement>();
    }

    public add(token: HTMLElement): void {
        this.tokenArray.push(token);
    }

    public get list(): HTMLElement[] {
        return this.tokenArray;
    }
    
    public filter(searchKey: string): HTMLElement[] {
        return this.tokenArray.filter(function(tokenElem) {
            const tokenParagraph: TokenParagraph = new TokenParagraph(tokenElem)
            return tokenParagraph.compareKey(searchKey);            
        })
    }
}