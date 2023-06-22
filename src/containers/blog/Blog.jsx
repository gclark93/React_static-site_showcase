import React from 'react';
import { Article } from '../../components/';
import { blog01, blog02, blog03, blog04, blog05, } from './imports';
import './blog.css';

const Blog = () => {
  const date = 'Apr 4, 2023';
  const title = 'GPT-4 and OpenAI are the answer, but what is the question?';
  
  return (
    <div className='gpt__blog section__padding' id='blog'>
      <div className='gpt__blog-heading'>
        <h1 className='gradient__text'>A lot is happening,<br/>We are blogging about it.</h1>
      </div>
      <div className='gpt__blog-container'>
        <div className='gpt__blog-container_group-A'>
          <Article imgUrl={blog01} date={date} title={title}/>
        </div>
        <div className='gpt__blog-container_group-B'>
          <Article imgUrl={blog02} date={date} title={title}/>
          <Article imgUrl={blog03} date={date} title={title}/>
          <Article imgUrl={blog04} date={date} title={title}/>
          <Article imgUrl={blog05} date={date} title={title}/>
        </div>
      </div>
    </div>
  )
}

export default Blog