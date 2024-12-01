import './style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';
import AudioPlayer from './AudioPlayer.jsx';
import Content from './components/Content.jsx';

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
            position: [-12, 6, 0],
            antialias: true
          }}
        >
          <Experience />
        </Canvas>
      </div>
      <Content />
    </>
  );
}

const rootElement = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);