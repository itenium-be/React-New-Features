import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// The Effect Hook

function App() {
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <button onClick={() => setCount(count + 1)}>
            You clicked {count} times
        </button>
    );
}


ReactDOM.render(<App />, document.getElementById('root'));





// "Legacy" class Component

class SameAsComponent extends React.Component<{}, { count: number }> {
    constructor(props: any) {
        super(props);
        this.state = { count: 0 };
    }

    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
    }
    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`;
    }

    render() {
        return (
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                You clicked {this.state.count} times
            </button>
        );
    }
}






// With Cleanup:

const ChatAPI: any = {};

function FriendStatusWithCleanup(props: any) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status: any) {
            setIsOnline(status.isOnline);
        }

        // Subscribe
        ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

        // Cleanup
        return () => {
            ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        };
    });

    if (isOnline === null) {
        return 'Loading...';
    }
    return isOnline ? 'Online' : 'Offline';
}


// Extract in a custom hook

function useFriendStatus(friendID: number) {
    const [isOnline, setIsOnline] = useState<boolean | null>(null);

    useEffect(() => {
        function handleStatusChange(status: any) {
            setIsOnline(status.isOnline);
        }

        ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
        return () => {
            ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
        };
    });

    return isOnline;
}
