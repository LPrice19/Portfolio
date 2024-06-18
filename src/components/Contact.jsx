import React from 'react'
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-29'>
        <h1 className='my-10 text-center text-4xl'>Get in Touch</h1>
        <div className='text-center tracking-tighter'>
        <a  href={CONTACT.resume} className='border-b'>
                Resume
                </a>
                
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <a href='#' className='border-b'>
                {CONTACT.email}
                </a>
        </div>
        </div>
  )
}

export default Contact;