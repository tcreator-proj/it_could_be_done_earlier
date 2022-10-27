export default class RemoveMenuItem {
    public static buildHTML(): HTMLElement {
        const li: HTMLElement = document.createElement("LI");
        li.textContent = "remove";
        li.addEventListener("click", function(event) {
            console.log(this)
        })
        return li;
    }
}