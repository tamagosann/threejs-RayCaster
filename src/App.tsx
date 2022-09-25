import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Galaxy } from "./components/Galaxy/Galaxy"
import { OrbitControls } from "@react-three/drei"
import { RayCaster } from "./components/RayCaster/RayCaster"

function App() {
  return (
    <div>
      <Canvas dpr={[1, 2]} style={{ width: "100vw", height: "100vh" }}>
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <color attach="background" args={["black"]} />
          <RayCaster />
        </Suspense>
        <axesHelper args={[5]} />
      </Canvas>
    </div>
  )
}

export default App
