export default class EditMenuItem {
    public static buildHTML(): HTMLElement {
        const li: HTMLElement = document.createElement("LI");
        li.textContent = "edit";
        li.addEventListener("click", function(event) {
            console.log(this)
        })
        return li;
    }
}