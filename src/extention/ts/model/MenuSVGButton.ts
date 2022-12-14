import parseToHTMLElement from "../util/parseToHTMLElement";

export default class MenuSVGButton {
    constructor() {}

    public static buildHTML(): HTMLElement {
        const flatSvg: HTMLElement = parseToHTMLElement(`<svg id="Flat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <path d="M136,192a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,136,192ZM128,72a8,8,0,1,0-8-8A8.00917,8.00917,0,0,0,128,72Zm0,48a8,8,0,1,0,8,8A8.00917,8.00917,0,0,0,128,120Z"/>
    </svg>`);
        flatSvg.addEventListener('click', function(e) {
            const father: HTMLElement = this.closest(".preshow");
            this.classList.toggle("rotate");
        
            if(father) {
                const show: HTMLElement = father.querySelector(".menu_list_wrapper");
                show.classList.toggle("show");
            }
        })
        return flatSvg;
    }
    
}