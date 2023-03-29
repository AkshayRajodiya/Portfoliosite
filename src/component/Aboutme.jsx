import React from 'react'
import '../style/Aboutme.css'
import mypic from '../assets/mypic.jpg'
import pdf from '../assets/Akshay_Rajodiya.pdf'

const Aboutme = () => {
  return (
    <div className="container body">     
    <div className="row">
        <div class="col">
            <div className='top'>
            <h2>Hello</h2>
             <h3>A Bit About Me</h3>
            </div>
<div className='bottom'>
<p className='para'>
I am an aspiring Frontend developer. I have completed my bachelors in computer science and will soon be completing my masters in computer application in June 2023. Currently I am an intern at Digikull to enhance my skills and knowledge of frontend technologies. I am mainly skilled with Frontend technologies like Javascript, React js,redux,HTML, CSS, Bootstrap,git and also have some knowledge about Data Structure and Algorithms. I have worked on 3 projects till date.
I love to watch videos or reading about coding for that I follow some Youtube channel and Reddit pages etc. Apart from coding I love to do gym and playing Chess.
</p>
<div className="button">
<a href={pdf} download>
<button type="button" class="btn btn-info">Resume
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
  <path fill-rule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
</svg>
</button>
</a>
</div>
</div>
</div>
<div class="col">
    <div className="image-container">
    <img src={mypic} class="rounded-circle" alt="image"/>
    </div>
</div>
</div> 
</div>
  )
}

export default Aboutme