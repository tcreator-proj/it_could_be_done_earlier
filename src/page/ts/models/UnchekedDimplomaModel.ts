import PageModel from "./PageModel";

export default class UncheckedDimplomaModel extends PageModel {
  protected matchers: string[] = ["trainer/diplomas?q", "status_eq%5D=0"];
  enter(): void {
  }
  leave(): void {
  }

}