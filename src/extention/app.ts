import FilterInput from "./ts/model/FilterInput";
import TokenContainer from "./ts/model/TokenContainer";
import TokenList from "./ts/model/TokenList";
import AddTokenBtn from "./ts/model/AddTokenBtn";
import Editor from "./ts/model/Editor";
import Context from "./ts/Context";
import HTMLDocumentEvents from "./ts/model/HTMLDocumentEvents";
import MainFrame from "./ts/model/MainFrame";

const mainFrame: MainFrame = new MainFrame();
const htmlDocumentEvents: HTMLDocumentEvents = Context.getContext.getDocumentEvent;
const filterInput: FilterInput = new FilterInput();
const tokenList: TokenList = new TokenList();
const addTokenBtn: AddTokenBtn = new AddTokenBtn();
const editor: Editor = new Editor();
const tokenContainer: TokenContainer = new TokenContainer();
editor.init();

filterInput.addEvent("input", function(e) {
    const target = <HTMLInputElement> e.target;
    tokenContainer.render(tokenList.filter(target.value))
})

addTokenBtn.addEvent("click", function(e) {
    editor.show();
    mainFrame.hide();
})

tokenContainer.render(tokenList.list);

htmlDocumentEvents.on("click", function(evt) {
    const target: HTMLElement = <HTMLElement> evt.target;
    if(target.classList.contains("add_new_token")) {
        const closest: HTMLElement = target.closest(".form_to_editor");
        const input: HTMLInputElement = <HTMLInputElement> closest.firstElementChild.firstElementChild;
        tokenList.add(TokenContainer.buildHTML(input.value, editor.easymde.value(), 12))
        tokenContainer.render(tokenList.list);
        editor.hide();
        mainFrame.show();
    }

    if(target.classList.contains("window_token_close")) {
        editor.hide();
        mainFrame.show();
    }
})

// browser.tabs.query({currentWindow: true, active : true}).then((tab:any) => {
//     console.log(tab)
//     const connectPopup: browser.runtime.Port = browser.tabs.connect(tab.id);
//     connectPopup.onMessage.addListener((msg: any) => {
//         msg.page.data.forEach( (element: any) => {
//             tokenList.add(TokenContainer.buildHTML(element.token_name, element.token_value, 12))
//         });
//         tokenContainer.render(tokenList.list);
//     })
// })
browser.runtime.onConnect.addListener((port: any) => {
    console.log(1)
    if(port.name === "popup_to") {
        const msg = port.data;
        msg.page.data.forEach( (element: any) => {
            tokenList.add(TokenContainer.buildHTML(element.token_name, element.token_value, 12))
        });
        tokenContainer.render(tokenList.list);
    }
})
