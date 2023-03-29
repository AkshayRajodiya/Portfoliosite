import React from 'react'
import '../style/Project.css'
import Thali from '../assets/Thali.png'
import Weather from '../assets/Weather.png'
import ToDo from '../assets/ToDo.png'
import Emoji from '../assets/Emoji.png'

const Project = () => {
  return (
    <div className='container'>
        <h2 className='project-h2'>Projects</h2>
        <div className='row'>
        <div className='col project-col'>
        <div className="card">
  <img src={Thali} className="card-img-top" alt="Project Image"/>
  <div className="card-body">
    <h5 className="card-title">Thali Food Ordering App</h5>
    <p className="card-text">It is a Thali making app made using React,Redux</p>
    <a href="https://rococo-dasik-f7e212.netlify.app" target="_blank" className="btn btn-outline-success">Go to App</a>
  </div>
</div>
<div className="card">
  <img src={Emoji} className="card-img-top" alt="Project Image"/>
  <div className="card-body">
    <h5 className="card-title">Emoji Search</h5>
    <p className="card-text">It is a Emoji Search app made using React Js.</p>
    <a href="https://unrivaled-bunny-bfca43.netlify.app/" target="_blank" className="btn btn-outline-success">Go to App</a>
  </div>
</div>
</div>
<div className='col project-col'>
<div className="card">
  <img src={Weather} className="card-img-top" alt="Project Image"/>
  <div className="card-body">
    <h5 className="card-title">Weather App</h5>
    <p className="card-text">It is Weather app made using React Js. </p>
    <a href="https://cosmic-kulfi-bdc96d.netlify.app/" target="_blank" className="btn btn-outline-success">Go to App</a>
  </div>
</div>
<div className="card">
  <img src={ToDo} className="card-img-top" alt="Project Image"/>
  <div className="card-body">
    <h5 className="card-title">To Do App</h5>
    <p className="card-text">It is a  To Do App made using React Js.</p>
    <a href="https://wonderful-yeot-bf6e38.netlify.app/" target="_blank" className="btn btn-outline-success">Go to App</a>
  </div>
</div>
</div>
</div>
</div>
  )
}

export default Project