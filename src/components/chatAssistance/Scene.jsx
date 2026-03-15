// Scene.jsx
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
// import { SpiderMan } from './SpiderMan' // TEMPORARILY DISABLED

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      {/* <SpiderMan /> */}{/* TEMPORARILY DISABLED */}
      <Environment preset="city" />
    </Canvas>
  )
}