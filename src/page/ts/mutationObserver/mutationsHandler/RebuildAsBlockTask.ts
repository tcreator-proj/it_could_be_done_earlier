import { ClassNames } from "../../enums/ClassNames"

export default function RebuildAsBlockTask(mutations: MutationRecord[]) {
  try {
    for (let mutation of mutations) {
      if (mutation.attributeName === "class") {
        const target: HTMLElement = <HTMLElement>mutation.target;
        if (target.className === ClassNames.blockUncheckedList) {
          _expandWidthMainBlock(target)
          const childList: NodeListOf<HTMLElement> = target.querySelectorAll(ClassNames.itemOfUncheckedTaskList);

          if (childList.length) {
            for (let item of childList) {
              _stylingList(item);
            }
            childList[0].focus();
          }
        }
      }
    }
  } catch (e) {
    console.error(e)
  }
}

// Стилизуем основной блок со списком заданий 
function _markByStyled(block: HTMLElement) {
  block.setAttribute("styled", "");
}

function _expandWidthMainBlock(block: HTMLElement) {
  const closestParent: HTMLElement = block.closest(ClassNames.mainBlock);
  const taskListContainer: HTMLElement = block.querySelector('[data-testid="trainer-tasks"]');

  if (taskListContainer) {
    const tableHeaderDescribe: HTMLElement = <HTMLElement>taskListContainer.firstElementChild;

    taskListContainer.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    `
    if(tableHeaderDescribe) tableHeaderDescribe.style.display = "none";
  }

  _markByStyled(block);

  closestParent.style.cssText = `
    max-width: 100%;
    padding: 0 20px;
  `
}

// Стилизация списка задач
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