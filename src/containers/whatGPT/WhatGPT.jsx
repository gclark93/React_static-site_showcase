import React from 'react';
import './whatgpt.css';
import { Feature } from '../../components';

const WhatGPT = () => {
  return (
    <div className='gpt__whatgpt section__margin' id='wgpt4'>
      <div className='gpt__whatgpt-feature'>
        <Feature title="What is GPT-4" text="GPT-4 is OpenAI’s most advanced system, producing safer and more useful responses. It can solve difficult problems with greater accuracy, thanks to its broader general knowledge and problem solving abilities."/>
      </div>
      <div className='gpt__whatgpt-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Try on ChatGPT Plus</p>
      </div>
      <div className='gpt__whatgpt-container'>
        <Feature title="Training" text="We incorporated more human feedback, including feedback submitted by ChatGPT users, to improve GPT-4’s behavior. We also worked with over 50 experts for early feedback in domains including AI safety and security."/>
        <Feature title="Improvement" text="We’ve applied lessons from real-world use of our previous models into GPT-4’s safety research and monitoring system. Like ChatGPT, we’ll be updating and improving GPT-4 at a regular cadence as more people use it."/>
        <Feature title="Safety" text="GPT-4’s advanced reasoning and instruction-following capabilities expedited our safety work. We used GPT-4 to help create training data for model fine-tuning and iterate on classifiers across training, evaluations, and monitoring."/>
      </div>
    </div>
  )
}

export default WhatGPT 