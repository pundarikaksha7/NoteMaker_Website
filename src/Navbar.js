import { useState } from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    
    return (
        <nav className="navbar">
            <Link to="/">
                <h1>Note<span>Maker</span></h1>
            </Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Add note</Link>
            </div>
            
        </nav>
      );
}
 
export default Navbar;