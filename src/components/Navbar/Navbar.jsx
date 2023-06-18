import React, { useState } from 'react'
import './Navbar.scss'

import { images } from '../../constants'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

const Navbar = () => {

    const navbarList = ['home', 'about', 'work', 'skills', 'testimonials', 'contact']
    const [toggle, setToggle] = useState(false)

    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={images.logo} alt="logo" />
            </div>
            <ul className='app__navbar-links'>
                {navbarList.map((item) => (
                    <li className='app__flex p-text' key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                        animate={{ x: [300, 0] }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {navbarList.map((item) => (
                                <li className='app__flex p-text' key={item}>
                                    <a onClick={() => setToggle(false)} href={`#${item}`}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav >
    )
}
export default Navbar