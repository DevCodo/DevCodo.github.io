import React from 'react'
import { useLoader } from '@react-three/fiber'
import { Plane } from '@react-three/drei'
import { usePlane } from '@react-three/cannon'
import * as THREE from 'three'
// import { BasisTextureLoader } from 'three/examples/jsm/loaders/BasisTextureLoader'

const Table = () => {
  const [ref] = usePlane(() => ({
    rotation: [Math.PI * 1.5, 0, 0],
    position: [0, 0.1, 0],
  }))
  const [texture] = useLoader(THREE.TextureLoader, ['/images/wood.jpg'])
  console.log(texture)
  return (
    <Plane
      receiveShadow
      ref={ref}
      // position={[20, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      args={[50, 50]}
    >
      <meshStandardMaterial attach="material" map={texture} back />
    </Plane>
  )
}

export default Table
