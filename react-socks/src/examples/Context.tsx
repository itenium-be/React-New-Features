import React, { useContext } from 'react';
import ReactDOM from 'react-dom';


const defaultValue = { lang: 'en' };
const AppContext = React.createContext(defaultValue);


class SocksDetails extends React.Component {
    static contextType = AppContext;

    componentDidMount() {
        const lang = this.context.lang;
    }

    render() {
        const lang = this.context.lang;
        return <div>{lang}</div>;
    }
}



class App extends React.Component<{}, {lang: string}> {
    constructor(props: any) {
        super(props);
        this.state = { lang: 'nl' };
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                <SocksDetails />
                <SocksImage />
            </AppContext.Provider>
        );
    }
}


const SocksImage = () => {
    const context = useContext(AppContext);
    return <div>Image for locale: {context.lang}</div>;
}


ReactDOM.render(<App />, document.getElementById('root'));



// class AppContextConsumer extends React.Component {
//     render() {
//         return (
//             <AppContext.Consumer>
//                 {(context) => (
//                     <div>{context.lang}</div>
//                 )}
//             </AppContext.Consumer>
//         )
//     }
// }
