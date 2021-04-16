import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Physics, useBox, usePlane } from '@react-three/cannon'
import { MOUSE } from 'three'

const Box = () => {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }))
  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      position={[0, 2, 0]}
      onClick={() => api.velocity.set(1, 2, 1)}
    >
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  )
}

const Plane = () => {
  const [ref] = usePlane(() => ({ rotation: [Math.PI * 1.5, 0, 0] }))
  return (
    <mesh receiveShadow ref={ref} position={[0, 0, 0]} rotation={[Math.PI * 1.5, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="green" />
    </mesh>
  )
}

const App = () => {
  return (
    <Canvas
      concurrent
      shadowMap
      sRGB
      gl={{ alpha: false }}
      camera={{ position: [-1, 2, 4], fov: 100 }}
    >
      <Stars />
      <OrbitControls
        mouseButtons={{
          RIGHT: MOUSE.ROTATE,
        }}
      />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.9} />
      <Physics>
        <Box />
        <Plane />
      </Physics>
    </Canvas>
  )
}

export default App
