// Выбираем целевой элемент
var target: HTMLElement = document.querySelector('body');

console.log("Entered", target)

let into: boolean = true;
let windowOpened: WindowProxy[] = [];

if (target) {
    // Конфигурация observer (за какими изменениями наблюдать)
    const config = {
        attributes: true,
        childList: true,
        subtree: true
    };

    // Колбэк-функция при срабатывании мутации
    const callback: MutationCallback = function (mutationsList: MutationRecord[], observer: MutationObserver) {
        const loc: Location = document.location;
        const url: string = loc.href;

        if (url.includes("trainer/schedule")) {
            console.log("Расписание", mutationsList, observer)
        }

        if (url.includes("trainer/calendar")) {
            console.log("Календарь")
        }
        if (url.includes("trainer/tasks")) {
            into = true;
            console.log("Домашки - сейчас")
        }

        if (url.includes("trainer/diplomas")) {
            console.log("Дипломы - ожидает проверки")
        }

        if (url.includes("trainer/task/")) {
            console.log("Редактор", mutationsList, observer)


            
            const anchors: HTMLElement = document.querySelector(".src-features-trainer-trainerTask-components-Task-components-LastMessages--solutions--mQXwI")
            

            if (anchors && into) {
                const body: HTMLElement = document.body;

                into = false;
                function keyPressDown(evt: KeyboardEvent) {
                    if (!windowOpened.length) {
                        const children: HTMLCollection = anchors.children;
                        for (let child of children) {
                            const link: HTMLElement = child.querySelector('a');
                            const proxy: WindowProxy = window.open(link.getAttribute('href'), link.getAttribute('target'));
                            windowOpened.push(proxy);
                        }
                    } else {
                        windowOpened.forEach( (el: WindowProxy) => el.closed || el.close());
                        windowOpened = [];
                    }
                }

                function openAll(evt: Event) {
                    const target: HTMLElement = <HTMLElement> evt.target;

                    if (!windowOpened.length) {
                        const children: HTMLCollection = anchors.children;
                        
                        target.textContent = "Close All"

                        for (let child of children) {
                            const link: HTMLElement = child.querySelector('a');
                            const proxy: WindowProxy = window.open(link.getAttribute('href'), link.getAttribute('target'));
                            windowOpened.push(proxy);
                        }
                    } else {
                        windowOpened.forEach( (el: WindowProxy) => el.closed || el.close());
                        windowOpened = [];
                        target.textContent = "Open All"
                    }
                }

                body.addEventListener('keydown', (evt: KeyboardEvent) => {     
                    if(evt.ctrlKey && evt.keyCode === 191) {
                        console.log("!")
                        keyPressDown(evt);
                    }
                })
                body.addEventListener("keyup", () => false);

                console.log("Встроено 1")
                function makeButton(): Node {
                    const buttonContainer: HTMLElement = document.createElement("div");
                    buttonContainer.style.position = "absolute";
                    buttonContainer.style.display = "flex";
                    buttonContainer.style.justifyContent = "center";
                    buttonContainer.style.alignItems = "center";
                    buttonContainer.style.cursor = "pointer";
                    
                    buttonContainer.style.top = "50%";
                    buttonContainer.style.right = "150px";
                    buttonContainer.style.width = "50px";
                    buttonContainer.style.zIndex = "50";
                    buttonContainer.style.fontSize = "10px";
                    
                    buttonContainer.style.height = "50px";
                    buttonContainer.style.backgroundColor = "#cbe6a8";
                    buttonContainer.style.borderRadius = "50%";
                    buttonContainer.style.textAlign = "center";

                    const span: HTMLElement = document.createElement("span");
                    span.textContent = !windowOpened.length ? "Open ALL" : "Close All";

                    buttonContainer.appendChild(span)

                    buttonContainer.addEventListener('click', openAll);
                    console.log("Встроено")
                    return buttonContainer;
                }
                anchors.appendChild(makeButton());
            }
        }
    };

    // Создаём экземпляр наблюдателя с указанной функцией колбэка
    const observer = new MutationObserver(callback);

    // Начинаем наблюдение за настроенными изменениями целевого элемента
    observer.observe(target, config);
}

