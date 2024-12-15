import { useState } from 'react'
import reactLogo from './assets/react.svg'
import railsLogo from '/rails-logo-circle.png'
import germanThumbnail from '/german-thumbnail-bw.jpg'
import './App.css'

function App() {
  return (
    <>
      <div className="logos">
        <a href="https://www.linkedin.com/in/muygrafico" target="_blank">
          <img src={germanThumbnail} className="logo thumbnail" alt="Developer thumbnail" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://rubyonrails.org" target="_blank">
          <img src={railsLogo} className="logo rails" alt="Rails logo" />
        </a>
      </div>
      <h1>German + React</h1>
      <h3>Innovative Fullstack Developer | Bridging Creativity and Technology</h3>
      <div className="card">
        <p className="paragraph-1">
          My name is <strong>German</strong>, a fullstack developer with a passion for building intuitive and visually compelling web applications. With over a decade of experience in design and development, I bring a unique blend of creativity and technical expertise to your project.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the logos to learn more
      </p>
    </>
  )
}

export default App
