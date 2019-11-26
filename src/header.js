import React, { Component } from 'react';
class Header extends Component {
    state = { }
    render() {
        return (
            <div className="header-nav">
                <img className="logo-doc" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" />
                <div className="main-menu">
                    <a  href="About US"  > AboutUS </a>
                    <a  href="career"   > Career </a>
                </div>
            </div>
        );
    }
}

export default Header;