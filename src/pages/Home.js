import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import ParticleBackground from "../components/ParticleBackground";

export default function Home() {
  return (
    <div className='Home'>
      <Navbar />
      <div className='left-hero'></div>
      <div className='right-hero'>
        <ParticleBackground />
        <img src='/img/me.png' alt='Kamil Staliński' />
      </div>
      <div className='wrapper container'>
        <Heading title="hello I'm" />
        <h1>Kamil Stalinski</h1>
        <h2>
          junior
          <br /> frontend developer
        </h2>
        <button className='main-btn'>check my cv</button>
      </div>
    </div>
  );
}
