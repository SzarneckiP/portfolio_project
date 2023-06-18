import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'


const SocialMedia = () => {
    return (
        <div className='app__social'>
            <a
                href="https://twitter.com/"
                target='_blank'
                rel='noreferrer'
            >
                <BsTwitter />
            </a>
            <a
                href="https://www.instagram.com/"
                target='_blank'
                rel='noreferrer'
            >
                <BsInstagram />
            </a>
            <a
                href="https://facebook.com/"
                target='_blank'
                rel='noreferrer'
            >
                <FaFacebookF />
            </a>
        </div>
    )
}

export default SocialMedia