import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';

import SocksListing from './components/SocksListing';
import SockPage from './components/SockPage';

const App: React.FC = () => {
  return (
    <Router>
      <Header />

      <Route exact path="/" component={SocksListing} />
      <Route exact path="/cart" component={Cart} />
      <Route path="/socks/:id" component={SockPage} />
    </Router>
  );
}

export default App;
