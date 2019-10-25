import React from 'react';
import getRolesTable from '../Functions/GlobalFunctions';
import { Helmet } from 'react-helmet';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { ResponseTable } from './ResponseTable'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
var cloneDeep = require('lodash.clonedeep');
const UNSUPPORTED_PLAYER_COUNT = 'The currently entered number of Players/Roles is currently unsupported.\nThere must be at least as many players as there are roles.\nReach out to ZachariBarnes@yahoo.com if you wish this to be a supported feature.'

class InputForms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            // players: [
            //     "Bob",
            //     "george",
            //     "fred",
            //     "mercury",
            //     "sara",
            //     "zach",
            //     "lauren",
            //     "jimbo",
            //     "mahdi",
            //     "sam"],
            roles: ['Doctor', 'Seer', 'Mason', 'Mason', 'Hunter'],
            calcBgs: true,
            bgRatio: 0.25,
            rolesGenerated: false,
            assignments: [],
            postBody: undefined,
            sortOrder: {
                col: 'role',
                order: "default"
            },
            error: false
        }

        this.handlePlayersChange = this.handlePlayersChange.bind(this);
        this.handleRolesChange = this.handleRolesChange.bind(this);
        this.sortByRole = this.sortByRole.bind(this);
        this.sortByPlayer = this.sortByPlayer.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sortAssignmentsByProvidedRole = this.sortAssignmentsByProvidedRole.bind(this);
        this.handleCalcBgChange = this.handleCalcBgChange.bind(this);
        this.handleBGRatioChange = this.handleBGRatioChange.bind(this);
    }

    handlePlayersChange(event) {
        const laurens = ['lrn', 'lurne', 'laurne', 'lauren', 'larne', 'lorne', 'lorn', 'lurn'];
        const { value } = event.target;
        const { roles, bgRatio, calcBgs } = this.state;
        let players = value.indexOf(',') > 0 ? value.split(',') : value.split('\n');
        players = players.map(e => {
            if (laurens.indexOf(e.trim().toLowerCase()) > 0)
                return "Laurne Free-Wifi-at-the Hilton";
            return e.trim()
        })
        const numRoles = roles.length + ((calcBgs) ? (Math.ceil(players.length * bgRatio)) : 0);
        const error = this.state.error
            && players.length < numRoles
            ? UNSUPPORTED_PLAYER_COUNT
            : false;
        this.setState({
            ...this.state,
            players,
            error
        });
    }

    handleRolesChange(event) {
        const { value } = event.target
        const { players, bgRatio, calcBgs } = this.state;
        let roles = value.indexOf(',') > 0 ? value.split(',') : value.split('\n');
        roles = roles.map(e => {
            return e.trim()
        })
        const numRoles = roles.length + ((calcBgs) ? (Math.ceil(players.length * bgRatio)) : 0);
        const error = this.state.error
            && players.length < numRoles
            ? UNSUPPORTED_PLAYER_COUNT
            : false;
        this.setState({
            ...this.state,
            roles,
            error
        });
    }

    sortByRole() {
        let { assignments, sortOrder } = this.state;
        const { col, order } = sortOrder;
        const myOrder = col === 'player' || (order === 'default' || order === 'desc') ? 1 : -1;
        assignments.sort((a, b) => {
            if (a.Role < b.Role) {
                return -1 * myOrder;
            }
            if (a.Role > b.Role) {
                return 1 * myOrder;
            }
            // names must be equal
            return 0;
        });
        this.setState({
            ...this.state,
            assignments,
            sortOrder: {
                col: 'role',
                order: myOrder > 0 ? 'asc' : 'desc'
            },
            error: false
        });
    }

    handleBGRatioChange(e) {
        const bgRatio = e.target.value / 100
        const { players, roles, calcBgs } = this.state;
        const numRoles = roles.length + ((calcBgs) ? (Math.ceil(players.length * bgRatio)) : 0);
        console.log(`bgRatioChange -calcBgs:${calcBgs}  Roles: ${numRoles}, Players ${players.length}`)
        const error = this.state.error
            && players.length < numRoles
            ? UNSUPPORTED_PLAYER_COUNT
            : false;
        this.setState({
            ...this.state,
            bgRatio,
            error
        })
    }

    handleCalcBgChange() {
        const calcBgs = !this.state.calcBgs;
        const { players, roles, bgRatio } = this.state;
        const numRoles = roles.length + ((calcBgs) ? (Math.ceil(players.length * bgRatio)) : 0);
        console.log(`calcBgChange -calcBgs:${calcBgs}  Roles: ${numRoles}, Players ${players.length}`)
        const error = this.state.error
            && players.length < numRoles
            ? UNSUPPORTED_PLAYER_COUNT
            : false;
        this.setState({
            ...this.state,
            calcBgs,
            error
        });
    }

    sortByPlayer() {
        let { assignments, sortOrder } = this.state;
        const { col, order } = sortOrder;
        const myOrder = col === 'role' || (order === 'default' || order === 'desc') ? 1 : -1;
        assignments.sort((a, b) => {
            if (a.Player < b.Player) {
                return -1 * myOrder;
            }
            if (a.Player > b.Player) {
                return 1 * myOrder;
            }
            // names must be equal
            return 0;
        });
        this.setState({
            ...this.state,
            assignments,
            sortOrder: {
                col: 'player',
                order: myOrder > 0 ? 'asc' : 'desc'
            }
        })
    }

    handleSubmit() {
        const { players, roles, calcBgs, bgRatio } = this.state;
        if (players.length && roles.length) {
            const numRoles = roles.length + ((calcBgs) ? (Math.ceil(players.length * bgRatio)) : 0);
            console.log(`submit -calcBgs:${calcBgs}  Roles: ${numRoles}, Players ${players.length}`)

            if (numRoles <= players.length) {
                let assignments;
                const postBody = {
                    players,
                    roles,
                    calcBgs,
                    bgRatio
                }
                assignments = getRolesTable(cloneDeep(postBody));
                assignments = this.sortAssignmentsByProvidedRole(assignments)
                this.setState({
                    ...this.state,
                    postBody,
                    rolesGenerated: true,
                    assignments
                });
            }
            else {
                this.setState({
                    error: UNSUPPORTED_PLAYER_COUNT
                });
                console.log(`ERROR: ${UNSUPPORTED_PLAYER_COUNT}`);
            }
        }
        else {
            this.setState({
                error: UNSUPPORTED_PLAYER_COUNT
            });
            console.log(`ERROR: ${UNSUPPORTED_PLAYER_COUNT}`);
        }
    }

    sortAssignmentsByProvidedRole(assignments) {
        const { roles } = this.state;
        let sortedAssignments = [];
        roles.forEach(role => {
            let foundAssignment = assignments.find(a =>
                a.Role === role);
            sortedAssignments.push(foundAssignment)
            assignments.splice(
                assignments.indexOf(
                    sortedAssignments[sortedAssignments.length - 1]), 1);
        });
        assignments.sort((a, b) => {
            if (a.Role < b.Role) {
                return -1;
            }
            if (a.Role > b.Role) {
                return 1;
            }
            // names must be equal
            return 0;
        });
        sortedAssignments.push(...assignments)
        return sortedAssignments;
    }

    render() {
        const { players } = this.state;
        const TITLE = 'Role Randomizer';
        const DEFAULT_PLAYERS = 'Enter All Players Here';
        const DEFUALT_ROLES_DESCRIPTION = 'Enter Roles Here, OR\nLeave blank to use:\nDoctor,\nSeer,\nMason,\nMason,\nHunter';
        // const DEFAULT_ROLES = ['Doctor', 'Seer', 'Mason', 'Mason', 'Hunter'];
        // console.log(roles, DEFAULT_ROLES, roles == DEFAULT_ROLES)
        return (
            <div className="widthController">
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>
                <Form>
                    {!!this.state.error && <Row><Col><div className="error">{UNSUPPORTED_PLAYER_COUNT}</div></Col></Row>}
                    <Row>
                        <Col></Col>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Players</Form.Label>
                                <Form.Control as="textarea"
                                    label="Players"
                                    multiline="15"
                                    rows="15"
                                    defaultValue={players.length ? players : DEFAULT_PLAYERS}
                                    onChange={e => { this.handlePlayersChange(e) }}
                                    onClick={(e) => { e.currentTarget.select() }}
                                    isInvalid={this.state.error}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Player or role Count Invalid
                                </Form.Control.Feedback>
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
                                    isInvalid={this.state.error}
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
                                onChange={this.handleCalcBgChange}
                            />
                        </Col>

                    </Row>
                </Form>
                <Row>
                    <Col></Col>
                    <Col size="sm">
                        <Form inline="true" className="inlineForm">

                            <input className="slider" type="range" min="0" max="100" value={this.state.bgRatio * 100} onChange={e => { this.handleBGRatioChange(e) }}
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

                <ResponseTable assignments={this.state.assignments} sortByRole={this.sortByRole} sortByPlayer={this.sortByPlayer} />
            </div >
        );
    };
}


export default InputForms;