import React from "react";
import { useLocalStore } from "mobx-react";
import { Container } from "inversify";
import { buildProviderModule } from "inversify-binding-decorators";

export interface IApplicationContext {
    container: Container;
}

export const applicationContainer = React.createContext<IApplicationContext | null>(null);

export const ApplicationContainerProvider: React.FC = ({ children }) => {
    const container = new Container();
    container.load(buildProviderModule());
    const store = useLocalStore(() => ({ container }));
    return <applicationContainer.Provider value={store}>{children}</applicationContainer.Provider>;
};

export const useApplicationContext = (): IApplicationContext => {
    const store = React.useContext(applicationContainer);
    if (!store) {
        throw new Error("useApplication must be used within a ApplicationProvider.");
    }
    return store;
};
