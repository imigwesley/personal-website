import { useRef, useState } from 'react';
import './Home.scss'

const Home = () => {
  const textRef = useRef(null);
  const [isEmailHovered, SetIsEmailHovered] = useState(false);

  const handleMouseEnter = () => {
    SetIsEmailHovered(true);
  };
  
  const handleMouseLeave = () => {
    const highlighted = window.getSelection();
    if (!highlighted.toString()) {
      // email not highlighted
      SetIsEmailHovered(false);
    }
  };


  return (
    <div>
      <div className='centering-div'>
        <div className='all-container'>
          <div className='name-contacts'>
            <div className='name'>
              <h1>Wesley</h1>
              <h1>Imig</h1>
            </div>
              <div className='contacts'>
                <h>
                  <h onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={textRef}>
                    {isEmailHovered? 'imig.wa03@gmail.com -' : 'email -'}
                  </h>
    &nbsp;
                  <a href='https://www.w3schools.com/cssref/index.php' target='blank' >css thing</a>
                  &nbsp;- github
                  - goodreads
                </h>
                </div>
          </div>
          <hr className='divider'/>
          <div className='pages-menu'>
            <h2>About Me</h2>
            <h2>Resume</h2>
            <h2>Personal Projects</h2>
            <h2>Experience</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;