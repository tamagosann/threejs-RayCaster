import { useHelper } from "@react-three/drei"
import { useControls } from "leva"
import { useRef } from "react"
import * as THREE from "three"

export const MainLight = () => {
  const lightProps = useControls({
    color: "aqua",
    intensity: 2,
    position: [25, 25, 3],
    distance: 50,
    angle: Math.PI / 4,
    penumbra: 0.5,
    decay: 0.5,
  })
  const mainLightRef = useRef<THREE.SpotLight>(null)
  useHelper(mainLightRef, THREE.SpotLightHelper, "red")
  return <spotLight ref={mainLightRef} castShadow {...lightProps} />
}
