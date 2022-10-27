import * as EasyMDE from "easymde";

export default class AddTokenForm {
    constructor() {}

    public static buildHTML(): HTMLElement {
        const pareseToDoc: Document = new DOMParser().parseFromString(`<div class="form_to_editor">
        <div class="wrapper">
            <input type="text" class="input_text_type" placeholder="Write token key here..." maxlength="30">
            <input type="checkbox" class="global_variable_checkbox" value="Global">
            <div class="wrapper_mde">
                <textarea id="text_edit" placeholder="Hello"></textarea>
            </div>
        </div>
        <input type="button" class="add_new_token" value="Add new token">
    </div>`, 'text/html');
        new EasyMDE(pareseToDoc.getElementById("text_edit"));
        pareseToDoc.querySelector(".add_new_token").addEventListener("click", (e) => {
            const input: HTMLInputElement = pareseToDoc.querySelector(".input_text_type");
            const easyMDEContainer: HTMLElement = pareseToDoc.querySelector(".EasyMDEContainer");
            console.log(input.value, easyMDEContainer.textContent)
        })
        return <HTMLElement> pareseToDoc.body.firstChild;
    }
}