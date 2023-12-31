import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt__header section__padding' id='home'>
      <div className='gpt__header-content'>
        <h1 className='gradient__text'>Let’s Build Something amazing with OpenAI's GPT-4</h1>
        <p>GPT-4 is more creative and collaborative than ever before. It can generate, edit, and iterate with users on creative and technical writing tasks, such as composing songs, writing screenplays, or learning a user’s writing style.</p>
        
        <div className='gpt__header-content__input'>
          <input type="email" placeholder='Your Email Address'/>
          <div className='gpt__header-content__button'>
            <button type='button'>Get Started</button>
          </div>
        </div>

        <div className='gpt__header-content__people'>
          <img src={people} alt="people" />
          <p>More than 1,600 people requested access in last 24 hours</p>
        </div>

      </div>
      <div className='gpt__header-image'>
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header