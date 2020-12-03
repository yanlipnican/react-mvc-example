import { injectable } from "inversify";
import { provideSingleton } from "../../lib/provide";

export const REQUEST_SERVICE = "request";

export interface IRequestService {}

@provideSingleton(REQUEST_SERVICE)
export class RequestService implements IRequestService {}
