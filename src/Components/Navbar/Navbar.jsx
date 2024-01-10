import React from 'react'
import './Navbar.css' 
import logo_name from '../../assets/nfd-name.svg'
import twitter from '../../assets/twitter-logo.svg'
import logo_svg from '../../assets/logo.svg'
import discord from '../../assets/discord_logo.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo_svg} alt="" className='logo'/>
        <img src={logo_name} alt="" className='name-logo'/>
        <ul>
            <li>About</li>
            <li>Aggregator</li>
            <li>Features</li>
            <li>Roadmap</li>
            <li>Contact us</li>
        </ul>

        <img src={discord} alt="" className='discord-logo'/>

        <img src={twitter} alt="" className='twitter-logo'/>
    </div>
  )
}

export default Navbar