import { useRef, useState } from 'react';
import './Home.scss'

const Home = () => {
  const textRef = useRef(null);
  const [isEmailHovered, setIsEmailHovered] = useState(false);
  const [isGithubHovered, setIsGithubHovered] = useState(false);
  const [isGoodreadsHovered, setIsGoodreadsHovered] = useState(false);

  function handleMouseEnter() {
    setIsEmailHovered(true);
  };
  
  function handleMouseLeave() {
    setIsEmailHovered(false);
  };

  return (
    <div>
      <div className='centering-div'>
        <div className='center-container'>
          <div className='name-and-contacts'>
            <div className='name'>
              <div className='name-word'>Wesley</div>
              <div className='name-word'>Imig</div>
            </div>
            <div className='links'>
              <span>
                <a className='link' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={textRef} href='mailto:imig.wa03@gmail.com' target='blank'>
                  {isEmailHovered ? 'imig.wa03@gmail.com' : 'email'}
                </a>
                <h> - </h>
                <a className='link' href='https://github.com/imigwesley' target='blank'>github</a>
                <h> - </h>
                <a className='link' href='https://google.com' target='blank'>goodreads</a>
              </span>
            </div>
          </div>
          <hr className='divider'/>
          <div className='pages-menu'>
            <div>About Me</div>
            <div>Experience</div>
            <div>Projects</div>
            <div>Resume</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;