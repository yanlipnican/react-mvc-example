import { IPath } from "./path";

export type DirectoryEntryType = "file" | "directory";

export interface IDirectoryEntry {
    id: string;
    type: DirectoryEntryType;
    name: string;
    absolutePath: IPath;
    size: number;
}

export namespace DirectoryEntry {
    export function generateId(): string {
        return Math.round(Math.random() * (10**12)).toString();
    }
}
