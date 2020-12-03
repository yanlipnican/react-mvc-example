import { provideSingleton } from "../../lib/provide";
import { observable } from "mobx";
import { IDirectory } from "./directory";
import { IPath, Path } from "./path";

export const EXPLORER_STORE = "explorerStore";

export interface IExplorerStore {
    directories: IDirectory[];
    folderHistory: IPath[];
    currentFolderIndex: number;
}

@provideSingleton(EXPLORER_STORE)
export class ExplorerStore implements IExplorerStore {
    @observable
    private _directories: IDirectory[] = [];

    @observable
    private _folderHistory: IPath[] = [Path.buildFromString(""), Path.buildFromString("/test")];

    @observable
    private _currentFolderIndex: number = 0;

    get folderHistory(): IPath[] {
        return this._folderHistory;
    }

    set folderHistory(value: IPath[]) {
        this._folderHistory = value;
    }

    get directories(): IDirectory[] {
        return this._directories;
    }

    set directories(value: IDirectory[]) {
        this._directories = value;
    }

    get currentFolderIndex(): number {
        return this._currentFolderIndex;
    }

    set currentFolderIndex(value: number) {
        this._currentFolderIndex = value;
    }
}
