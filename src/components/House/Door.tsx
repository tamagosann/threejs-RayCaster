import { folder, useControls } from "leva"
import * as THREE from "three"
export const Door = (props: any) => {
  const position = useControls("Door Position", {
    roofPosition: folder({
      x: 0,
      y: 1.1,
      z: 2.51,
    }),
  })
  return (
    <>
      <mesh
        receiveShadow
        position={[position.x, position.y, position.z]}
        {...props}
      >
        <planeGeometry args={[2.2, 2.2, 1, 1]} />
        <meshStandardMaterial side={THREE.DoubleSide} color="skyblue" />
      </mesh>
    </>
  )
}
