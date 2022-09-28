import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { ScrollBasedAnimation } from "./components/ScrollAnimation/ScrollBasedAnimation/ScrollBasedAnimationtn"

function App() {
  return (
    <Canvas>
      <color attach="background" args={["black"]} />
      <ambientLight />
      <directionalLight color="red" intensity={10} />
      <Suspense fallback={null}>
        <ScrollBasedAnimation />
      </Suspense>
      <axesHelper args={[5]} />
    </Canvas>
  )
}

export default App
