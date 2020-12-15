
import React from "react";
import { 
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    ListGroupItem,
    ListGroup,
    Container,
    Row,
    Col, } from "reactstrap";

import "./Charts.scss";
import dataAudio from "../dataAudio";

function Charts(props) {
    const handleSetAudio = (e) =>{
        props.handleSetAudioPlay(e);
    }
    const renderTopAudio = () =>{
        return dataAudio.map(e => {
                return (
                    <Col md="4">
                        <Card className="card-coin card-plain">
                            <CardHeader>
                                <img
                                alt="..."
                                className="img-center img-fluid"
                                src={e.image}
                                />
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col className="text-center" md="12">
                                        <h4 className="text-uppercase">{e.title}</h4>
                                        <span>{e.artist}</span>
                                        <hr className="line-primary" />
                                    </Col>
                                </Row>
                                <Row>
                                    <ListGroup>
                                        <ListGroupItem>{e.view} Viewer</ListGroupItem>
                                    </ListGroup>
                                </Row>
                            </CardBody>
                            <CardFooter className="text-center">
                                <Button 
                                    className="btn-simple" 
                                    color="primary"
                                    onClick={() => handleSetAudio(e)}>
                                    Play
                                </Button>
                            </CardFooter>
                        </Card>
                    </Col>
                );
        });
    }
    return (
        <section className="section section-coins Charts">
            <img
                alt="..."
                className="path"
                src={require("../../../assets/img/path3.png").default}
            />
            <Container>
                <Row>
                <Col md="5">
                    <hr className="line-info" />
                    <h1>
                    BẢNG XẾP HẠNG
                    <span className="text-danger"> TOP 3</span>
                    </h1>
                </Col>
                </Row>
                <Row>
                    {renderTopAudio()}
                </Row>
            </Container>
            </section>
    );
}
export default  Charts;
