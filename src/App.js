import React from 'react';
import './App.css';
import myImage from './image1.jpg';
import WeatherUpdate from './WeatherUpdate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Personal Website</h1>
        <img src={myImage} alt="My personal image" />

      </header>
      <section className="App-content">
        <h2>About Me</h2>
        <p>
          Hello! My name is Yun, and I'm a rising computer science senior at Columbia University. I have a passion for
          creating beautiful and functional websites. I have experience working
          with various web technologies, including React, Node.js, and
          Express.js.
        </p>
      </section>
      <section className="App-portfolio">
        <h2>Portfolio</h2>
        <p>Here are some of the projects I've worked on:</p>
        <ul>
          <li>
            <a href="https://example-project-1.com" target="_blank" rel="noopener noreferrer">
              Example Project 1
            </a>
          </li>
          <li>
            <a href="https://example-project-2.com" target="_blank" rel="noopener noreferrer">
              Example Project 2
            </a>
          </li>
        </ul>
      </section>
      <section className="App-contact">
        <h2>Contact Me</h2>
        <p>
          If you'd like to get in touch with me, feel free to send me an email
          at <a href="mailto:yw4016@columbia.edu">yw4016@columbia.edu</a>.
        </p>
      </section>
      <WeatherUpdate />
    </div>
  );
}

export default App;



