import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import search from '../../assets/search.svg'
import Avatar from '../../components/Avatar/Avatar'

import './Navbar.css'

const Navbar = () => {

  var User=1123;
  return (
    <nav>
        <div className='navbar'>
             <Link to='/' className='nav-item nav-logo'>
               <img src={logo} alt='logo'/>
             </Link>
             <Link to='/' className='nav-item nav-btn'>About</Link>
             <Link to='/' className='nav-item nav-btn'>Products</Link>
             <Link to='/' className='nav-item nav-btn'>For teams</Link>
             <form>
               <input type='text' placeholder='Search..'/>
               <img src={search} alt='search' width={18} className='search-icon'/>
             </form>

             {User === null?
                <Link to='/Auth' className='nav-items nav-links'>Log In</Link> :
                <>
                  <Link to='/'><Avatar>M</Avatar></Link>
                  <button className="nav-item nav-links">Log Out</button>
                </>
             }
        </div>
    </nav>

  )
}

export default Navbar