import React, { Component } from 'react';
import NavbarComponent from './NavbarComponent';
import HomeComponent from './HomeComponent';

class Main extends Component {
    render() {
        return (
            <div>
                <NavbarComponent />
                <HomeComponent />
            </div>
        );
    }
}


export default Main;