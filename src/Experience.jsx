import * as THREE from 'three';
import { useLoader, useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { OrbitControls, Sky, Cloud, Clouds } from '@react-three/drei';
import { useRef } from 'react';

const Experience = () => {
    const model = useLoader(GLTFLoader, './f22.glb', (loader) => {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('/draco/');
        loader.setDRACOLoader(dracoLoader);
    });

    const modelRef = useRef();
    const cloudRefs = useRef([]);
    const { camera } = useThree();

    useFrame((state, delta) => {
        if (modelRef.current) {
            const time = state.clock.getElapsedTime();
            modelRef.current.position.y += Math.sin(time) * 0.001;
            modelRef.current.position.x += Math.sin(time) * 0.005;
            modelRef.current.rotation.z += Math.cos(time) * 0.0001;
            modelRef.current.rotation.x += Math.cos(time) * 0.001;
        }

        // Animate camera
        camera.lookAt(0, 0, 0);

        // Animate clouds
        cloudRefs.current.forEach((cloud, index) => {
            if (cloud) {
                cloud.position.x += delta * 10;
                if (cloud.position.x > 200) {
                    cloud.position.x = -50;
                }
            }
        });
    });

    return (
        <>
            <OrbitControls makeDefault />
            <Sky sunPosition={[100, 10, 100]} />
            <directionalLight position={[1, 2, 3]} intensity={2} />
            <ambientLight intensity={0.5} />

            <primitive object={model.scene} scale={1} ref={modelRef} position={[-4, -1, 0]} />

            <Clouds material={THREE.MeshBasicMaterial}>

                {[...Array(10)].map((_, i) => (
                    <Cloud
                        seed={1}
                        scale={2}
                        volume={5}
                        color="#eeeeee"
                        key={i}
                            ref={(el) => (cloudRefs.current[i] = el)}
                            position={[
                                Math.random() * 100 - 50,
                                Math.random() * 20,
                                Math.random() * 100 - 50,
                            ]}
                    />
                ))}                
            </Clouds>
        </>
    );
};

export default Experience;