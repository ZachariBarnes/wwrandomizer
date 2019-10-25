import React from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';
import '../App.css';

export class ResponseTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            assignments: []
        }
        this.createTable = this.createTable.bind(this);
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.assignments == this.props.assignments) {
    //         const { assignments } = this.props;
    //         if (assignments.length) {
    //             window.scrollTo(0, document.body.scrollHeight)
    //         }
    //     }
    // }

    createTable(assignments) {
        const generateTable = assignments && assignments.length
        return generateTable ? (assignments.map((e, index) =>
            (<tr key={index}>
                <td>{e.Player}</td>
                <td>{e.Role}</td>
            </tr>)
        )) : (<div></div>)
    }

    render() {
        const { assignments } = this.props;
        const table = this.createTable(assignments)
        const reactResults = assignments.length
            ? (<Container>
                <Row>
                    <Col>
                        <Table striped bordered hover variant="dark" size="sm" responsive="true" width="50%">
                            <thead>
                                <tr>
                                    <th className="sortable" onClick={this.props.sortByPlayer}>Player</th>
                                    <th className="sortable" onClick={this.props.sortByRole}>Game Role</th>
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