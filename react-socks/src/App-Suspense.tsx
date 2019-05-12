import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Spinner from './components/Spinner';

const SocksListing = lazy(() => import('./components/SocksListing'));
const SockPage = lazy(() => import('./components/SockPage'));


const App: React.FC = () => {
    return (
        <Router>
            <Header />

            <Suspense fallback={<Spinner />}>
                <Route exact path="/" component={SocksListing} />
                <Route path="/socks/:id" component={SockPage} />
            </Suspense> 
        </Router>
    );
}

export default App;
