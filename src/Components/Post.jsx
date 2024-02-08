import React from 'react'
import img from './../../src/assets/college.jpg'
import './../App.scss'
import {format} from 'date-fns';


function Post({title,summary,cover,content,createdAt}) {
  return (
    <div className='post'>
        <div className='imgContainer' style={{backgroundImage:`url(${img})`}}/>
        <div className='contentContainer'>
          <h2>{title}</h2>
          <time>{format(new Date(createdAt),'MMM d, yyyy HH:mm')}</time>
          <p className='content'>
            {content}
          </p>
        </div>
      </div>
  )
}

export default Post;