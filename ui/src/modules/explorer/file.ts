import { Path } from "./path";
import {DirectoryEntry, IDirectoryEntry} from "./directoryEntry";
import { IDirectory } from "./directory";

export interface IFile extends IDirectoryEntry {
    type: "file";
    extension: string;
}

export namespace File {
    export function build(name: string, extension: string, parentDirectory: IDirectory): IFile {
        return {
            id: DirectoryEntry.generateId(),
            absolutePath: Path.push(parentDirectory.absolutePath, `${name}.${extension}`),
            extension: extension,
            name: name,
            size: 0,
            type: "file",
        };
    }
}
