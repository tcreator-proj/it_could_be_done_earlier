import PageModel from "./PageModel";

export default class ScheduleModel extends PageModel {
  protected matchers: string[] = ["trainer/schedule"]
  enter(): void {}
  leave(): void {}
}