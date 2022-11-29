export const keydownByEnterOnTask = (evt: KeyboardEvent): void => {
  if (evt.code === "Enter") {
    evt.preventDefault();
    const focusedBlock: HTMLElement = <HTMLElement>document.activeElement;

    if (focusedBlock.hasAttribute("item-styled")) {
      const statusTaskOnFocusedBlock: HTMLElement = focusedBlock.querySelector('[data-testid="trainer-tasks-status"]');
      console.log(statusTaskOnFocusedBlock)
      if (statusTaskOnFocusedBlock) {
        const statusLinkToPesonalWorkPage: HTMLElement = <HTMLElement>statusTaskOnFocusedBlock.firstElementChild;
        statusLinkToPesonalWorkPage && statusLinkToPesonalWorkPage.click();
      }
    }
  }
}