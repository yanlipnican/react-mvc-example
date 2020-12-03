import { fluentProvide } from "inversify-binding-decorators";

export const provideSingleton = (identifier: string) =>
    fluentProvide(identifier)
        .inSingletonScope()
        .done();
