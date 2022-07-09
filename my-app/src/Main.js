import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Map from "./Map";

const Main = () => {
    return <Container>
        <Row>
            <Col sm={4}>
                <div className={"weather"}>
                    <h3>날씨정보</h3>
                    <Table>
                        <tr>
                            <th>풍속</th>
                            <th>풍향</th>
                        </tr>
                        <tr>
                            <th>값</th>
                            <th>값</th>
                        </tr>
                    </Table>
                </div>
                <div className={"search"}>
                    <h3>배 검색</h3>
                    <input placeholder={"배이름"}/>
                    <Button>search</Button>
                </div>
                <div className={"list"}>
                    <p>운항리스트</p>
                    <ol>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ol>
                </div>
            </Col>
            <Col sm={8}>
                <Map/>
            </Col>
        </Row>
    </Container>
}

export default Main;