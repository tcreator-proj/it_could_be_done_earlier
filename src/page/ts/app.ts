import AppContext from "./AppContext";
import CalendarModel from "./models/CalendarModel";
import CurrentDimplomaModel from "./models/CurrentDiplomaModel";
import CurrentTaskModel from "./models/CurrentTaskModel";
import ScheduleModel from "./models/ScheduleModel";
import UncheckedTasksModel from "./models/UncheckedTasksModel";
import UncheckedDimplomaModel from "./models/UnchekedDimplomaModel";
import UserTasksModel from "./models/UserTasksModel";
import Handler from "./mutationObserver/Handler";
import ObserverInit from "./mutationObserver/ObserverInit";
import ObservingHandlerList from "./mutationObserver/ObservingHandlerList";

try {
    const target: HTMLElement = document.body;
    AppContext.init([
        new CalendarModel,
        new CurrentDimplomaModel,
        new CurrentTaskModel,
        new ScheduleModel,
        new UncheckedDimplomaModel,
        new UncheckedTasksModel,
        new UserTasksModel
    ]);
    ObservingHandlerList.instance.append(Handler.create(() => {
        const loc: Location = document.location;
        const url: string = loc.href;
        try {
            AppContext.changeState(url);
        } catch(e) {
            console.log(e)
        }
    }, "App"));

    AppContext.changeObserver(new ObserverInit(target, () => {
        ObservingHandlerList.instance.runEverything();
    }));

} catch (e) {
    console.error(e)
}
