import { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stage, useHelper } from "@react-three/drei"
import { Scene } from "./components/Physics/Scene"
import { Physics } from "@react-three/cannon"
import { useControls } from "leva"
import { MainLight } from "./components/Physics/MainLight"

function App() {
  const { gravity } = useControls({
    gravity: { value: [0, -9.81, 0], step: 0.2 },
  })

  return (
    <Canvas shadows camera={{ position: [0, 10, 40] }}>
      <OrbitControls />
      <ambientLight />
      <MainLight />
      <Physics
        allowSleep
        broadphase="SAP"
        gravity={gravity}
        defaultContactMaterial={{ friction: 0.1, restitution: 0.7 }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Physics>
    </Canvas>
  )
}

export default App
