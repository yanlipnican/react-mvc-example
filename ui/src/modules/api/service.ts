import { inject } from "inversify";
import { IRequestService, REQUEST_SERVICE } from "../request/service";
import { provideSingleton } from "../../lib/provide";

export const API_SERVICE = "api";

export interface IApiService {}

@provideSingleton(API_SERVICE)
export class ApiService implements IApiService {
    constructor(@inject(REQUEST_SERVICE) private request: IRequestService) {}
}
