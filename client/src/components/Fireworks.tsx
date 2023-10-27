import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

const ParticlesContainer = () => {
  const customInit = async (engine: Engine): Promise<void> => {
    await loadFireworksPreset(engine);
  }

  const options = {
    preset: "fireworks",
  };

  return <Particles options={options} init={customInit} />;
}

export default ParticlesContainer;