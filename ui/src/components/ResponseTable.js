import React from 'react';
import { Button, Table, Container, Row, Col, Toast } from 'react-bootstrap';
import '../App.css';

export class ResponseTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            assignments: [],
            showToast: false
        }
        this.createTable = this.createTable.bind(this);
        this.generatePoll = this.generatePoll.bind(this);
        this.getRandomPollMsg = this.getRandomPollMsg.bind(this);
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

    async generatePoll() {
        const { assignments } = this.props;
        let poll = `/ww poll "%" `;
        poll = poll.replace('%', this.getRandomPollMsg);
        assignments.forEach(assignment => {
            poll += `${assignment.Player},`;
        });
        poll = poll.slice(0, poll.length - 1);
        console.log(`completed poll command: ${poll}`);
        await navigator.clipboard.writeText(poll);
        console.log("poll copied");
        this.setState({
            assignments: this.state.assignments,
            showToast: true
        })
    }

    getRandomPollMsg() {
        let prompts = [
            "Who is guilty?",
            "One must die, the rest may live. Who will it be?",
            "There can only be one.",
            "Where da BGs at?",
            "New Werewolf who dis?",
            "One person must leave the Island, You may Decide amongst yourselves who it will be.",
            "Who will be sent to the Abyss?",
            "Who will be the first sacrifice?",
            "Let the Chaos begin!"
        ]
        let randomNum = Math.round(Math.random() * prompts.length - 1)
        return prompts[randomNum];
    }

    showToast() {
        return (this.state.showToast) ?
            <Toast style={{
                position: 'absolute',
                top: 0,
                right: 0,
                background: '#3F434C',
            }}>
                <Toast.Body>
                    <strong className="mr-auto">Copied</strong>
                </Toast.Body>
            </Toast>
            : <div></div>
    }

    render() {
        const { assignments } = this.props;
        const table = this.createTable(assignments)
        const reactResults = assignments.length
            ? (<Container>
                <Row>
                    <Col>
                        <Table striped bordered hover className="mytable" variant="dark" size="sm" responsive="true" width="50%">
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
                <Row>
                    <Col>
                        <Button type="button" className="btn" style={{ marginBottom: 20 }} onClick={this.generatePoll}>
                            Copy Modbot Poll
                        </Button>
                        {this.showToast()}
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