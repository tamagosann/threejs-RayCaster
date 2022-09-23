import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Floor } from "./components/Floor"
import { Lights } from "./components/Lights"

function App() {
  return (
    <div>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 5, 15] }}
        style={{ width: "100vw", height: "100vh" }}
      >
        <Lights />
        <Suspense fallback={null}>
          <Floor />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
