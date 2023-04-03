import React, {useContext} from 'react';
import './NavLinks.css';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';

function NavLinks(){
    const auth = useContext(AuthContext);
    return(
        <ul className='nav-links'>
            <li>
                <NavLink to = '/' exact > Digital Tools </ NavLink>
            </li> 
            { auth.isLoggedin && (            
            <li>
                <NavLink to = '/' exact > My Projects </ NavLink>
            </li> 
            )}
            { auth.isLoggedin && (    
            <li>
                <NavLink to = '/logout' exact > Logout </ NavLink>
            </li> 
            )} 
            { !auth.isLoggedin && (  
            <li>
                <NavLink to = '/login-signup' exact > Login/SignUp </ NavLink>
            </li>  
            )}    
        </ul>
    );
};

export default NavLinks;
