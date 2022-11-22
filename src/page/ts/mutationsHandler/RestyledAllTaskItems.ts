
import { ClassNames } from "../enums/ClassNames"

export default function RestyledAllTaskItems() {
  const items: NodeListOf<HTMLElement> = document.querySelectorAll(ClassNames.itemTask);
  // if (!items.length) {
  //   items.forEach((item: HTMLElement) => {
  //     if(!item.getAttribute("styles")) {
  //       style(item);
  //     }
  //   })
  // }
}

function style(item: HTMLElement) {
  item.setAttribute("styled", "");

}