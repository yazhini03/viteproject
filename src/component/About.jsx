import React from 'react'

function About(props) {
   function clickEvent(){
       alert("clickevent works..")
   }

  return (
    <div>
    <br></br>
    <b>Name:{props.name}</b><br></br>
    <b>Work:{props.work}</b><br></br>
    <button onClick={clickEvent()}>click</button>
    </div>
  )
}

export default About;
