import React from 'react';
import Nav from '../Nav/Nav';
import TokenService from '../../services/token-service';
import ContextManager from '../../context/context-manager';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends React.Component {
    static contextType = ContextManager;
    render(){
        return(
            <header>
                {TokenService.hasAuthToken() ? <Link to={`/dashboard`} className="main-header"><h1>Rocket League Community App</h1></Link> : <Link to="/" className="main-header"><h1>Rocket League Community App</h1></Link>}
                <Nav history={this.props.history}/>
            </header>
        )
    }
}