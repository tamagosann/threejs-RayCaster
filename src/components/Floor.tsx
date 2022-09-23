import React, { useLayoutEffect } from "react"
import { useTexture } from "@react-three/drei"
import * as THREE from "three"

export const Floor = () => {
  const textureProps = useTexture({
    map: "textures/floor/color.jpg",
    normalMap: "textures/floor/normal.jpg",
    roughnessMap: "textures/floor/roughness.jpg",
    aoMap: "textures/floor/ambientOcclusion.jpg",
    displacementMap: "textures/floor/height.png",
  })
  useLayoutEffect(() => {
    Object.values(textureProps).forEach((texture) => {
      texture.wrapS = THREE.RepeatWrapping
      texture.wrapT = THREE.RepeatWrapping
      texture.repeat.set(60, 60)
    })
  }, [textureProps])
  return (
    <mesh receiveShadow rotation-x={-Math.PI / 2}>
      <planeGeometry args={[200, 200]} />
      <meshStandardMaterial displacementScale={0.1} {...textureProps} />
    </mesh>
  )
}
