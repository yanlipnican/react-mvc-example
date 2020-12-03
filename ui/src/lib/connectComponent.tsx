import React from "react";
import { IApplicationContext, useApplicationContext } from "./applicationContext";
import { observer } from "mobx-react";

export function connect<TInjectedProps, TAllProps>(
    Component: React.ComponentType<TAllProps>,
    mapContextToProps: (context: IApplicationContext) => TInjectedProps,
): React.ComponentType<Omit<TAllProps, keyof TInjectedProps>> {
    return observer((ownProps: Omit<TAllProps, keyof TInjectedProps>) => {
        const context = useApplicationContext();
        const contextProps: any = mapContextToProps(context);
        const ObserverComponent = observer(Component);
        return <ObserverComponent {...contextProps} {...ownProps} />;
    });
}
