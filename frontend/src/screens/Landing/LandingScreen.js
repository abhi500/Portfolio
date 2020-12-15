import React, { Component } from 'react';
import './landing.scss';

export default class AboutComponent extends Component{
    constructor(){
        super();
        this.state = {
            menus : [
                {name: 'Home', id: 'landing-section'},
                {name: 'Portfolio', id: 'portfolio-section'},
                {name: 'Skill', id: 'skill-section'},
                {name: 'Contact', id: 'contact-section'},
            ]
        }
    }

    getMenus(){
        return this.state.menus;
    }

    getMenusList(){
        return this.getMenus().map((menu, index) => (this.getListItem(index, menu)))
    }

    getListItem(index, menu){
        return <li key={index} className="menu-item menu-item--theme">
            <a href={`#${menu.id}`} className="menu">{menu.name}</a>
        </li>
    }


    render(){
        return (
            <div className="landing-container landing-container--size" id="landing-section">
                <div className="landing-container__left landing-container__left--theme landing-container__left--size"></div>  
                <div className="landing-container__right landing-container__right--theme landing-container__right--size">
                    <div className="navbar navbar--size navbar--theme">
                            <img className="navbar__icon navbar__icon--size" 
                                src="./frontend/assets/menu.png"/>
                    </div>
                    <ul className="menus menus--size">{this.getMenusList()}</ul>
                    <div className="center center--size">
                        <h1>WEB DEVELOPER</h1>
                        <h1>ANDROID DEVELOPER</h1>
                    </div>
                </div> 
            </div>
        )
    }
}