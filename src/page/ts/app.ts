import AppContext from "./AppContext";
import CalendarModel from "./models/CalendarModel";
import CurrentDimplomaModel from "./models/CurrentDiplomaModel";
import CurrentTaskModel from "./models/CurrentTaskModel";
import ScheduleModel from "./models/ScheduleModel";
import UncheckedTasksModel from "./models/UncheckedTasksModel";
import UncheckedDimplomaModel from "./models/UnchekedDimplomaModel";
import UserTasksModel from "./models/UserTasksModel";
import ObserverInit from "./mutationObserver/ObserverInit";

try {
    const target: HTMLElement = document.body;
    AppContext.init([
        new CalendarModel,
        new CurrentDimplomaModel,
        new CurrentTaskModel,
        new ScheduleModel,
        new UncheckedDimplomaModel,
        new UncheckedTasksModel,
        new UserTasksModel
    ])
    AppContext.changeObserver(new ObserverInit(target, () => {
        const loc: Location = document.location;
        const url: string = loc.href;
        console.log(url)
        AppContext.changeState(url);
    }))
} catch (e) {
    console.error(e)
}
// Выбираем целевой элемент


// шлюзы установки слушателей
let into: boolean = true;
let intoButtons: boolean = true;
let applyingButtonHandlerImplementing: boolean = true;
let textAreaGate: boolean = true;

let windowOpened: WindowProxy[] = [];

// if (target) {
    // Конфигурация observer (за какими изменениями наблюдать)
    // const config = {
    //     attributes: true,
    //     // childList: true,
    //     subtree: true
    // };

    // Колбэк-функция при срабатывании мутации
    // const callback: MutationCallback = function (mutationsList: MutationRecord[], observer: MutationObserver) {
    //     const loc: Location = document.location;
    //     const url: string = loc.href;

    //     if (url.includes("trainer/schedule")) {
    //         // console.log("Расписание", mutationsList, observer)
    //     }

    //     if (url.includes("trainer/calendar")) {
    //         console.log("Календарь")
    //     }
    //     if (url.includes("trainer/tasks")) {
    //         into = true;
    //         intoButtons = true;
    //         applyingButtonHandlerImplementing = true;
    //         textAreaGate = true;
    //         console.log("Домашки - сейчас")
    //     }

    //     if (url.includes("trainer/diplomas")) {
    //         console.log("Дипломы - ожидает проверки")
    //     }

    //     if (url.includes("trainer/task/")) {
    //         // console.log("Редактор", mutationsList, observer)

    //         const anchors: HTMLElement = document.querySelector(".src-features-trainer-trainerTask-components-Task-components-LastMessages--solutions--mQXwI");
    //         const buttonsResultBlock: HTMLElement = document.querySelector(".src-features-trainer-trainerTask-components-Task-components-MarkdownEditor--buttons--BJgkE");
    //         const backToTaskListButton: HTMLElement = document.querySelector(".src-features-trainer-trainerTask-components-Task-components-Title--backButton--GpUNE");
    //         const applyingButton: HTMLButtonElement = document.querySelector(".src-features-trainer-trainerTask-components-Task-components-Header--buttonReview--ts9ZK");
    //         const textArea: HTMLElement = document.querySelector(".CodeMirror-scroll");

    //         if (textArea && textAreaGate) {
    //             textAreaGate = false;
    //             textArea.tabIndex = 2;

    //             textArea.focus();
    //         }


    //         if (applyingButton && applyingButtonHandlerImplementing) {
    //             console.log("Кнопка взятия на проверку")
    //             applyingButtonHandlerImplementing = false;
    //             const body: HTMLElement = document.body;
    //             body.addEventListener("keydown", (evt: KeyboardEvent) => {

    //                 // Apply task
    //                 if (evt.ctrlKey && evt.code === "Space") {
    //                     console.log("Кнопка взятия на проверку - действие")
    //                     evt.preventDefault();
    //                     applyingButton.click();
    //                 }
    //             })
    //             body.addEventListener("keyup", (evt: KeyboardEvent) => false)
    //         }

    //         if (buttonsResultBlock && intoButtons) {
    //             intoButtons = false;
    //             const body: HTMLElement = document.body;

    //             const leftButton: HTMLButtonElement = <HTMLButtonElement>buttonsResultBlock.firstElementChild;
    //             const rightButton: HTMLButtonElement = <HTMLButtonElement>buttonsResultBlock.lastElementChild;

    //             body.addEventListener("keydown", (evt: KeyboardEvent) => {

    //                 // Apply task
    //                 if (evt.ctrlKey && evt.code === "Enter") {
    //                     evt.preventDefault();
    //                     rightButton.click();
    //                     backToTaskListButton.click();
    //                 }

    //                 if (evt.ctrlKey && evt.code === "BracketRight") {
    //                     evt.preventDefault();
    //                     leftButton.click();
    //                     backToTaskListButton.click();
    //                 }
    //             })
    //             body.addEventListener("keyup", (evt: KeyboardEvent) => false)
    //         }

    //         if (anchors && into) {
    //             const body: HTMLElement = document.body;

    //             into = false;
    //             function keyPressDown(evt: KeyboardEvent) {
    //                 if (!windowOpened.length) {
    //                     const children: HTMLCollection = anchors.children;
    //                     for (let child of children) {
    //                         const link: HTMLElement = child.querySelector('a');
    //                         const proxy: WindowProxy = window.open(link.getAttribute('href'), link.getAttribute('target'));
    //                         windowOpened.push(proxy);
    //                     }
    //                 } else {
    //                     windowOpened.forEach((el: WindowProxy) => el.closed || el.close());
    //                     windowOpened = [];
    //                 }
    //             }

    //             function openAll(evt: Event) {
    //                 const target: HTMLElement = <HTMLElement>evt.target;

    //                 if (!windowOpened.length) {
    //                     const children: HTMLCollection = anchors.children;

    //                     target.textContent = "Close All"

    //                     for (let child of children) {
    //                         const link: HTMLElement = child.querySelector('a');
    //                         const proxy: WindowProxy = window.open(link.getAttribute('href'), link.getAttribute('target'));
    //                         windowOpened.push(proxy);
    //                     }
    //                 } else {
    //                     windowOpened.forEach((el: WindowProxy) => el.closed || el.close());
    //                     windowOpened = [];
    //                     target.textContent = "Open All"
    //                 }
    //             }

    //             body.addEventListener('keydown', (evt: KeyboardEvent) => {
    //                 if (evt.ctrlKey && evt.code === "Slash") {
    //                     keyPressDown(evt);
    //                 }
    //             })
    //             body.addEventListener("keyup", () => false);

    //             console.log("Встроено 1")
    //             function makeButton(): Node {
    //                 const buttonContainer: HTMLElement = document.createElement("div");
    //                 buttonContainer.style.position = "absolute";
    //                 buttonContainer.style.display = "flex";
    //                 buttonContainer.style.flexDirection = "column"
    //                 buttonContainer.style.justifyContent = "center";
    //                 buttonContainer.style.alignItems = "center";
    //                 buttonContainer.style.cursor = "pointer";

    //                 buttonContainer.style.top = "50%";
    //                 buttonContainer.style.right = "150px";
    //                 buttonContainer.style.width = "50px";
    //                 buttonContainer.style.zIndex = "50";
    //                 buttonContainer.style.fontSize = "10px";

    //                 buttonContainer.style.height = "50px";
    //                 buttonContainer.style.backgroundColor = "#cbe6a8";
    //                 buttonContainer.style.borderRadius = "50%";
    //                 buttonContainer.style.textAlign = "center";

    //                 const span: HTMLElement = document.createElement("span");
    //                 const spanCtrl: HTMLElement = document.createElement("span");
    //                 span.textContent = `Open ALL`;
    //                 spanCtrl.textContent = "ctrl+/";
    //                 spanCtrl.style.fontSize = "8px";

    //                 buttonContainer.appendChild(span)
    //                 buttonContainer.appendChild(spanCtrl)

    //                 buttonContainer.addEventListener('click', openAll);

    //                 return buttonContainer;
    //             }
    //             anchors.appendChild(makeButton());
    //         }
    //     }
    // };

    // const callback: MutationCallback = (mutationsList: MutationRecord[], observer: MutationObserver) => {
    //     context

    // }

    // // Создаём экземпляр наблюдателя с указанной функцией колбэка
    // const observer = new MutationObserver(callback);

    // // Начинаем наблюдение за настроенными изменениями целевого элемента
    // observer.observe(target, config);
// }

