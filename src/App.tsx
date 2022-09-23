import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Floor } from "./components/Floor"
import { Lights } from "./components/Lights"
import { House } from "./components/House/House"
import { OrbitControls } from "@react-three/drei"
import { Graves } from "./components/Graves"
import { Fog } from "./components/Fog"
import { Ghosts } from "./components/Ghosts"

function App() {
  return (
    <div>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 5, 15] }}
        style={{ width: "100vw", height: "100vh" }}
      >
        <OrbitControls />
        <Lights />
        <Fog />
        <Suspense fallback={null}>
          <Ghosts />
          <Floor />
          <House />
          <Graves />
        </Suspense>
        <axesHelper args={[10]} />
      </Canvas>
    </div>
  )
}

export default App
