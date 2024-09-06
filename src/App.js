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
        <div className='topContainer' id="aboutme">
          <div className='headshotContainer'>
            <img src="/headshot.jpg" alt="My Photo" className="headshot" />
          </div>
          <div  className='aboutmeContainer'>
            <p className='aboutmeTitle aboutMe'>About Me</p>
            <p className='aboutMe'>
              Hello! My name is Tyler Yantes, a passionate and dedicated full stack developer with a strong foundation in both front-end and back-end technologies. I recently graduated with a Bachelor's Degree in Computer Engineering from The University of Minnesota - Twin Cities. While in school I developed an interest in building dynamic and responsive web applications.
              I started working on website development in my junior year of college by taking a class in basic HTML, JavaScript, and CSS. After taking this entry level class I realized that I loved this area of software development and started focusing the end of my degree in this field with aspirations to become a Full-Stack Developer. I have learned many skills in a variety of programming languages and frameworks, including JavaScript, Python, React, Node.js, and more. While I have a good foundation, I am working on personal projects to enhance my skills and hope to land a job in the web development field soon! Please reach out to me if you have any suggestions on projects that would help my resume along with any career oppurtunities!
            </p>
          </div>
        </div>
        <div id="skills" className='skillsContainer'>
          <p className='skillsTitle'>My Skills</p>
          <div className='frontEnd'>
            <p className='skillTitle'>Front-End</p>
            <ul className='skillsList'>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>ReactJs</li>
            </ul>
          </div>
          <div className='backEnd'>
            <p className='skillTitle'>Back-End</p>
            <ul className='skillsList'>
              <li>Node.js</li>
              <li>ExpressJs</li>
              <li>Python</li>
              <li>Flask</li>
              <li>SQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className='tools'>
            <p className='skillTitle'>Tools</p>
            <ul className='skillsList'>  
              <li>Git</li>
              <li>Azure</li>
              <li>Figma</li>
              <li>AWS</li>
            </ul>
          </div>
          <div className='softSkills'>
            <p className='skillTitle'>Soft Skills</p>
            <ul className='skillsList'>  
              <li>Teamword</li>
              <li>Problem-Solving</li>
              <li>Communication</li>
              <li>Willingness to Learn</li>
            </ul>
          </div>
          <Carousel />
        </div>
        <div id="projects" className='projectContainer'>
          <div className='projectTitle'>
            <p className='projectHeader'>My Projects</p>
            <p>Most of my projects have come from school but now that I have graduated and have more time I will start adding more personal projects to my resume to help me become the best possible canidate!</p>
          </div>
          <div className='project'>
            <p className='pTitle'>Long Input Text Summarization Website</p>
            <p className='pDescription'><b>Description</b> - This project was my senior capstone project! The purpose of this project was to recieve a long input text and be able to analyze it and return different types of information to the user using pre-trained large language models. As far as the web application itself it was built using a Flask api to handle the model inputs and run them through the models to analyze them and then send them back to be displayed on our React application. The final portion of this project was adding speech to text input capabilities, this was done using the built in React hook for speech to text processing. Overall this was a fun project and helped to learn more about React along with building and using apis! Warning: The actual summarization portion of this website isn't hosted as it requires a lot of CPU to run!</p>
            <p className='pTech'><b>Technologies Used</b> - ReactJs, NextJs, PureCSS, and Flask</p>
            <p className='pLink'><b>Link</b> - <a href="https://innovative-text-analysis-system.onrender.com/">Text Summarization Website</a></p>
            <img src="/TextAnalysis.png" alt="Website Photo" className="pPicture" />
          </div>

          <div className='project'>
            <p className='pTitle'>TimeGo</p>
            <p className='pDescription'><b>Description</b> - TimeGo was my final project for my grad level web-development class! This project was built with a group of 3 people over the span of a month. The purpose of this project was to design a website that would allow users to keep track of where their time was going and be able to keep their lives on track! This project was built using React along with Muix and the built in react calendar for graphs and the calendars. This project helped me develop team working skills along with becoming comfortable reformatting existing libraries to my personal needs. Developing TimeGo also helped me get used to using Date objects in React along with getting comfortable using MongoDB's with Azure! </p>
            <p className='pTech'><b>Technologies Used</b> - ReactJS, MongoDB, Azure Serverless api, Muix, React Calendar Hook, hosted on Azure</p>
            <p className='pLink'><b>Link</b> - <a href="https://calm-bush-0380a3110.5.azurestaticapps.net">TimeGo</a> - Warning this websites login features weren't setup well by a groupmate so I'm hoping to fix this soon!</p>
            <img src="/TimeGoTwo.png" alt="Website Photo" className="pPicture" />
          </div>

          <div className='project'>
            <p className='pTitle'>Gopher Burrows</p>
            <p className='pDescription'><b>Description</b> - Gopher Burrows is a website that was made to help University of Minnesota students find clubs and activites to participate in around campus. This project was completed with a group of 4 other students as the first project of my grad level web-development class. This website was made using Flask along AWS S3 Buckets for picture storage and Weavy as a chat feature. My main job on this project was to develop the club pages including the in club chat which was built from scratch. Overall this project helped me to learn more about developing websites on Flask, along with hosting websites on Render.com.</p>
            <p className='pTech'><b>Technologies Used</b> - Flask, AWS S3 Buckets, Pug HTML Templates, hosted on Render.com</p>
            <p className='pLink'><b>Link</b> - The link is currently broken so working on getting it rehosted!</p>
            <p className='pPicture'>Picture</p>
          </div>
        </div>

        <div id="connect" className='connectContainer'>
          <p>Connect With Me!</p>
          <a href="https://www.linkedin.com/in/tyler-yantes-25254611a/" target="_blank" rel="noopener noreferrer" className='linkedin'>
            <img src="/linkedin.png" alt="Linkedin Link" className="linkedin" />
          </a>
          <a href="mailto:tyantes3@gmail.com" className="linkedin">
            <img src="/gmail.png" alt="Gmail Link" className="linkedin" />
          </a>
          <a href="https://github.com/tyantes3" target="_blank" rel="noopener noreferrer" className='linkedin'>
            <img src="/github.png" alt="Gmail Link" className="linkedin" />
          </a>
          <div className='cRight'>
            <a classname='resume' href="https://docs.google.com/document/d/1CiabGoGL-MRTnjPFN-kXF2r8t37-6UcyJGGw9MJQySU/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
              <p className='resume'>Check out my Resume!</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
