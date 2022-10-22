import { useAnimations, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import React, { useEffect, useRef } from "react"
import * as THREE from "three"
import modelPath from "./ball.glb"
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"

const Barn = (props) => {
  const { nodes, materials } = useGLTF(
    "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/barn/model.gltf"
  ) as {}

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Barn_001.geometry} material={materials.None} />
    </group>
  )
}

const Skunk = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/skunk/model.gltf"
  )
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions?.Idle.play()
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Bone} position={[1, 0, 0]} />
      <skinnedMesh
        geometry={nodes.Cube003.geometry}
        material={materials["1"]}
        skeleton={nodes.Cube003.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Cube003_1.geometry}
        material={materials["2"]}
        skeleton={nodes.Cube003_1.skeleton}
      />
    </group>
  )
}

const Wolf = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/korrigan-wolf/model.gltf"
  )
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions?.course_cavalier.play()
    actions?.course_loup.play()
  }, [actions])

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime()
    const radius = 12
    group.current.position.x = Math.sin(elapsedTime / 2.5) * radius
    group.current.position.z = Math.cos(elapsedTime / 2.5) * radius
    group.current.rotation.y += 0.01
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[0, 0.48, 0]} scale={0.15}>
        <primitive object={nodes.root} />
        <skinnedMesh
          geometry={nodes.Cavalier.geometry}
          material={materials["color_main.015"]}
          skeleton={nodes.Cavalier.skeleton}
        />
      </group>
      <group scale={0.61}>
        <primitive object={nodes.spine004} />
        <skinnedMesh
          geometry={nodes.Loup.geometry}
          material={materials["color_main.002"]}
          skeleton={nodes.Loup.skeleton}
        />
      </group>
    </group>
  )
}

export const Models = () => {
  return (
    <group>
      <Skunk position={[3.5, 0, 1]} scale={0.1} rotation-y={-Math.PI * 0.25} />
      <Barn />
      <Wolf position={[5, -0.2, 0]} rotation-y={Math.PI * 0.25} />
    </group>
  )
}
