import React from "react";
import NavBar from "./components/NavBar";
import VideoList from "./components/Video";
function App(){
  return (
    <div className='app'>
      <NavBar/>
      <Message/>
      <VideoList/>
    </div>
  )
}

export default App;



  function Message() {
  return (
    <div className="message"><h1>Hi; Duk videos na wannan Satin ne </h1></div>
  )
}

