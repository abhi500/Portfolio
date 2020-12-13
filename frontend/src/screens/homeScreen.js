import React, { Component } from 'react';
import NavbarComponent from './../components/navbar/NavbarComponent';
import LandingScreen from './Landing/LandingScreen';
import PortfolioScreen from './Portfolio/PortfolioScreen.js';
import SkillScreen from './Skills/SkillsScreen';
import ContactUsScreen from './ContactUs/ContactUsScreen';

export default class HomeScreen extends Component{
    render(){
        return (
            <div>
                <LandingScreen></LandingScreen>
                <PortfolioScreen></PortfolioScreen>
                <SkillScreen></SkillScreen>
                <ContactUsScreen></ContactUsScreen>
            </div>
        )
    }
}