import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"

function App() {
  return (
    <div>
      <Canvas dpr={[1, 2]}>
        <Suspense fallback={null}></Suspense>
      </Canvas>
    </div>
  )
}

export default App
