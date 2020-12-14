
import React, { Component } from 'react';


import './floatingbutton.scss';

export default class FloatingButton extends Component{

    constructor(){
        super();  
        this.scrollToTop = this.scrollToTop.bind(this); 
    }

    componentDidMount(){
        this.self = document.getElementById('floatingbutton');
        this.target = document.getElementById('landing-section')
        this.createObserver();
    }

    hideSelf(){
        var self = this.self;
        self.style.display = 'none';
    }

    showSelf(){
        var self = this.self;
        self.style.display = 'block';
    }

    createObserver(){
        let observer = new IntersectionObserver((entries) => {
            this.hideOrShow(this.isIntersecting(entries[entries.length - 1]));
        
        }, {threshold: .9});

        observer.observe(this.target);
    }


    isIntersecting(entry){
        return entry.isIntersecting;
    }

    hideOrShow(intersection){
        if(intersection)
                this.hideSelf();
            else
                this.showSelf();
    }

    /**
     * scrollTop 0px
     */
    scrollToTop(){
        window.scrollTo(0, 0)
    }


    render(){
        return(
            <div className="floatingbutton floatingbutton--size floatingbutton--theme" 
                id="floatingbutton"
                onClick={this.scrollToTop}>
            </div>
        )
    }
}