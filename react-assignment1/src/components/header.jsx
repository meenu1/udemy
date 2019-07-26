import React, { Component } from 'react';
import logo from "../images/elan-logo.png";

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="pull-left">
                        <img src={logo}/>
                        <span className="navbar-brand">Amazon</span>
                    </div>
                    <div className="pull-right"> Cart({this.props.total})</div>
                </nav>
            </React.Fragment>
         );
    }
}
 
export default Header;