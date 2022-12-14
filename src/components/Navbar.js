import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <div className='navbar'>
      <div className='wrapper-nav container'>
        <button
          onClick={() => setActive(!active)}
          className={`hamburger ${active ? "active" : ""}`}>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </button>
        <div className='social-icons'>
          <a href=''>
            <img id='github' src='/img/github.svg' alt='github' />
          </a>
          <a href=''>
            <img id='linkedin' src='/img/linkedin.svg' alt='linkedin' />
          </a>
        </div>
      </div>
    </div>
  );
}
