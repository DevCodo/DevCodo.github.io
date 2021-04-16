import React, { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'
import Block from './Block'

const Tower = () => {
  const blocks = [],
    block_length = 6,
    block_height = 1,
    block_width = 1.5,
    offset = 2,
    rows = 16

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < 3; j++) {
      const position = [0, 0, 0]
      const rotation = [0, 0, 0]
      position[1] = block_height / 2 + block_height * i
      if (i % 2 === 0) {
        rotation[1] = Math.PI / 2
        position[0] = offset * j - ((offset * 3) / 2 - offset / 2)
      } else {
        position[2] = offset * j - ((offset * 3) / 2 - offset / 2)
      }
      blocks.push(
        <Block
          key={`${i}${j}`}
          args={[block_length, block_height, block_width]}
          position={position}
          rotation={rotation}
        />
      )
    }
  }

  const { scene, camera } = useThree()
  const _vector = new THREE.Vector3()
  const mouse_position = new THREE.Vector3()
  const block_offset = new THREE.Vector3()
  const intersect_plane = scene.children.find(child => child.geometry?.type === 'PlaneGeometry')
  let selected_block = null
  const handleMouseDown = evt => {
    _vector.set(
      (evt.clientX / window.innerWidth) * 2 - 1,
      -(evt.clientY / window.innerHeight) * 2 + 1,
      1
    )

    _vector.unproject(camera)

    const ray = new THREE.Raycaster(camera.position, _vector.sub(camera.position).normalize())
    const intersections = ray.intersectObjects(
      scene.children.filter(child => child.geometry?.type === 'BoxGeometry')
    )

    if (intersections.length > 0) {
      selected_block = intersections[0].object

      _vector.set(0, 0, 0)
      // selected_block.setAngularFactor(_vector)
      // selected_block.setAngularVelocity(_vector)
      // selected_block.setLinearFactor(_vector)
      // selected_block.setLinearVelocity(_vector)

      mouse_position.copy(intersections[0].point)
      block_offset.subVectors(selected_block.position, mouse_position)

      intersect_plane.position.y = mouse_position.y
    }
  }

  const handleMouseMove = evt => {
    // if (selected_block !== null) {
    _vector.set(
      (evt.clientX / window.innerWidth) * 2 - 1,
      -(evt.clientY / window.innerHeight) * 2 + 1,
      1
    )
    _vector.unproject(camera)
    const ray = new THREE.Raycaster(camera.position, _vector.sub(camera.position).normalize())
    const intersection = ray.intersectObject(intersect_plane)
    mouse_position.copy(intersection[0].point)
    // console.log(mouse_position)
    // }
  }

  const handleMouseUp = evt => {
    if (selected_block !== null) {
      _vector.set(1, 1, 1)
      // selected_block.setAngularFactor(_vector)
      // selected_block.setLinearFactor(_vector)
      selected_block = null
    }
  }

  useEffect(() => {
    if (intersect_plane) {
      // document.body.addEventListener('pointermove', handleMouseMove)
      // document.body.addEventListener('pointerdown', handleMouseDown)
      // document.body.addEventListener('pointerup', handleMouseUp)
    }
  }, [intersect_plane])

  return <>{blocks.map(block => block)}</>
}

export default Tower
