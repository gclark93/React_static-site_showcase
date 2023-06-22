import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className='gpt__possibility section__padding' id='possibility'>
      <div className='gpt__possibility-image'>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className='gpt__possibility-content'>
        <h4>Outperforming previous versions</h4>
        <h1 className='gradient__text'>A Better, Faster, and Stronger Future for AI</h1>
        <p>GPT-4 surpasses ChatGPT in its advanced reasoning capabilities and outperforms it by scoring in higher approximate percentiles among test-takers.</p>
        <h4>Be part of the people who seize its advantages</h4>
      </div>
    </div>
  )
}

export default Possibility