import { OrbitControls, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useControls } from "leva"
import { Suspense } from "react"
import { MainLight } from "../Physics/MainLight"
import { Loader } from "./Loader/Loader"

export const App = () => {
  return (
    <Canvas shadows camera={{ position: [0, 10, 40] }}>
      <Loader />
      <OrbitControls />
      <ambientLight />
      <MainLight />
      <Suspense fallback={null}>
        <Stage environment={null} intensity={1}>
          <Models />
        </Stage>
      </Suspense>
    </Canvas>
  )
}
