import Heading from "../components/Heading";
import Waves from "../components/Waves";

export default function About() {
  return (
    <div className='about'>
      <Waves />
      <div className='left-side'></div>
      <div className='right-side'></div>
      <div className='wrapper container'>
        <div className='left'>
          <Heading title={"about me"} />
          <h2>I’m a Junior Frontend Developer seeking to grow and learn.</h2>
          <Heading />
          <p>
            As a junior frontend developer, I have a strong foundation in HTML,
            CSS, and JavaScript. I am passionate about creating user-friendly
            and visually appealing websites, and I am constantly looking to
            improve my skills and learn new technologies. I have worked on
            projects where I have utilized my knowledge of frontend development
            to build dynamic and responsive web pages. I am a team player and
            enjoy collaborating with others to find solutions to challenges.
          </p>
          <div className='social-media'>
            <button>
              <a href=''>
                <img src='/img/github.svg' alt='github' />
              </a>
            </button>
            <button>
              <a href=''>
                <img src='/img/linkedin.svg' alt='linkedin' />
              </a>
            </button>
            <button>
              <a href=''>
                <img src='/img/facebook.svg' alt='facebook' />
              </a>
            </button>
            <button>
              <a href=''>
                <img src='/img/instagram.svg' alt='' />
              </a>
            </button>
          </div>
        </div>
        <div className='right'>
          <Heading title={"my skills"} />
          <div className='skills-container'>
            <div className='skill'>
              <img src='/img/html.svg' alt='html' />
              <p>html</p>
            </div>
            <div className='skill'>
              <img src='/img/css.svg' alt='css' />
              <p>css</p>
            </div>
            <div className='skill'>
              <img src='/img/javascript.svg' alt='javascript' />
              <p>javascript</p>
            </div>
            <div className='skill'>
              <img src='/img/react.svg' alt='react' />
              <p>react.js</p>
            </div>
            <div className='skill'>
              <img src='/img/nextjs.svg' alt='nextjs' />
              <p>next.js</p>
            </div>
            <div className='skill'>
              <img src='/img/sass.svg' alt='sass' />
              <p>sass</p>
            </div>
            <div className='skill'>
              <img src='/img/bootstrap.svg' alt='bootstrap' />
              <p>bootstrap</p>
            </div>
            <div className='skill'>
              <img src='/img/git.svg' alt='git' />
              <p>git</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
