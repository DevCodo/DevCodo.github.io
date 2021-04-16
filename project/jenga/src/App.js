import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import Tower from './components/Tower'
import Table from './components/Table'
import * as THREE from 'three'

const App = () => {
  return (
    <Canvas
      shadows={{
        type: THREE.PCFSoftShadowMap,
      }}
      colorManagement
      gl={{ alpha: false }}
      camera={{ position: [5, 15, 30], fov: 75 }}
    >
      <React.Suspense fallback={null}>
        <Environment
          files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']}
          path={'/images/environmentMaps/4/'}
          background={true}
        />
      </React.Suspense>

      <OrbitControls
        mouseButtons={{
          RIGHT: THREE.MOUSE.ROTATE,
        }}
      />
      <ambientLight intensity={0.2} />
      <directionalLight
        intensity={0.5}
        position={[5, 5, 5]}
        castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
      />
      <directionalLight
        intensity={0.7}
        position={[-10, 5, 7]}
        castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
      />
      <Physics defaultContactMaterial={{ friction: 0.1, restitution: 0.4 }}>
        <Tower />
        <Table />
      </Physics>
    </Canvas>
  )
}

export default App
