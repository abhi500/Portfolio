import React, { Component } from 'react';
import './navbar.scss';

export default class NavbarComponent extends Component{
    
    constructor(){
        super();
        this.state = {
            menus : ['About', 'Menu'] 
        }
    }

    getMenus(){
        return this.state.menus;
    }

    getListItem(key, name){
        return <li className="navbar__menu" key={key} >
            <a href={`#${name}`} className="link">{name}</a>
        </li>
    }

    getList(){
        return this.getMenus().map((menu, key) => this.getListItem(key, menu) )
    }

    render(){

        return(
            <nav className="navbar navbar--theme navbar--size">
                <div className="navbar__left">
                    <h2 className="navbar__label">Portfolio</h2>
                </div>
                <ul className="navbar__menus">
                    { this.getList()}
                </ul>
            </nav>
        )
    }
}