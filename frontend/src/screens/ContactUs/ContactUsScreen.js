import React, { Component } from 'react';
import './contactus.scss';


export default class ContactUsScreen extends Component{
    render(){
        return (
            <div    className="contact__container contact__container--size contact__container--theme" 
                    id="contact-section">
                <h1>CONTACT US</h1>
                <div className="contact__center">
                    <form action="post" 
                        className="contact__fields">
                        <input  type="text" 
                                placeholder="Full Name" 
                                className="contact__name input-size mt4"/>
                        <input  type="email" 
                                placeholder="Email" 
                                className="contact__email input-size mt4"/>
                        <input  type="text" 
                                placeholder="Contact" 
                                className="contact__number input-size mt4"/>
                        <textarea name="message" 
                                    id="message" 
                                    placeholder="Message" 
                                    className="contact__message mt4"></textarea>
                        <button className="contact__button-submit mt4">SUBMIT</button>
                    </form>
                </div>
            </div>
        )
    }
}