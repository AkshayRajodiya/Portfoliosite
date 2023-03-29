import React from 'react'
import '../style/Skill.css'

const Skill = () => {
  return (
    <div classNameName="container"><h2 className="skill-h2">Skills & Expertise</h2>
    <div className="row">
    <div className="col skill">    
    <div className="rounded-pill">HTML5</div>
    <div className="rounded-pill">CSS3</div>
    <div className="rounded-pill">JAVASCRIPT</div>
    <div className="rounded-pill">BOOTSTRAP 5</div>
    </div>
    <div className="col skill">    
    <div className="rounded-pill">REACT</div>
    <div className="rounded-pill">REDUX</div>
    <div className="rounded-pill">REACT SPRING</div>
    <div className="rounded-pill">MATERIAL UI</div>
    </div>
    </div>
    </div>
  )
}

export default Skill