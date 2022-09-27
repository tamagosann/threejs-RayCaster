import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { ScrollBasedAnimation } from "./components/ScrollAnimation/ScrollBasedAnimation/ScrollBasedAnimationtn"

function App() {
  return (
    <Canvas>
      <ambientLight />
      <Suspense fallback={null}>
        <ScrollBasedAnimation />
      </Suspense>
      <axesHelper args={[5]} />
    </Canvas>
  )
}

export default App
