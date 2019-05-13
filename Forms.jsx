import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', fruit: null };

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
            <form onSubmit={this.handleSubmit}>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />

                Favourite Food:
                <select value={this.state.fruit} onChange={select => this.setState({fruit: select.target.value})}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}
