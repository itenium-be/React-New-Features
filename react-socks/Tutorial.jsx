import React from 'react';

// REACT
// Composable Components
// The V in MVC
// Everything else is external: Routing, State management, Forms, Validation, Data fetching, ...
// Virtual DOM
// Readonly: props (=NG @Input()) and state
// Components do not need to have a visible part, they can also be used to encapsulate behavior or data


const App = () => (
    <div>
        <Header isMobile={window.innerWidth < 400} />
        <Menu />
        <Content style={{ fontSize: 15, color: 'red' }}>
            <Row>
                <Col span={12}>
                    <Title>Page Title</Title>
                </Col>
            </Row>
            <Row>
                <Col span={6}>
                    <OurServices />
                </Col>
                <Col span={6}>
                    <WhoWeAre />
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <BlogLastEntries />
                </Col>
            </Row>
        </Content>
        <Footer />
    </div>
);




const Header = ({ isMobile }) => (
    <div>
        <Brand />
        <HeaderLinks />
        {isMobile ? null : <SearchBar />}
        {isMobile && <LanguageSelector />}
    </div>
);




import './styles.css';

const Content = ({ children, ...rest }) => (
    // const rest = {styles: '...'};
    <div className="container" {...rest}>
        {children}
    </div>
);






class HeaderLinks extends React.Component {
    constructor() {
        super();
        this.state = { open: false };
    }

    render() {
        if (window.innerWidth < 400) {
            // Mobile Devices
            if (this.state.open) {
                const mobileMenuOptions = ['docs', 'blog'];
                return mobileMenuOptions.map(menu => (
                    <Link key={menu} to={meny}>
                        {menu.toUpperCase()}
                    </Link>
                ));
            }

            return <button onClick={() => this.setState({ open: !this.state.open })}>Hamburger</button>
        }

        // Desktops
        return [
            <Link key="docs" to="/docs">Docs</Link>,
            <Link key="tuts" to="/tutorial">Tutorial</Link>,
            <Link key="blog" to="/blog">Blog</Link>,
        ];
    }

    _renderLinks() {
        // Don't do this!
        // Create a new component instead!
        return [<Link />, <Link />];
    }
}


import PropTypes from 'prop-types';

HeaderLinks.propTypes = {
    isMobile: PropTypes.bool.isRequired,
    // string, number, func, element, 
    // object, instanceOf(T), any,
    // oneOf(['a', 'b', 'c'])
    // shape({errors: PropTypes.arrayOf(Error)})
}
HeaderLinks.defaultProps = {isMobile: true};









class OurServices extends React.Component {
    constructor() {
        super();
        this.state = { services: null };
    }

    componentDidMount() { // ngOnInit
        fetch('/api/our-services').then(result => {
            this.setState({ services: result.json() });
        }).catch(() => {
            this.setState({ services: 'error' });
        });
    }

    componentWillUnmount() { // ngDestroy
        // Cleanup
        // ex: clearInterval, ...
        // ex: Cleaning up DOM nodes from non-React stuff like ChartJS, ...
    }

    render() { // template: ``
        if (!this.state.services) {
            return <i className="fas fa-spinner fa-spin" />;
        }
        if (this.state.services === 'error') {
            return <div>Error fetching services</div>;
        }

        const services = this.state.services
            .filter(x => x.active)
            .sort((a, b) => a.sortOrder - b.sortOrder)

        return (
            <div className="our-services">
                {services.map(service => <OurService key={service.id} service={service} />)}
            </div>
        );
    }

    // All Lifecycle methods:
    // MOUNTING:
    // constructor()
    // static getDerivedStateFromProps(props, state) // Used to be: componentWillReceiveProps()
    // render()
    // componentDidMount()


    // UPDATING:
    // static getDerivedStateFromProps(props, state)
    // shouldComponentUpdate(nextProps, nextState)
    // render()
    // getSnapshotBeforeUpdate(prevProps, prevState) // Check 
    // componentDidUpdate()
}


import ReactDOM from 'react-dom';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
