import React, { Component } from 'react';
import { NavLink, Link, BrowserRouter, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import '../css/header.css';

const history = createBrowserHistory();

const Home = () => (
    <div>
        <h2>Головна</h2>
    </div>
);
const Products = () => (
    <div>
        <h2>Продукти 1С</h2>
    </div>
);
const Video = () => (
    <div>
        <h2>Відеоспостереження</h2>
    </div>
);


class Menu extends Component {
    render() {
        return (
            <BrowserRouter history={history}>
                <div className='header-wrap'>
                    <div className="header">
                        <div className='logo'>
                            <Link to='/'><img src={require('../img/logo-island.png')} className='logo__item' alt="Логотип"/></Link>
                        </div>
                        <nav className='top-menu'>
                            <NavLink to='/' className='menu__item'>Головна</NavLink>
                            <NavLink to='/products' className='menu__item'>Продукти 1С</NavLink>
                            <NavLink to='/video' className='menu__item'>Відеоспостереження</NavLink>
                        </nav>
                            <Route exact path="/" component={Home}/>
                            <Route path="/products" component={Products}/>
                            <Route path="/video" component={Video}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Menu;