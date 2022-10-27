import EditMenuItem from "./EditMenuItem";
import RemoveMenuItem from "./RemoveMenuItem";
import ShowMenuItem from "./ShowMenuItem";

export default class MenuListWrapper {
    public static buildHTML() {
        const div_wrapper: HTMLElement = document.createElement("DIV");
        const ul: HTMLElement = document.createElement("UL");
        div_wrapper.classList.add("menu_list_wrapper");
        ul.classList.add('preshow_menu_list');
        ul.appendChild(EditMenuItem.buildHTML());
        ul.appendChild(ShowMenuItem.buildHTML());
        ul.appendChild(RemoveMenuItem.buildHTML());
        div_wrapper.appendChild(ul);
        return div_wrapper;
    }
}