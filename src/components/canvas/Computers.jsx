import React,{Suspense,  useEffect , useState } from 'react';
import { Canvas  } from '@react-three/fiber';
import { OrbitControls , Preload , useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';



const Computers = ({isMobile}) => {


    const computer = useGLTF("./scene.glb");

  return (
    <mesh >
      <hemisphereLight  intensity={0.15}
      groundColor="black"
      />
      <pointLight intensity={1} />
      <spotLight 
      intensity={1}
      position={[-20 , 50 , 10 ]}
      angle={0.12}
      penumbra={1}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive 
      object={computer.scene}
      scale={isMobile ? 0.2 :  0.60}
      position={ isMobile ? [-0.7 , -1.5 , -1 ] : [0 , -3.25 , -1.5]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile , setISMobile] = useState(false);

  useEffect(() => {
// add a listener for changes the screen
    const mediaQuery = window.matchMedia('(max-width:500px)');

    // set initial value of the 'isMobile' state variable
    setISMobile(mediaQuery.matches);
// define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
setISMobile(event.matches)
    }
//add the callback function as a listener for changes to the media queri
    mediaQuery.addEventListener("change" ,
     handleMediaQueryChange);
// remove the listener when the component is unmounted
     return () => {
      mediaQuery.removeEventListener('change',
      
      handleMediaQueryChange);
     }

  },[])
  return (
   
    <Canvas
    // style={{position : 'relative' , top : '-28rem' , right : '3rem'}}
    frameloop='demand'
    
    shadows
    camera={{position : [25 , 3 , 5], fov : 20 }}
    gl={{preserveDrawingBuffer : true}}
    >
      
<Suspense  fallback={<CanvasLoader/>} >
  <OrbitControls
  enableZoom={false}
  maxPolarAngle={Math.PI / 2}
  minPolarAngle={Math.PI / 2}

  />

  <Computers isMobile={isMobile} />

</Suspense>

<Preload all/>

    </Canvas>
   
   
  );
};

export default ComputersCanvas ;



//https://drive.google.com/file/d/11TaRwugKhRTmz0pBk6_bbRtdnt9avKyD/view?usp=share_link