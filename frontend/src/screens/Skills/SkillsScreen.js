import React, { Component } from 'react';
import './skills.scss';

export default class SkillsScreen extends Component{

    constructor(){
        super();
        this.state = {
            skills: [
                {name: 'Nodejs', image: 'https://img.icons8.com/color/452/nodejs.png'},
                {name: 'Reactjs', image: 'https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png'},
                {name: 'Express', image: 'https://fd-development.com/images/expressjs.png'},
                {name: 'Mongodb', image: 'https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2017/01/mongodb.png?w=775'},
                {name: 'Mysql', image: 'https://cdn.iconscout.com/icon/free/png-512/mysql-19-1174939.png'}
            ]
        }
    }

    getSkills(){
        return this.state.skills;
    }

    getSkillsList(){
        return this.getSkills().map((skill, index) => this.getListLi(skill, index))
    }

    getListLi(item, index){
        return <li className="skill__item skill__item--size" key={index}>
            <img src={item.image} className="skill__image--size"></img>
        </li>
    }

    render(){
        return(
            <div className="skill__container skill__container--theme skill__container--size" id="skill-section">
                <h1>Skill</h1>
                <ul className="skill__list skill__list--size">
                    {this.getSkillsList()}
                </ul>
            </div>
        )
    }
}