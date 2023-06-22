import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Research ',
    text: 'GPT-4 is the latest milestone in OpenAI’s effort in scaling up deep learning.'
  },
  {
    title: 'Infrastructure',
    text: 'GPT-4 was trained on Microsoft Azure AI supercomputers. Azure’s AI-optimized infrastructure also allows us to deliver GPT-4 to users around the world.'
  }, 
  {
    title: 'Availability',
    text: 'GPT-4 is available on ChatGPT Plus and as an API for developers to build applications and services.'
  }, 
  {
    title: 'Limitations',
    text: 'GPT-4 still has many known limitations that we are working to address, such as social biases, hallucinations, and adversarial prompts. We encourage and facilitate transparency, user education, and wider AI literacy as society adopts these models. We also aim to expand the avenues of input people have in shaping our models.'
  }, 
]

const Features = () => {
  return (
    <div className='gpt__features section__padding' id='features'>
      <div className='gpt__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Access to Join API waitlist</p> 
      </div>
      <div className='gpt__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  )
}

export default Features