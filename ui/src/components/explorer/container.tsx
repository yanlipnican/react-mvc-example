import React from "react";
import {
    Button,
    ButtonGroup,
    Col,
    Container as BootstrapContainer,
    Row,
    Spinner,
    Table,
} from "react-bootstrap";
import Icon from "react-fontawesome";
import { connect } from "../../lib/connectComponent";
import Side from "./side";
import { EXPLORER_CONTROLLER, IDirectory, IExplorerController, IPath } from "../../modules/explorer";

export interface IExplorerApplicationProps {
    path: IPath;
    historyForward(): void;
    historyBackward(): void;
    isForwardDisabled: boolean;
    isBackwardDisabled: boolean;
    directory?: IDirectory;
    goToPath(path: IPath): void;
}

export interface IExplorerOwnProps {}

export type IExplorerProps = IExplorerApplicationProps & IExplorerOwnProps;

const ExplorerContainer: React.FC<IExplorerProps> = ({
    path,
    directory,
    historyBackward,
    historyForward,
    isBackwardDisabled,
    isForwardDisabled,
    goToPath,
}) => {
    const loading = false;

    return (
        <BootstrapContainer fluid style={{ height: "100%" }}>
            <Row style={{ height: "100%" }}>
                <Side />
                <Col className="p-0">
                    <BootstrapContainer fluid>
                        <Row style={{ borderBottom: "1px solid #dfdfdf" }} className="pt-2 pb-2">
                            <Col>
                                <div className="d-flex">
                                    <div>
                                        <ButtonGroup>
                                            <Button
                                                variant="outline-primary"
                                                onClick={historyBackward}
                                                disabled={isBackwardDisabled}
                                            >
                                                <Icon name="chevron-left" />
                                            </Button>
                                            <Button
                                                variant="outline-primary"
                                                onClick={historyForward}
                                                disabled={isForwardDisabled}
                                            >
                                                <Icon name="chevron-right" />
                                            </Button>
                                        </ButtonGroup>
                                    </div>
                                    <div className="ml-4 flex-grow-1 d-flex justify-content-start align-items-center">
                                        <div className="small">{`/${path.parts.join("/")}`}</div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        {loading ? (
                            <div
                                className="d-flex flex-column justify-content-center align-items-center"
                                style={{ height: "100%" }}
                            >
                                <Spinner animation="border" variant="primary" />
                                <span className="mt-2 small">Fetching filesystem</span>
                            </div>
                        ) : directory ? (
                            directory.entries.length > 0 ? (
                                <Row>
                                    <Col className="p-0">
                                        <Table striped hover size="sm">
                                            <thead>
                                                <tr>
                                                    <th />
                                                    <th>Name</th>
                                                    <th>Permissions</th>
                                                    <th>Owner</th>
                                                    <th className="pr-5">Size</th>
                                                </tr>
                                            </thead>
                                            <tbody style={{ cursor: "pointer" }}>
                                                {directory.entries.map(entry =>
                                                    entry.type === "directory" ? (
                                                        <tr key={entry.id} onClick={() => goToPath(entry.absolutePath)}>
                                                            <td className="pl-2">
                                                                <Icon name="folder" />
                                                            </td>
                                                            <td style={{ width: "100%" }}>{entry.name}</td>
                                                            <td>rw</td>
                                                            <td>root</td>
                                                            <td>{entry.size}B</td>
                                                        </tr>
                                                    ) : (
                                                        <tr key={entry.id}>
                                                            <td className="pl-2">
                                                                <Icon name="file" />
                                                            </td>
                                                            <td style={{ width: "100%" }}>{entry.name}</td>
                                                            <td>rw</td>
                                                            <td>root</td>
                                                            <td>{entry.size}B</td>
                                                        </tr>
                                                    ),
                                                )}
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            ) : (
                                <div className="d-flex align-items-center justify-content-center flex-column h-100">
                                    <div className="mb-4">
                                        <Icon name="folder-open" size="4x" />
                                    </div>
                                    <div>Directory "{`/${path.parts.join("/")}`}" is empty</div>
                                </div>
                            )
                        ) : (
                            <div className="d-flex align-items-center justify-content-center flex-column h-100">
                                <div className="mb-4">
                                    <Icon name="exclamation-triangle" size="4x" />
                                </div>
                                <div>Directory "{`/${path.parts.join("/")}`}" does not exist</div>
                            </div>
                        )}
                    </BootstrapContainer>
                </Col>
            </Row>
        </BootstrapContainer>
    );
};

export default connect<IExplorerApplicationProps, IExplorerProps>(ExplorerContainer, ({ container }) => {
    const explorer = container.get<IExplorerController>(EXPLORER_CONTROLLER);

    return {
        path: explorer.currentPath,
        directory: explorer.currentDirectory || undefined, // Fix this in `connect` optional prop can't handle null
        hello: 4, // Fix this in `connect` - extra prop
        historyForward: explorer.folderHistoryForward,
        historyBackward: explorer.folderHistoryBackward,
        isForwardDisabled: explorer.isForwardDisabled,
        isBackwardDisabled: explorer.isBackwardDisabled,
        goToPath: explorer.goToPath,
    };
});
