import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import AudioPlayer from './AudioPlayer.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <AudioPlayer url="./music.mp3" />
        <Canvas
            shadows
            camera={ {
                fov: 45,
                near: 0.1,
                far: 100,
                position: [ -10, 2, 0 ],

            } }
        >
            <Experience />
        </Canvas>
    </>
)