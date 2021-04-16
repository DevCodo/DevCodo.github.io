import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Box, Plane } from '@react-three/drei'
import { Physics, useBox, usePlane } from '@react-three/cannon'
import { MOUSE } from 'three'

const MyBox = () => {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }))
  return (
    <Box ref={ref} castShadow position={[0, 2, 0]} onClick={() => api.velocity.set(1, 2, 1)}>
      <meshStandardMaterial attach="material" color="lightblue" />
    </Box>
    // <mesh ref={ref} castShadow position={[0, 2, 0]} onClick={() => api.velocity.set(1, 2, 1)}>
    //   <boxBufferGeometry attach="geometry" />
    //   <meshStandardMaterial attach="material" color="lightblue" />
    // </mesh>
  )
}

const MyPlane = () => {
  const [ref] = usePlane(() => ({ rotation: [Math.PI * 1.5, 0, 0] }))
  return (
    <Plane
      receiveShadow
      ref={ref}
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      args={[1000, 1000]}
    >
      <meshStandardMaterial attach="material" color="green" />
    </Plane>
  )
}

const App = () => {
  return (
    <Canva
      shadows={{
        type: THREE.PCFSoftShadowMap,
      }}
      colorManagement
      gl={{ alpha: false }}
      camera={{ position: [-1, 1, 2.5], fov: 50 }}
    >
      <color attach="background" args={['lightblue']} />
      <hemisphereLight intensity={0.35} />
      <spotLight
        position={[5, 5, 5]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />{' '}
      camera={{ position: [-3, 2, 5], fov: 90 }}>
      <Stars />
      <OrbitControls
        mouseButtons={{
          RIGHT: MOUSE.ROTATE,
        }}
      />
      <ambientLight intensity={0.3} />
      {/* <spotLight position={[10, 15, 10]} angle={0.3} /> */}
      {/* <pointLight position={[5, 5, 5]} intensity={0.9} /> */}
      <directionalLight
        intensity={0.5}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
      />
      <Physics>
        <MyBox />
        <MyPlane />
      </Physics>
    </Canvas>
  )
}

export default App
