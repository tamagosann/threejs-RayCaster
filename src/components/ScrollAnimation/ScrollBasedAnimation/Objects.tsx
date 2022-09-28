import { useIntersect, useTexture } from "@react-three/drei"
import {
  MeshProps,
  ThreeElements,
  useFrame,
  useThree,
} from "@react-three/fiber"
import { useControls } from "leva"
import { ReactNode, useMemo, useRef } from "react"
import * as THREE from "three"

export const Item = (props: MeshProps & { children: ReactNode }) => {
  const { color } = useControls("toonClolor", {
    color: "#451616",
  })
  //useIntersectとuseRefを同時に使う事で、画面に入った時の制御ができる
  const isVisible = useRef(false)
  // useIntersectを使う事で、meshがvisibleかどうかを判断できる
  const ref = useIntersect<THREE.Mesh>((visible) => {
    isVisible.current = visible
  })
  const [xRandomFactor, yRandomFactor] = useMemo(
    () => [(0.5 - Math.random()) * 0.5, (0.5 - Math.random()) * 0.5],
    []
  )

  useFrame(({ clock }, delta) => {
    if (ref.current) {
      const elapsedTime = clock.getElapsedTime()
      ref.current.rotation.x = elapsedTime * xRandomFactor
      ref.current.rotation.y = elapsedTime * yRandomFactor
      // ここで、画面に入った時の制御をする（今回はmeshが大きくなる）
      const scale = THREE.MathUtils.damp(
        ref.current.scale.x,
        isVisible.current ? 1.5 : 0.2,
        5,
        delta
      )
      ref.current.scale.set(scale, scale, scale)
    }
  })
  return (
    <mesh ref={ref} position={props.position}>
      {props.children}
      <meshToonMaterial color={color} />
    </mesh>
  )
}

export const Objects = () => {
  const { height, width } = useThree((state) => state.viewport)

  return (
    <>
      <pointLight color="blue" position={[8, -25, 5]} intensity={20} />
      <pointLight
        color="red"
        position={[0, -height * 2.25, 5]}
        intensity={10}
      />
      <Item position={[0, 1, 0]}>
        <boxGeometry />
      </Item>
      <Item position={[width / 6, -height * 1, 0]}>
        <torusGeometry args={[1, 0.4, 16, 60]} />
      </Item>
      <Item position={[-width / 5, -height * 1.8, -2]}>
        <coneGeometry args={[1, 2, 32]} />
      </Item>
      <Item position={[width / 4, -height * 2, 0]}>
        <torusKnotGeometry args={[0.8, 0.35, 100, 16]} />
      </Item>
    </>
  )
}
