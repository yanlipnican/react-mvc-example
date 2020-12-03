import React from "react";
import { Button, Col, FormControl, InputGroup, ListGroup, ProgressBar, Row } from "react-bootstrap";
import Icon from "react-fontawesome";

const Side: React.FC = () => {
    return (
        <Col md={2} sm={4} style={{ borderRight: "1px solid #dfdfdf", height: "100%" }}>
            <Row className="mt-2 mb-2">
                <Col>
                    <InputGroup size="sm">
                        <FormControl type="text" placeholder="Search" />
                        <InputGroup.Append>
                            <Button variant="outline-primary">
                                <Icon name="search" />
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col className="p-0">
                    <ListGroup variant="flush">
                        <ListGroup.Item action>
                            <Icon name="star" className="mr-4" />
                            <span>Favourites</span>
                        </ListGroup.Item>
                        <ListGroup.Item action>
                            <Icon name="cog" className="mr-4" />
                            <span>Settings</span>
                        </ListGroup.Item>
                        <ListGroup.Item action>
                            <div className="d-flex mt-1 mb-1">
                                <Icon name="database" className="mr-4" />
                                <div style={{ flex: 1 }}>
                                    <ProgressBar label={"36GB"} now={25} />
                                </div>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Col>
    );
};

export default Side;
