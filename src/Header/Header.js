import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header>
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