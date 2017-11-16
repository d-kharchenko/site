import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../css/header.css'
class Menu extends Component {
    render() {
        return (
            <div className='header-wrap'>
                <div className="header">
                    <div className='logo'>
                        <Link to='/#'><img src={require('../img/logo-island.png')} className='logo__item' alt="Логотип"/></Link>
                    </div>
                    <nav className='top-menu'>
                        <NavLink to='/#' className='menu__item'>Головна</NavLink>
                        <NavLink to='/products' className='menu__item'>Продукти 1С</NavLink>
                        <NavLink to='/video' className='menu__item'>Відеоспостереження</NavLink>
                    </nav>
                </div>

            </div>
        );
    }
}

export default Menu;