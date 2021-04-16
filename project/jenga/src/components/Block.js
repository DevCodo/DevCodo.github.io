import React, { useState } from 'react'
import { useLoader, useThree } from '@react-three/fiber'
import { Box } from '@react-three/drei'
import { useBox } from '@react-three/cannon'
import * as THREE from 'three'

const Block = ({ args, position, rotation }) => {
  const [isChoseBlock, setIsChoseBlock] = useState(false)
  const [ref, api] = useBox(() => ({ mass: 1, position, args, rotation }))
  const [texture] = useLoader(THREE.TextureLoader, ['/images/plywood.jpg'])

  const handlePointerMove = evt => {
    if (isChoseBlock) {
      api.position.set(evt.point.x, position[1], evt.point.z)
    }
  }

  const handlePointerDown = evt => {
    if (evt.intersections[0].eventObject.uuid === ref.current.uuid) {
      setIsChoseBlock(true)
    }
  }

  const handlePointerUp = evt => {
    setIsChoseBlock(false)
  }

  return (
    <Box
      key={13}
      ref={ref}
      args={args}
      position={position}
      rotation={rotation}
      castShadow
      receiveShadow
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerUp}
      // onClick={() => api.velocity.set(-1, 2, 0)}
    >
      <meshStandardMaterial attach="material" map={texture} />
    </Box>
  )
}

export default Block
