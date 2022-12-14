import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./config/particlesConfig";

export default function ParticleBackground() {
  const ParticlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <div className='particles'>
      <Particles init={ParticlesInit} options={particlesConfig} />
    </div>
  );
}
