import './nav-bar.scss';

import { NavLink } from 'react-router-dom';
import iphone from './nav-bar-img/iphone.png';
import ipad from './nav-bar-img/ipad.png';
import watch from './nav-bar-img/watch.png';
import mac from './nav-bar-img/mac.png';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


const NavBar = () => {
    const navBarFlag = useSelector(state => state.navBarFlag);

    // useEffect(() => {
    //     if(navBarFlag) {
    //         document.body.style.overflowY = "hidden"
    //     } else {
    //         document.body.style.overflowY = "scroll"
    //     }
    // }, [navBarFlag])

    const classNav = navBarFlag ? 'nav_bar active_nav' : 'nav_bar';

    return (
        <nav className={classNav}>
            <ul>
                <li>
                    <NavLink exact='true' to='/category/iphone' activeclassname='active'>
                        <img src={iphone} alt='iphone' className='nav-item-img' />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/category/ipad' activeclassname='active'>
                        <img src={ipad} alt='ipad' className='nav-item-img' />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/category/watch' activeclassname='active'>
                        <img src={watch} alt='watch' className='nav-item-img' />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/category/mac' activeclassname='active'>
                        <img src={mac} alt='mac' className='nav-item-img' />
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;