export default class ShowMenuItem {
    public static buildHTML(): HTMLElement {
        const li: HTMLElement = document.createElement("LI");
        li.textContent = "show";
        li.addEventListener("click", function(event) {
            console.log(this)
        })
        return li;
    }
}