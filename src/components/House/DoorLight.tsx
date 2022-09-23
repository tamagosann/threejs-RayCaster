import { useHelper } from "@react-three/drei"
import { folder, useControls } from "leva"
import { useRef } from "react"
import * as THREE from "three"

export const DoorLight = () => {
  const { distance, intensity } = useControls("door light", {
    intensity: 1,
    distance: 7,
  })
  const position = useControls("DoorLight Position", {
    roofPosition: folder({
      x: 0,
      y: 2.7,
      z: 2.9,
    }),
  })
  const light = useRef(null)
  useHelper(light, THREE.PointLightHelper, distance)

  return (
    <>
      <pointLight
        ref={light}
        castShadow
        distance={distance}
        intensity={intensity}
        position={[position.x, position.y, position.z]}
      />
    </>
  )
}
