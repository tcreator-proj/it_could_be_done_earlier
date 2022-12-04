import { ClassNames } from "../../enums/ClassNames";

export default function RestiledTrainerBlock(mutations: MutationRecord[]) {
  try {
    for (let mutation of mutations) {
      if (mutation.attributeName === "class") {
        const target: HTMLElement = <HTMLElement>mutation.target;
        if (target.className === ClassNames.blockUncheckedList) {

          const taskListContainer: HTMLElement = target.querySelector('[data-testid="trainer-tasks"]');
          const childList: HTMLCollection = taskListContainer.children;

          if (taskListContainer) {
            taskListContainer.style.cssText = `
              display: flex;
              flex-wrap: wrap;
              justify-content: space-around;
            `

            if (childList.length) {

              for (let item of childList) {
                const htmlElement: HTMLElement = <HTMLElement>item
                _stylingList(htmlElement);
              }
              const htmlElement: HTMLElement = <HTMLElement> childList[0];
              htmlElement.focus();
            }
          }

        }
      }
    }
  } catch (e) {
    console.error(e)
  }
}

function _stylingList(item: HTMLElement) {
  const avatarBlock: HTMLElement = <HTMLElement>item.firstElementChild;
  const nameAndDateStud: HTMLElement = <HTMLElement>item.children[1];
  const taskDescriptionAndGroup: HTMLElement = <HTMLElement>item.children[2];
  const worksReviewer: HTMLElement = <HTMLElement>item.children[3];
  const checkButton: HTMLElement = <HTMLElement>item.children[4];

  item.setAttribute("item-styled", "");

  if (avatarBlock) {
    avatarBlock.style.display = "none";
  }

  if (nameAndDateStud) {
    const studName: HTMLElement = <HTMLElement>nameAndDateStud.firstElementChild;
    const sendDate: HTMLElement = <HTMLElement>nameAndDateStud.lastElementChild;

    nameAndDateStud.style.cssText = _createResetStyles();

    studName.style.cssText = `
      font-size: 14px;
    `
    sendDate.style.cssText = `
      font-size: 12px;
    `

    if (taskDescriptionAndGroup) {
      const taskDescription: HTMLElement = <HTMLElement>taskDescriptionAndGroup.firstElementChild;
      const shortTaskDescription: RegExpMatchArray = taskDescription.textContent.match(/(?<=[\(\{\['"]).+(?=[\)\}\]'"])/gu);

      taskDescriptionAndGroup.style.cssText = _createResetStyles();

      if (shortTaskDescription.length) {
        shortTaskDescription.forEach((el: string) => taskDescription.textContent = el)
      }
    }

    if (worksReviewer) {
      worksReviewer.style.cssText = _createResetStyles();
    }

    if (checkButton) {
      checkButton.style.cssText = _createResetStyles();
      checkButton.style.flexGrow = "2";
      checkButton.style.alignItems = "center";
      checkButton.style.justifyContent = "center";
    }
  }
  item.setAttribute("tabindex", "10")

  item.style.cssText = `
    width: 300px;
    height: 222px;
    padding: 0;
    padding-left: 10px;
    margin-bottom: 25px;
    margin-top: 25px;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    border-radius: 20px;
  `
}

function _createResetStyles(): string {
  return `
    flex: 0 0 auto;
    position: relative;
    background-color: white;
    margin: 0;
    width: 100%;
    z-index: 10;
  `
}