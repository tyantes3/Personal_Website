import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Carousel from './components/carousel/carousel';

function App() {
  return (
    <div className="App">
      <div className='navContainer'>
        <Navbar />
      </div>
      <div className='body'>
        <div className='topContainer'>
          <div className='headshotContainer'>
            <img src="/headshot.jpg" alt="My Photo" className="headshot" />
          </div>
          <div className='aboutmeContainer'>
            <p className='aboutmeTitle aboutMe'>About Me</p>
            <p className='aboutMe'>
              Hello! I'm [Your Name], a passionate and dedicated full stack developer with a strong foundation in both front-end and back-end technologies. I recently graduated with a degree in [Your Major] from [Your University], where I developed a keen interest in building dynamic and responsive web applications.
              Throughout my academic career and personal projects, I have honed my skills in a variety of programming languages and frameworks, including JavaScript, Python, React, Node.js, and more. I love solving complex problems and creating user-friendly solutions that make a difference.
            </p>
          </div>
        </div>
        <div className='skillsContainer'>
          <p className='skillsTitle'>My Skills</p>
          <div className='frontEnd'>
            <p>Front-End</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>ReactJs</li>
            </ul>
          </div>
          <div className='backEnd'>
            <p>Back-End</p>
            <ul>
              <li>Node.js</li>
              <li>ExpressJs</li>
              <li>Python</li>
              <li>Flask</li>
              <li>SQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className='tools'>
            <p>Tools</p>
            <ul>  
              <li>Git</li>
              <li>Azure</li>
              <li>Figma</li>
              <li>AWS</li>
            </ul>
          </div>
          <div className='softSkills'>
            <p>Soft Skills</p>
            <ul>  
              <li>Teamword</li>
              <li>Problem-Solving</li>
              <li>Communication</li>
              <li>Willingness to Learn</li>
            </ul>
          </div>
          <Carousel />
        </div>
        <div className='projectContainer'>
          <div className='projectTitle'>
            <p>My Projects</p>
            <p>Most of my projects have come from school but now that I have graduated and have more time I will start adding more personal projects to my resume to help me become the best possible canidate!</p>
          </div>
          <div className='project'>
            <p className='pTitle'>Long Input Text Summarization Website</p>
            <p className='pDescription'>Description</p>
            <p className='pTech'>Technologies Used</p>
            <p className='pLink'>Link</p>
            <p className='pPicture'>Picture</p>
          </div>

          <div className='project'>
            <p className='pTitle'>TimeGo</p>
            <p className='pDescription'>Description</p>
            <p className='pTech'>Technologies Used</p>
            <p className='pLink'>Link</p>
            <p className='pPicture'>Picture</p>
          </div>

          <div className='project'>
            <p className='pTitle'>Gopher Burrows</p>
            <p className='pDescription'>Description</p>
            <p className='pTech'>Technologies Used</p>
            <p className='pLink'>Link</p>
            <p className='pPicture'>Picture</p>
          </div>
        </div>

        <div className='connectContainer'>
          <p>Connect With Me!</p>
          <img src="/linkedin.png" alt="Linkedin Link" className="linkedin" />
          <img src="/gmail.png" alt="Gmail Link" className="linkedin" />
          <img src="/github.png" alt="Gmail Link" className="linkedin" />
          <div className='cRight'>
            <p className='resume'>Check out my Resume!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
