import { provideSingleton } from "../../lib/provide";
import { action, computed } from "mobx";
import { inject } from "inversify";
import { IPath, Path } from "./path";
import { EXPLORER_STORE, IExplorerStore } from "./store";
import { Directory, IDirectory } from "./directory";
import { File } from "./file";

export const EXPLORER_CONTROLLER = "explorer";

export interface IExplorerController {
    currentPath: IPath;
    currentDirectory: IDirectory | null;
    goToPath(path: IPath): void;
    folderHistoryForward(): void;
    folderHistoryBackward(): void;
    isForwardDisabled: boolean;
    isBackwardDisabled: boolean;
}

@provideSingleton(EXPLORER_CONTROLLER)
export class ExplorerController implements IExplorerController {
    constructor(@inject(EXPLORER_STORE) private explorerStore: IExplorerStore) {
        const rootFile = Directory.build("root");
        const movies = Directory.build("movies", rootFile);
        const memes = Directory.build("memes", movies);

        movies.entries = [File.build("meme", "png", movies), memes];

        rootFile.entries = [
            File.build("image", "jpg", rootFile),
            File.build("text", "txt", rootFile),
            File.build("code", "js", rootFile),
            File.build("page", "html", rootFile),
            movies,
        ];

        this.explorerStore.directories = [rootFile, movies, memes];
    }

    @action
    private setFolderIndex(index: number): void {
        this.explorerStore.currentFolderIndex = index;
    }

    @action
    public folderHistoryForward = () => {
        if (this.isForwardDisabled) {
            return;
        }
        this.setFolderIndex(this.explorerStore.currentFolderIndex + 1);
    };

    @action
    public folderHistoryBackward = () => {
        if (this.isBackwardDisabled) {
            return;
        }
        this.setFolderIndex(this.explorerStore.currentFolderIndex - 1);
    };

    @action
    public goToPath = async (path: IPath) => {
        if (this.currentPath && Path.isSame(this.currentPath, path)) {
            return;
        }

        this.explorerStore.folderHistory.splice(
            this.explorerStore.currentFolderIndex + 1,
            this.explorerStore.folderHistory.length,
        );

        this.explorerStore.folderHistory.push(path);
        this.explorerStore.currentFolderIndex += 1;
    };

    @computed
    public get currentPath(): IPath {
        return this.explorerStore.folderHistory[this.explorerStore.currentFolderIndex];
    }

    @computed
    public get isForwardDisabled(): boolean {
        return this.explorerStore.currentFolderIndex === this.explorerStore.folderHistory.length - 1;
    }

    @computed
    public get isBackwardDisabled(): boolean {
        return this.explorerStore.currentFolderIndex === 0;
    }

    @computed
    public get currentDirectory(): IDirectory | null {
        return (
            this.explorerStore.directories.find(directory =>
                Path.isSame(directory.absolutePath, this.currentPath),
            ) || null
        );
    }
}
