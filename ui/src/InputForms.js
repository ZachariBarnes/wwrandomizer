import React from 'react';
import './App.css';

class InputForms extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form className="leftform" onSubmit={this.handleSubmit}>
                <label>
                    <b>Players:</b>
                    <textarea
                        label="Players"
                        multiline
                        rows="15"
                        defaultValue="Enter All Players Here"
                        className="myTextAreas"
                        margin="normal"
                        variant="filled"
                    />
                </label>
                <label>
                    <b>Roles:</b>
                    <textarea
                        label="Roles"
                        multiline
                        rows="15"
                        defaultValue="Enter All Roles Here"
                        className="myTextAreas"
                        margin="normal"
                        variant="filled"
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default InputForms;