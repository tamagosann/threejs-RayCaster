import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { Html } from "../Html"
import { Objects } from "./Objects"
import * as THREE from "three"
import { Particles } from "./Particles"

export const ScrollBasedAnimation = () => {
  // これで、マウスをホバーした時にオブジェクトがぬるぬる動くようになる
  useFrame(({ mouse, camera }) => {
    // console.log(mouse)
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      mouse.x * 0.5,
      0.03
    )
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      mouse.y * 0.8,
      0.01
    )
    // この下二つは正直よくわからない
    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      Math.max(4, Math.abs(mouse.x * mouse.y * 8)),
      0.01
    )
    camera.rotation.y = THREE.MathUtils.lerp(
      camera.rotation.y,
      mouse.x * -Math.PI * 0.025,
      0.001
    )
  })

  return (
    <>
      <ScrollControls pages={3}>
        <Scroll>
          <Objects />
          <Particles />
        </Scroll>
        <Scroll html>
          <Html />
        </Scroll>
      </ScrollControls>
    </>
  )
}
