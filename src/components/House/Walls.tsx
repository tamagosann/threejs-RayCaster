import { folder, useControls } from "leva"

export const Walls = () => {
  const position = useControls("Walls Position", {
    wallsPosition: folder({
      x: 0,
      y: 1.5,
      z: 0,
    }),
  })
  const scale = useControls("Walls Scale", {
    wallsScale: folder({
      x: 5,
      y: 3,
      z: 5,
    }),
  })

  return (
    <mesh
      castShadow
      receiveShadow
      position={[position.x, position.y, position.z]}
    >
      <boxGeometry args={[scale.x, scale.y, scale.z]} />
      <meshStandardMaterial />
    </mesh>
  )
}
