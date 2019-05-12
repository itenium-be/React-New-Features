import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';

import SocksListing from './components/SocksListing';
import SockPage from './components/SockPage';


const App: React.FC = () => {
  return (
    <Router>
      <Header />

      <Route exact path="/" component={SocksListing} />
      <Route path="/socks/:id" component={SockPage} />
    </Router>
  );
}

export default App;
