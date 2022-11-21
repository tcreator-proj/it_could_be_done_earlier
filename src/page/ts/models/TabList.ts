export default class TabList {
  protected static tabList: WindowProxy[] = [];

  public static append(windowProxy: WindowProxy): void {
    TabList.tabList.push(windowProxy);
  }

  public static clear(): void {
    if(!TabList.isEmpty()) {
      TabList.closeAllTabs();
      TabList.tabList = [];
    }
  }

  public static isEmpty(): boolean {
    return !TabList.tabList.length;
  }

  private static closeAllTabs(): void {
    TabList.tabList.forEach((tab: WindowProxy) => tab.close());
  }
}