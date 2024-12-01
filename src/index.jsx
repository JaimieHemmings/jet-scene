import './style.css'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas, useThree } from '@react-three/fiber'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Experience from './Experience.jsx'
import AudioPlayer from './AudioPlayer.jsx'
import Content from './components/Content.jsx'

gsap.registerPlugin(ScrollTrigger);
function CameraAnimation() {
  const { camera } = useThree();

  useEffect(() => {
    const scrollTrigger = ScrollTrigger.create({
      trigger: "#section-one",
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.to(camera.position, {
          x: 0,
          y: 5,
          z: 5,
          duration: 1,
          ease: "power2.inOut"
        });
      },
    });
    return () => {
      scrollTrigger.kill();
    };
  }, [camera]);

  return null;
}

function App() {
  return (
    <>
      <AudioPlayer url="./music.mp3" />
      <div className="h-screen w-full fixed">
        <Canvas
          className='canvas'
          shadows
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ -12, 6, 0 ],
          }}
        >
          <CameraAnimation />
          <Experience />
        </Canvas>
      </div>
      <Content />
    </>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)