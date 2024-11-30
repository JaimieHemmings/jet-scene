import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import AudioPlayer from './AudioPlayer.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <AudioPlayer url="./music.mp3" />
        <div className="h-screen w-full fixed">
            <Canvas
                className='canvas'
                shadows
                camera={ {
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [ -12, 6, 0 ],
                    
                } }
                >
                <Experience />
            </Canvas>
        </div>
    </>
)