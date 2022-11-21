import AppContext from "./AppContext";
import CalendarModel from "./models/CalendarModel";
import CurrentDimplomaModel from "./models/CurrentDiplomaModel";
import CurrentTaskModel from "./models/CurrentTaskModel";
import ScheduleModel from "./models/ScheduleModel";
import UncheckedTasksModel from "./models/UncheckedTasksModel";
import UncheckedDimplomaModel from "./models/UnchekedDimplomaModel";
import UserTasksModel from "./models/UserTasksModel";
import ObserverInit from "./mutationObserver/ObserverInit";
import Handler from './mutationObserver/Handler';
import ObservingHandlerList from './mutationObserver/ObservingHandlerList';

try {
    const handlerList: ObservingHandlerList = new ObservingHandlerList();
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

    handlerList.append(new Handler(() => {

        const loc: Location = document.location;
        const url: string = loc.href;
        AppContext.changeState(url);
    }));

    handlerList.append(new Handler(() => {
        console.log("Просто практикую")
    }));

    AppContext.changeObserver(new ObserverInit(target, () => {
        handlerList.runEverything();
    }));

} catch (e) {
    console.error(e)
}
