import { Physics, useSphere } from "@react-three/cannon"
import { useControls } from "leva"
import { Plane } from "./Plane"
import * as THREE from "three"
import { Balls } from "./Balls"

export const Scene = () => {
  return (
    <>
      <Plane size={[200, 200]} />
      <Balls />
    </>
  )
}
