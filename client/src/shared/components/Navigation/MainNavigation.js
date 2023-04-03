import React from 'react';
import './MainNavigation.css';
import MainHeader from './MainHeader';
import {Link} from 'react-router-dom';
import NavLinks from './NavLinks';
function MainNavigation(props){
    return (
        <React.Fragment>
            <MainHeader>
                <button className='main-navigation__menu.button'>
                    <span />
                    <span />
                    <span />
                </button>
                <Link to ='/'>
                    <h1 className='main-navigation__title'>Scale Global</ h1>
                </ Link>
                <nav className='main-navigation__header-nav'>
                    < NavLinks/>
                </nav>
            </MainHeader>
        </ React.Fragment>
    );
};

export default MainNavigation;