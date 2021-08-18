import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header>
                <div className = 'title-div'>
                    <p>Las Vacas Locas</p>
                </div>
                <div>
                    <NavLink exact to="/">
                        Home
                    </NavLink> <br/>
                    <NavLink to="/create">Add New Cows</NavLink>
                </div>
            </header>
         );
    }
}
 
export default Header;