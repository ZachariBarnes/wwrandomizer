import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { ResponseTable } from './ResponseTable'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class InputForms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            roles: ['Doctor', 'Seer', 'Mason', 'Mason', 'Hunter'],
            calcBgs: true,
            bgRatio: 0.2,
            rolesGenerated: false,
            postBody: undefined,
        }

        this.handlePlayersChange = this.handlePlayersChange.bind(this);
        this.handleRolesChange = this.handleRolesChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePlayersChange(event) {
        const laurens = ['lrn', 'lurne', 'laurne', 'lauren', 'larne', 'lorne', 'lorn', 'lurn'];
        const { value } = event.target
        let players = value.indexOf(',') > 0 ? value.split(',') : value.split('\n');
        players = players.map(e => {
            if (laurens.indexOf(e.trim().toLowerCase()) > 0)
                return "Laurne Free-Wifi-at-the Hilton";
            return e.trim()
        })
        this.setState({
            ...this.state,
            players
        });
    }
    handleRolesChange(event) {
        const { value } = event.target
        let roles = value.indexOf(',') > 0 ? value.split(',') : value.split('\n');
        roles = roles.map(e => {
            return e.trim()
        })
        this.setState({
            ...this.state,
            roles
        });
    }

    handleSubmit() {
        const { players, roles, calcBgs, bgRatio } = this.state;
        const postBody = {
            players,
            roles,
            calcBgs,
            bgRatio
        }
        this.setState({
            ...this.state,
            rolesGenerated: true,
            postBody
        });
    }

    render() {
        const { players } = this.state;
        const DEFAULT_PLAYERS = 'Enter All Players Here';
        const DEFUALT_ROLES_DESCRIPTION = 'Enter Roles Here, OR\nLeave blank to use:\nDoctor,\nSeer,\nMason,\nMason,\nHunter';
        // const DEFAULT_ROLES = ['Doctor', 'Seer', 'Mason', 'Mason', 'Hunter'];
        // console.log(roles, DEFAULT_ROLES, roles == DEFAULT_ROLES)
        return (
            <div>
                <Form>
                    <Row>
                        <Col></Col>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Players</Form.Label>
                                <Form.Control as="textarea"
                                    label="Players"
                                    multiline="15"
                                    rows="15"
                                    value={players.length ? players : DEFAULT_PLAYERS}
                                    onChange={e => { this.handlePlayersChange(e) }}
                                    onClick={(e) => { e.currentTarget.select() }}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Roles</Form.Label>
                                <Form.Control as="textarea"
                                    label="Roles"
                                    multiline="15"
                                    rows="15"
                                    defaultValue={DEFUALT_ROLES_DESCRIPTION}
                                    // value={roles == DEFAULT_ROLES ? DEFUALT_ROLES_DESCRIPTION : roles}
                                    onChange={e => { this.handleRolesChange(e) }}
                                    onClick={(e) => { e.currentTarget.select() }}
                                />
                            </Form.Group>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Check
                                type={'switch'}
                                id={`default-checkbox`}
                                label={`Generate BG Roles`}
                                className="sliderLabel"
                                checked={this.state.calcBgs}
                                onChange={() => {
                                    this.setState({
                                        ...this.state,
                                        calcBgs: !this.state.calcBgs
                                    })
                                }}
                            />
                        </Col>

                    </Row>
                </Form>
                <Row>
                    <Col></Col>
                    <Col size="sm">
                        <Form inline="true" className="inlineForm">

                            <input className="slider" type="range" min="0" max="100" value={this.state.bgRatio * 100} onChange={e =>
                                this.setState({
                                    ...this.state, bgRatio: e.target.value / 100
                                })}
                            />

                            <Form.Group controlId="exampleForm.ControlTextarea1" inline="true">
                                <Form.Control as="input"
                                    type="text"
                                    size="sm"
                                    bsPrefix="form-control"
                                    className="smallTextBox"
                                    maxLength="4"
                                    value={this.state.bgRatio}
                                    isInvalid={this.state.bgRatio > 1 || this.state.bgRatio < 0}
                                    onChange={e =>
                                        this.setState({
                                            ...this.state, bgRatio: e.target.value
                                        })}
                                />
                                <Form.Label className="smallerText" inline="true">BG Ratio</Form.Label>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
                <Form>
                    <Row>
                        <Col>
                            <Button type="button" className="btn" style={{ marginBottom: 20 }} onClick={this.handleSubmit}>Submit</Button>
                        </Col>
                    </Row>
                </Form>

                <ResponseTable body={this.state.postBody} />
            </div >
        );
    };
}


export default InputForms;