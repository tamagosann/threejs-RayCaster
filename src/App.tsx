import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Galaxy } from "./components/Galaxy/Galaxy"
import { OrbitControls } from "@react-three/drei"

function App() {
  return (
    <div>
      <Canvas dpr={[1, 2]} style={{ width: "100vw", height: "100vh" }}>
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <color attach="background" args={["black"]} />
          <Galaxy />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
