import './header.scss';

import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { navBarToggle } from '../actions/actions';
import Logo from './header-img/logo.svg';
import Basket from './header-img/basket.svg';
import Burger from './header-img/burger3.svg';

const Header = () => {
    const navBarFlag = useSelector(state => state.navBarFlag)
    const dispatch = useDispatch();
    const totalShopCounter = useSelector(state => state.totalShopCounter);


    const classBurger = navBarFlag ? 'burger active' : 'burger';

    const styleForCounter = {
        color: totalShopCounter > 0 ? 'red' : 'black',
        fontSize: totalShopCounter > 0 ? '17px' : '15px'
    }


    return (
        <header>
            <img src={Burger} alt="menu" className={classBurger} onClick={() => dispatch(navBarToggle())}/>
            <div className="logo">
                <NavLink to='/' activeclassname='active'>
                    <img src={Logo} alt="logo" className='logo-img' />
                    <h1 className='logo-logo'>STORE_</h1>
                </NavLink>

            </div>
            <div className='basket'>
                <NavLink to='/basket' activeclassname='active'>
                    <img src={Basket} alt="basket" />
                    <span style={styleForCounter}>{totalShopCounter}</span>
                </NavLink>
            </div>
        </header>
    )
}

export default Header;