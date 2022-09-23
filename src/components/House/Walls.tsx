import { useTexture } from "@react-three/drei"
import { folder, useControls } from "leva"

export const Walls = () => {
  const textureProps = useTexture({
    map: "textures/walls/color.jpg",
    normalMap: "textures/walls/normal.jpg",
    roughnessMap: "textures/walls/roughness.jpg",
    aoMap: "textures/walls/ambientOcclusion.jpg",
  })

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
      <meshStandardMaterial {...textureProps} />
    </mesh>
  )
}
