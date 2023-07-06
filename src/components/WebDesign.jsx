import { OrbitControls,Stage } from '@react-three/drei'
import React from 'react'
import Basket_swing_chair from './Basket_swing_chair'
import { Canvas } from '@react-three/fiber'

const WebDesign = () => {
  return (
    <Canvas>
        <Stage environment="city" intensity={0.6}>
        <Basket_swing_chair/>
        </Stage>
     <OrbitControls enableZoom={false} autoRotate/>   
    </Canvas>
  )
}

export default WebDesign