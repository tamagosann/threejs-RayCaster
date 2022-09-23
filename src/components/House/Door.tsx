import { useTexture } from "@react-three/drei"
import { folder, useControls } from "leva"
export const Door = (props: any) => {
  const textureProps = useTexture({
    map: "textures/door/color.jpg",
    alphaMap: "textures/door/opacity.jpg",
    normalMap: "textures/door/normal.jpg",
    metalnessMap: "textures/door/metallic.jpg",
    roughnessMap: "textures/door/roughness.jpg",
    displacementMap: "textures/door/height.png",
    aoMap: "textures/door/ambientOcclusion.jpg",
  })

  const position = useControls("Door Position", {
    roofPosition: folder({
      x: 0,
      y: 1,
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
        {/* <ambientLight /> */}
        <planeGeometry args={[2.2, 2.2, 100, 100]} />
        <meshStandardMaterial
          transparent
          displacementScale={0.15}
          {...textureProps}
        />
      </mesh>
    </>
  )
}
