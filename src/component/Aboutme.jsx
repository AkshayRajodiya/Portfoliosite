import React from 'react'
import '../style/Aboutme.css'
import mypic from '../assets/mypic.jpg'
import pdf from '../assets/Akshay_Rajodiya.pdf'
import ResumeIcon from './Icons/ResumeIcon'

const Aboutme = () => {
  return (
    <div className="container">     
    <div className="row">
        <div class="col">
            <div className='top'>
            <h2>Hello</h2>
             <h3>A Bit About Me</h3>
            </div>
<p className='para'>
I am an aspiring Frontend developer. I have completed my bachelors in computer science and will soon be completing my masters in computer application in June 2023. Currently I am an intern at Digikull to enhance my skills and knowledge of frontend technologies. I am mainly skilled with Frontend technologies like Javascript, React js,redux,HTML, CSS, Bootstrap,git and also have some knowledge about Data Structure and Algorithms. I have worked on 3 projects till date.
I love to watch videos or reading about coding for that I follow some Youtube channel and Reddit pages etc. Apart from coding I love to do gym and playing Chess.
</p>
<div className="button">
<a href={pdf} download>
<button type="button" class="btn btn-info">Resume
<ResumeIcon/>
</button>
</a>

</div>
</div>
<div class="col">
    
    <img src={mypic} class="rounded-circle" alt="image"/>

</div>
</div> 
</div>
  )
}

export default Aboutme