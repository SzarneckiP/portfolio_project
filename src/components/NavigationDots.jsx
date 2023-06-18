import React from 'react'


const NavigationDots = ({ active }) => {

    const navbarList = ['home', 'about', 'work', 'skills', 'testimonials', 'contact']

    return (

        <div className='app__navigation'>
            {navbarList.map((item, index) => (
                <a key={item + index}
                    className='app__navigation-dot'
                    style={active === item ? { backgroundColor: '#313BAC' } : {}}
                    href={`#${item}`} />
            ))}
        </div>
    )
}


export default NavigationDots