import { ClassNames } from "../enums/ClassNames"
import { throttle } from '../debouncer';
import Flags from '../enums/Flags';

Flags.instance.setValue("rebuildFlag", true);

export default function RebuildAsBlockTask() {


  const itemMainBlock: HTMLElement = document.querySelector(ClassNames.mainBlock);
  if (itemMainBlock && Flags.instance.getValue("rebuildFlag")) {
    
    throttle(() => {
      mainBlockStyle(itemMainBlock)
    }, 2000)();
  }
}

function mainBlockStyle(block: HTMLElement) {
  block.setAttribute("styled", "");
  block.style.maxWidth = "100%";
  block.style.padding = "0 20px";
}

// function itemsStyle(items: HTMLElement[]) {
//   block.setAttribute("styled", "");

//   block.style.maxWidth = "100%";
//   block.style.padding = "0 20px";

// }


// const taskList = document.querySelectorAll(".src-features-trainer-trainerTasks-components-Tasks-components-Task--root--JucPV");
//     const taskListContainer: HTMLElement = document.querySelector(".src-features-trainer-trainerTasks-components-Tasks--scroll--mh1ag");
//     const taskListBar = taskListContainer.querySelector(".src-features-trainer-trainerTasks-components-Tasks--columnNames--N4MMd")

//     taskListContainer.style.display = "flex";
//     taskListContainer.style.flexWrap = "wrap";
//     taskListContainer.style.justifyContent = "space-between";

//     class StatusBar {
//       buttonBlock: any;
//       paid: any;
//       linkToEditor: any;
//       statusTextPandingRevision: any;
//       statusTextPositive: any;
//       statusTextUnderRevision: any;
//       statusTextReject: any;
//       constructor(buttonBlockNode: { buttonBlock: any; paid: any; linkToRedactor: any; statusTextPandingRevision: any; statusTextPositive: any; statusTextUnderRevision: any; statusTextReject: any; }) {
//         // полностью блок кнопки
//         this.buttonBlock = buttonBlockNode.buttonBlock;
//         // есть ли маркер оплаты
//         this.paid = buttonBlockNode.paid;
//         // ссылка на ссылку на редактор
//         this.linkToEditor = buttonBlockNode.linkToRedactor;
//         // ожидает проверки
//         this.statusTextPandingRevision = buttonBlockNode.statusTextPandingRevision;
//         // зачёт
//         this.statusTextPositive = buttonBlockNode.statusTextPositive;
//         // на доработке
//         this.statusTextUnderRevision = buttonBlockNode.statusTextUnderRevision;
//         // незачёт
//         this.statusTextReject = buttonBlockNode.statusTextReject;

//       }

//       isUnderRevision() {
//         return !!this.statusTextUnderRevision;
//       }

//       isTaskPositive() {
//         return !!this.statusTextPositive;
//       }

//       isThisReject() {
//         return !!this.statusTextReject;
//       }

//       isThisPandingRevision() {
//         return !!this.statusTextPandingRevision;
//       }

//       makeStatusBlock() {
//         let iconStatus, statusTextS;

//         if (this.isThisPandingRevision()) {
//           statusTextS = this.statusTextPandingRevision.textContent;
//           const colour = "green";
//           iconStatus = makePandingRevisionData(statusTextS, colour).icon
//         }

//         if (this.isThisReject()) {
//           statusTextS = this.statusTextReject.textContent;
//           iconStatus = makeRejectData(statusTextS).icon;
//         }

//         if (this.isTaskPositive()) {
//           statusTextS = this.statusTextPositive.textContent;
//           iconStatus = makePositiveData(statusTextS).icon;
//         }

//         if (this.isUnderRevision()) {
//           statusTextS = this.statusTextUnderRevision.textContent;
//           iconStatus = makeUnderRevisionData(statusTextS).icon;
//         }


//         const { icon, statusText } = makePaidData(this.paid);

//         return `
//     <div class="status-block-container" style="position: absolute; width: 50px; display: flex; top: 10px; right: 10px;  z-index: 100;">
//       <div class="icon-block" style="width: 25px; cursor: help;">
//         ${iconStatus}
//       </div>
//       <div class="icon-block" style="width: 25px; cursor: help;">
//         ${icon}
//       </div>
//       <div class="description" hidden style="border-radius: 10%; border-top: 1px solid grey; border-bottom: 1px solid grey; font-size: 12px; position: absolute;
//       width: 150px;  left: 50px; top: 25px; background-color: white;" >
//         <div class="status" style="display: flex; padding: 3px;">
//           <div class="svg-icon" style="width: 20px;">
//             ${iconStatus}
//           </div>
//           <div class="describe-text" style="line-height: 20px; padding-left: 5px;">
//             ${statusTextS}
//           </div>
//         </div>
//         <div class="paid" style="display: flex; padding: 3px;">
//           <div class="svg-icon" style="width: 20px;">
//             ${icon}
//           </div>
//           <div class="describe-text" style="line-height: 20px; padding-left: 5px;" >${statusText}</div>
//         </div>
//       </div>
//       <script>
//     </script>
//     </div>`
//       }

//     }

//     function prapareNewList(oldList: NodeListOf<Element>) {
//       const newMap = [];
//       for (let el of oldList) {
//         newMap.push(new Task(el))
//       }
//       return newMap;
//     }

//     class Task {
//       taskNode: {
//         [x: string]: any; querySelector: (arg0: string) => any;
//       };
//       avatar: any;
//       buttonBlock: { buttonBlock: any; paid: any; linkToRedactor: any; statusTextPandingRevision: any; statusTextPositive: any; statusTextUnderRevision: any; statusTextReject: any; };
//       statusBlockBar: StatusBar;
//       fromBlock: { from: any; name: any; time: any; };
//       taskTheme: { theme: any; firstLink: any; lastLink: any; };
//       teachers: any;
//       buttonNode: any;
//       constructor(taskNode: { querySelector: (arg0: string) => any; }) {
//         this.taskNode = taskNode;

//         this.avatar = taskNode.querySelector(".src-features-trainer-trainerTasks-components-Tasks-components-Task--avatar--Sta9Y");
//         const from = taskNode.querySelector(".src-features-trainer-trainerTasks-components-Tasks-components-Task--user--jBM5W");

//         // опалчено?
//         const buttonBlock = taskNode.querySelector(".src-features-trainer-trainerTasks-components-Tasks-components-Task--controls--OlYM4")

//         this.buttonBlock = {
//           buttonBlock,
//           paid: buttonBlock.querySelector(".src-features-trainer-trainerTasks-components-Tasks-components-Task--lastPayoutDate--QOWaQ"),

//           linkToRedactor: buttonBlock.querySelector(".src-features-trainer-trainerTasks-components-Tasks-components-Task--btnLink--ubr26"),
//           statusTextPandingRevision: buttonBlock.querySelector(".src-components-trainer-shared-Status--longDuration--Y0iS2"),
//           statusTextPositive: buttonBlock.querySelector(".src-components-trainer-shared-Status--good--ug1tX"),
//           statusTextUnderRevision: buttonBlock.querySelector(".src-components-trainer-shared-Status--rework--qLABS"),
//           statusTextReject: buttonBlock.querySelector(".src-components-trainer-shared-Status--bad--rLU3k")
//         }

//         this.statusBlockBar = new StatusBar(this.buttonBlock);

//         this.fromBlock = {
//           from,
//           name: from.firstElementChild,
//           time: from.lastElementChild
//         }

//         const theme = taskNode.querySelector(".src-features-trainer-trainerTasks-components-Tasks-components-Task--task--J8TRF");

//         this.taskTheme = {
//           theme,
//           firstLink: theme.firstElementChild,
//           lastLink: theme.lastElementChild
//         }

//         this.teachers = taskNode.querySelector(".src-features-trainer-trainerTasks-components-Tasks-components-Task--experts--HDNVd");

//         this.buttonNode = taskNode.querySelector(".src-features-trainer-trainerTasks-components-Tasks-components-Task--experts--HDNVd");

//         this.taskNode.style.height = "200px";
//         this.taskNode.style.width = "270px";
//         this.taskNode.style.marginLeft = "5px";
//         this.taskNode.style.marginRight = "5px";
//         this.taskNode.style.marginTop = "15px";
//         this.taskNode.style.backgroundColor = "#eff3f3";
//         this.taskNode.style.position = "relative";
//       }

//       transform() {
//         this.removeImageBlock();
//         this.cutTaskDescribe();
//         this.transferDescribeUnderName();
//         this.cutButtonBlock();
//         this.replaceTeacherBlock();
//         this.addStatusBar();
//       }

//       replaceTeacherBlock() {
//         this.teachers.remove();
//         this.fromBlock.from.append(document.createElement('hr'));
//         this.fromBlock.from.append(this.teachers);
//       }

//       cutButtonBlock() {
//         this.buttonBlock.buttonBlock.remove();
//       }

//       // Обрезать описание задания
//       cutTaskDescribe() {
//         let linkTextFromTaskDescribe = this.taskTheme.firstLink.textContent;
//         const newLinkText = linkTextFromTaskDescribe.slice(linkTextFromTaskDescribe.indexOf("\"", 0));
//         this.taskTheme.firstLink.textContent = newLinkText;
//       }

//       // перенос темы и группы под имя фамилию
//       // удаление блока с информацией по заданию
//       transferDescribeUnderName() {
//         this.fromBlock.from.style.width = "100%";
//         this.fromBlock.from.style.paddingLeft = "10px";
//         this.fromBlock.from.style.paddingRight = "10px";

//         this.taskTheme.theme.remove();
//         this.fromBlock.from.append(this.taskTheme.firstLink);
//         this.fromBlock.from.append(this.taskTheme.lastLink);
//       }

//       // Удалить аватар
//       removeImageBlock() {
//         this.avatar.remove();
//       }

//       // добавляет индикаторы статуса работы
//       addStatusBar() {
//         this.taskNode.insertAdjacentHTML('afterbegin', this.statusBlockBar.makeStatusBlock())
//       }
//     }

//     function changeList() {


//       prapareNewList(taskList).forEach((el: any) => {
//         el.transform();
//         taskListContainer.append(el.taskNode)
//       })

//       taskList.forEach(el => el.remove());
//       taskListBar.remove();
//     }

//     function makeRejectData(status: any) {
//       return {
//         icon: `<svg xmlns="http://www.w3.org/2000/svg" style="" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//       <path style="fill: #E9051C" stroke-linecap="round" stroke-linejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" /></svg>`,
//         statusText: status
//       }
//     }

//     function makeUnderRevisionData(status: any) {
//       return {
//         icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//   <path style="fill: #FFD15D" stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
// </svg>
// `,
//         statusText: status
//       }
//     }

//     function makePositiveData(status: any) {
//       return {
//         icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//   <path style="fill: green" stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
// </svg>`,
//         statusText: status
//       }
//     }

//     function makePandingRevisionData(status: any, colour: string) {
//       const smile = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path style="fill: ${colour}" d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm36,72a12,12,0,1,1-12,12A12.0006,12.0006,0,0,1,164,96ZM92,96a12,12,0,1,1-12,12A12.0006,12.0006,0,0,1,92,96Zm84.5,60.00781a56.20543,56.20543,0,0,1-26.6875,23.58594A56.0807,56.0807,0,0,1,79.5,156.00781a7.99843,7.99843,0,1,1,13.84375-8.01562,40.274,40.274,0,0,0,19.09375,16.86719,40.44532,40.44532,0,0,0,31.14062,0,40.0058,40.0058,0,0,0,12.70313-8.57813,40.82317,40.82317,0,0,0,6.375-8.28906A7.99843,7.99843,0,1,1,176.5,156.00781Z"/></svg>`;

//       const smileMeh = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path style="fill: #FDDA27" d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24ZM92,96a12,12,0,1,1-12,12A12.0006,12.0006,0,0,1,92,96Zm76,72H88a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16Zm-4-48a12,12,0,1,1,12-12A12.0006,12.0006,0,0,1,164,120Z"/></svg>`;

//       const smileSad = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path style="fill: #EF9C40" d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm36,72a12,12,0,1,1-12,12A12.0006,12.0006,0,0,1,164,96ZM92,96a12,12,0,1,1-12,12A12.0006,12.0006,0,0,1,92,96Zm81.58594,86.92188a7.9139,7.9139,0,0,1-4,1.07812,7.99834,7.99834,0,0,1-6.92969-3.99219,40.42846,40.42846,0,0,0-6.375-8.29687,39.8432,39.8432,0,0,0-12.71094-8.57031,40.30551,40.30551,0,0,0-31.14062,0,40.11288,40.11288,0,0,0-19.07813,16.86718A8.00181,8.00181,0,0,1,79.5,171.99219a56.02208,56.02208,0,0,1,97,0A7.98921,7.98921,0,0,1,173.58594,182.92188Z"/></svg>`;

//       const smileXXyes = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path  style="fill: #FF0045" d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm-18.34375,98.34375a7.99915,7.99915,0,1,1-11.3125,11.3125L88,123.3125,77.65625,133.65625a7.99915,7.99915,0,0,1-11.3125-11.3125L76.6875,112,66.34375,101.65625a7.99915,7.99915,0,0,1,11.3125-11.3125L88,100.6875,98.34375,90.34375a7.99915,7.99915,0,0,1,11.3125,11.3125L99.3125,112ZM128,192a12,12,0,1,1,12-12A12.0006,12.0006,0,0,1,128,192Zm61.65625-69.65625a7.99915,7.99915,0,1,1-11.3125,11.3125L168,123.3125l-10.34375,10.34375a7.99915,7.99915,0,0,1-11.3125-11.3125L156.6875,112l-10.34375-10.34375a7.99915,7.99915,0,0,1,11.3125-11.3125L168,100.6875l10.34375-10.34375a7.99915,7.99915,0,0,1,11.3125,11.3125L179.3125,112Z"/></svg>`

//       return {
//         icon: smile,
//         statusText: status
//       }
//     }

//     function makePaidData(status: { textContent: string; }) {
//       const iconColor = status ? "green" : "grey";
//       const iconsvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
//   <path  d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
//   <path style="fill:${iconColor}" fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clip-rule="evenodd" />
// </svg>`
//       console.log(status)
//       return {
//         icon: iconsvg,
//         statusText: status ? status.textContent.replace("Оплачено", "") : "Не оплачено"
//       }

//     }
//     changeList();
//   }