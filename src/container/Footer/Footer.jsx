import React, { useState } from 'react'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'

import './Footer.scss'

const Footer = () => {

    const newDate = new Date()
    const dateAndTime = newDate.toLocaleString()

    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const { name, email, message } = formData

    const handleChangeInput = (e) => {
        const { name, value } = e.target

        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        setLoading(true)

        const contact = {
            _type: 'contact',
            date: dateAndTime,
            name: `${name} | ${dateAndTime}`,
            email: email,
            message: message,
        }

        client.create(contact)
            .then(() => {
                setLoading(false)
                setIsFormSubmitted(true)
            })

        e.preventDefault()
    }

    return (
        <>
            <h2 className='head-text'>
                Take A Coffee<span> & Chat With Me </span>
            </h2>

            <div className='app__footer-cards'>
                <div className='app__footer-card'>
                    <img src={images.email} alt="email" />
                    <a href="mailto:hello@micael.com" className='p-text'>hello@micael.com</a>
                </div>
                <div className='app__footer-card'>
                    <img src={images.mobile} alt="mobile" />
                    <a href="tel: +48 999-999-999" className='p-text'>+ 48 999-999-999</a>
                </div>
            </div>

            {!isFormSubmitted ? (
                <form className='app__footer-form app__flex' onSubmit={handleSubmit}>
                    <div className='app__flex'>
                        <input
                            type="text"
                            placeholder='Your Name'
                            className='p-text'
                            value={name}
                            onChange={handleChangeInput}
                            name='name'
                            required
                        />
                    </div>
                    <div className="app__flex">
                        <input
                            type="email"
                            placeholder='Your Email'
                            className='p-text'
                            value={email}
                            onChange={handleChangeInput}
                            name='email'
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            className='p-text'
                            placeholder='Your Message'
                            name="message"
                            value={message}
                            onChange={handleChangeInput}
                            required
                        />
                    </div>
                    <button
                        type='submit'
                        className='p-text'
                    >
                        {loading ? 'Sending' : 'Send Message'}
                    </button>
                </form>
            ) : (
                <div>
                    <h3 className='head-text' style={{ margin: 120 }}>
                        <span>Thank you</span> for getting in touch!
                    </h3>
                </div>
            )}
        </>
    )
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg',
)