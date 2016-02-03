import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory } from 'react-router';

import Style from './components/test/style'

const App = React.createClass({
    render() {
        return (
            <div>
                <Link to="/about">asdasdasdasdasd</Link>
                <div className="detail">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

const About = React.createClass({
    render() {
        return (
            <div>123123123123
                <Link to="/">asdasdasdasdasd</Link>
            </div>
        )
    }
});

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="about" component={About}/>
        </Route>
    </Router>
), document.getElementById('app'));