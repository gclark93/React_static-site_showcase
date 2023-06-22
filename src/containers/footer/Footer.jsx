import React from 'react';
import gptLogo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => {
  return (
    <div className='gpt__footer section__padding'>
      <div className='gpt__footer-heading'>
        <h1 className='gradient__text'>Do you want to step into the future with others?</h1>
      </div>
      <div className='gpt__footer-button'>
        <p>Join API waitlist</p>
      </div>
      <div className='gpt__footer-links'>
        <div className='gpt__footer-links_logo'>
          <img src={gptLogo} alt="gpt-4" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='gpt__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Information</p>
        </div>
        <div className='gpt__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className='gpt__footer-copyright'>
        <p>© 2015-2023 OpenAI. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer