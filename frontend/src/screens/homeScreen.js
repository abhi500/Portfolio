import React, { Component } from 'react';
import NavbarComponent from './../components/navbar/NavbarComponent';
import AboutComponent from './About/AboutScreen.js';

export default class HomeScreen extends Component{
    render(){
        return (
            <div>
                <NavbarComponent></NavbarComponent>
                <AboutComponent></AboutComponent>
            </div>
        )
    }
}