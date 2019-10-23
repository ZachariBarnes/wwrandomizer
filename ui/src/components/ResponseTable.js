import getRolesTable from '../Functions/GlobalFunctions';
import React from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';
import '../App.css';
var cloneDeep = require('lodash.clonedeep');

export class ResponseTable extends React.Component {

    componentDidUpdate() {
        if (this.props.body) {
            window.scrollTo(0, document.body.scrollHeight)
        }
    }

    render() {
        const { body } = this.props;
        const assignments = body ? getRolesTable(cloneDeep(body)) : null;
        const table = assignments ? (assignments.map((e, index) =>
            (<tr key={index}>
                <td>{e.Player}</td>
                <td>{e.Role}</td>
            </tr>)
        )) : (<div></div>)
        const reactResults = body
            ? (<Container>
                <Row>
                    <Col>
                        <Table striped bordered hover variant="dark" size="sm" responsive="true" width="50%">
                            <thead>
                                <tr>
                                    <th>Player</th>
                                    <th>Game Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {table}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
            )
            : (
                <div></div>
            );
        return (
            reactResults
        )
    }
}