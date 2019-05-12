import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SocksListing from './components/SocksListing';
import SockPage from './components/SockPage';

const Header: React.FC = () => (
  <div className="nav-bar">
    <h1>
      <Link to="/">React Socks</Link>
    </h1>
  </div>
);


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
