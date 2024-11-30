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
        <div className="wrapper">
            <div className="container mx-auto">
                <div className="section h-screen">
                    <div className="container flex flex-col justify-around h-full p-5">
                        <h1 className="text-center text-slate-900 text-5xl font-semibold">
                        Lockheed Martin F-22 Raptor
                        </h1>
                        <p className="text-2xl text-slate-700 text-center md:w-[50%] mx-auto">
                        The F-22 Raptor is a fifth-generation, stealth air superiority fighter known for its unmatched agility, advanced avionics, and dominant combat capabilities.
                        </p>
                    </div>
                </div>
                <div className="section h-screen flex flex-col justify-center">
                    <div className="container">
                        <h2 className="text-center text-slate-900 text-5xl font-semibold">
                            Title Two
                        </h2>
                    </div>
                </div>
                <div className="section h-screen flex flex-col justify-center">
                    <div className="container">
                        <h2 className="text-center text-slate-900 text-5xl font-semibold">
                            Title Three
                        </h2>
                    </div>
                </div>
                <div className="section h-screen flex flex-col justify-center">
                    <div className="container">
                        <h2 className="text-center text-slate-900 text-5xl font-semibold">
                            Title Four
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </>
)