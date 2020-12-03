import { Path } from "./path";
import {DirectoryEntry, IDirectoryEntry} from "./directoryEntry";

export interface IDirectory extends IDirectoryEntry {
    type: "directory";
    entries: IDirectoryEntry[];
}

export namespace Directory {
    export function build(name: string, parentDirectory?: IDirectory): IDirectory {
        return {
            id: DirectoryEntry.generateId(),
            absolutePath: parentDirectory
                ? Path.push(parentDirectory.absolutePath, name)
                : Path.buildFromString("/"),
            entries: [],
            size: 0,
            name,
            type: "directory",
        };
    }
}
