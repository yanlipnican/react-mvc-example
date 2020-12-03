export interface IPath {
    parts: string[];
}

export namespace Path {
    export function buildFromString(path: string): IPath {
        return {
            parts: path.split("/").filter(part => part.length > 0),
        };
    }

    export function buildFromParts(parts: string[]) {
        return {
            parts,
        };
    }

    export function toString({ parts }: IPath) {
        return `/${parts.join("/")}`;
    }

    export function push(path: IPath, entry: string) {
        return buildFromString(`${toString(path)}/${entry}`);
    }

    export function isSame(first: IPath, second: IPath) {
        return toString(first) === toString(second);
    }
}
