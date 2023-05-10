import { OrbitControls , Preload , useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import {Suspense} from 'react';
import CanvasLoader from '../Loader';



const Earth = () => {

const earth = useGLTF('./planet/scene.glb')

  return (
    <primitive
    object={earth.scene}
    scale={2.5}
     position-y={0}
      rotation-y={0}
    />
  )
};

const EarthCanvas = () => {
  return (

    <Canvas
    shadows
    frameloop='demand'
    gl={{preserveDrawingBuffer : true}}
    camera={{
      fov : 55,
      near : 0.1 , 
      far : 250 , 
      position :[-6 , 3 , 6]

    }}
    >
<Suspense fallback={<CanvasLoader/>}>
  <OrbitControls
 
  autoRotate
  rotateSpeed={2}
  enableZoom={false}
  maxPolarAngle={Math.PI /2 }
  minPolarAngle={Math.PI  /128}
  autoRotateSpeed={3}

  />
  <Earth/>
</Suspense>
    </Canvas>
  )
}

export default EarthCanvas;