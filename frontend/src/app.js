import React from 'react';
import ReactDom from 'react-dom';
import './../../public/scss/main.scss';
import HomeScreen from './screens/homeScreen';
import AboutComponent from './screens/About/AboutScreen';
import ErrorComponent from './screens/ErrorSreen';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


ReactDom.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={HomeScreen} exact/>
            <Route path="/about" component={AboutComponent}/>
            <Route path="/shop" component={ErrorComponent}/>
            <Route component={HomeScreen}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('app')
)
