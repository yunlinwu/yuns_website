import React from 'react';
import './App.css';
import myImage from './Great-Lawn.jpg';
import mySecondImage from './Riversidepark.jpg'; // Assuming you have a second image named image2.jpg
import WeatherUpdate from './WeatherUpdate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Personal Website</h1>
        <img src={myImage} alt="My personal image" />
        <img src={mySecondImage} className="small-image" alt="My second image" /> {/* Added second image */}
      </header>
      <section className="App-content">
        <h2>About Me</h2>
        <p>
        Hello! My name is Yun. As a senior Computer Science student at Columbia University, I've honed my skills with Python, Java, Docker, and AWS, and have a knack for building robust APIs with FastAPI. My passion for problem-solving has been sharpened through my internship at Fannie Mae, where I tackled technical challenges head-on to develop efficient, effective software solutions.
        <p>
        My analytical, communication, and problem-solving skills don't just make me technically proficient – they make me a reliable team player. My leadership role at the Application Development Initiative, leading a team on open-source projects, is a testament to this.        </p>

        </p>
        <p>
          You can check my work on <a href="https://github.com/yunlinwu" target="_blank" rel="noopener noreferrer">GitHub</a>. 
          Here's my <a href="https://github.com/yunlinwu/resume/blob/main/YunLin_Wu_Resume%20v2%20July%202023.pdf" target="_blank" rel="noopener noreferrer">Resume</a>. {/* Added links */}
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
      <section className="App-interests"> {/* Added a new section */}
        <h2>My Interests</h2>
        <p>
        Beyond coding, my diverse hobbies, including yoga, reading, juggling, and throwing frisbee have honed my sense of balance and creativity. My practice of mindfulness, cultivated through leading the Columbia Bhagavad Gita Association, fosters a focused mindset that I bring to my projects. Ever eager to learn and grow, I approach every new coding challenge with a blend of enthusiasm, calm, and determination.
        </p>
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
