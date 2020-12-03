import { action } from "mobx";
import { createBrowserHistory, History } from "history";
import { provideSingleton } from "../../lib/provide";

export const ROUTER_CONTROLLER = "router";

export interface IRouterController {
    push(path: string, state?: any): void;
}

@provideSingleton(ROUTER_CONTROLLER)
export class ReactRouterController implements IRouterController {
    private history: History = createBrowserHistory();

    public getBrowserHistory(): History {
        return this.history;
    }

    @action
    public push(path: string, state?: any) {
        this.history.push(path, state);
    }
}
