import React from 'react';
import {NavLink } from 'react-router-dom';
import {isEmpty} from 'lodash';
import { useSelector } from 'react-redux';
const TopNav = () => {

    const user = useSelector(state => state.user);
    return (  <nav>
        <div className="row">
            <div className="col-sm-6 col-xs-12">
                <ul>
                    <li>
                    <NavLink activeStyle={{color:"lime"}} to="/">صفحه اصلی </NavLink>
                        <a href="#"> درباره ما </a>
                        <a href="#"> تماس با ما </a>
                    </li>
                </ul>
            </div>
            <div className="col-sm-6 col-xs-12">



                <div className="clientarea">

                {!isEmpty(user) ? (   <div className="loggein ">
    <i className="zmdi zmdi-account"></i><NavLink to="userprofile"> {user.fullname}، خوش آمدی </NavLink>/
    {user.IsAdmin ? (   
    <NavLink to="/dashboard">  /پنل ادمین </NavLink>
    ): null}
 
    <NavLink to="/logout"> خروج </NavLink>
                    </div>

):(<div className="signin">
                        <i className="zmdi zmdi-account"></i>
                        <NavLink activeStyle={{color:"lime"}} to="/login"> ورود </NavLink> /
                        <NavLink activeStyle={{color:"lime"}} to="/register"> عضویت </NavLink> 
                    </div>

)}


                  
                    
                </div>
            </div>
        </div>
    </nav> );
}
 
export default TopNav;