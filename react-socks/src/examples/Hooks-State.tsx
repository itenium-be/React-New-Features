import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// The State Hook

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            You clicked {count} times
        </button>
    )
};



// The Pre-Hooks syntax is much more verbose
// + The horror of turning a FunctionComponent into a class
class EquivalentComponent extends React.Component<{}, {count: number}> {
    constructor(props: any) {
        super(props);
        this.state = {count: 0};
    }

    render() {
        return (
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                You clicked {this.state.count} times
            </button>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
