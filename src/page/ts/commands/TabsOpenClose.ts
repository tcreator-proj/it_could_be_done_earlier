import TabList from "../models/TabList";
import Executive from './Executive';

export default class TabsOpenClose implements Executive {
  protected links: NodeListOf<HTMLLinkElement>;

  constructor() {
    this.links = document.querySelectorAll("a[rel='noreferrer']");
  }

  public execute(): void {
    if (TabList.isEmpty()) {
      this.open();
    } else {
      this.close();
    }
  }

  private open() {
    if (this.links.length > 0) {
      this.links.forEach((element: HTMLLinkElement) => {
        TabList.append(window.open(element.href, '_blank'));
      })
    } else {
      console.log("There aren't links");
    }
  }

  private close() {
    console.log("All links was close")
    TabList.clear();
  }
}