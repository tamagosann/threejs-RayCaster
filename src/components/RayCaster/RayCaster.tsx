import { ThreeElements, useFrame } from "@react-three/fiber"
import React, { MutableRefObject, Ref, RefObject, useMemo, useRef } from "react"
import * as THREE from "three"

// react-three-fiberやらthreeやらの型がバグりまくっているためts-ignoreで応急処理している
export const RayCaster = () => {
  const box1Ref = useRef<THREE.Mesh>(null)
  const box2Ref = useRef<THREE.Mesh>(null)
  const box3Ref = useRef<THREE.Mesh>(null)
  const refs = [box1Ref, box2Ref, box3Ref]

  const randomFactor = useMemo(() => {
    return [0, 1, 2].map((_) => {
      return 0.5 + Math.random() * 3
    })
  }, [])
  useFrame((state) => {
    refs.forEach((ref, num) => {
      if (!ref.current) return
      ref.current.position.y =
        Math.sin(state.clock.getElapsedTime() * randomFactor[num]) * 1.5
    })
  })

  const raycaster = useMemo(
    () =>
      new THREE.Raycaster(
        new THREE.Vector3(-3, 0, 0),
        new THREE.Vector3(1, 0, 0)
      ),
    []
  )
  useFrame(() => {
    if (!box1Ref.current || !box2Ref.current || !box3Ref.current) return
    const intersections = raycaster.intersectObjects([
      box1Ref.current,
      box2Ref.current,
      box3Ref.current,
    ])
    intersections.forEach((intersect) => {
      console.log(intersect.object)
      ;[box1Ref.current, box2Ref.current, box3Ref.current].forEach(
        (current) => {
          if (!current) return
          // @ts-ignore
          current.material.color = {
            r: 1,
            g: 0,
            b: 0,
          }
        }
      )
      // @ts-ignore
      intersect.object.material!.color = {
        r: 0,
        g: 1,
        b: 2,
      }
    })
  })
  return (
    <>
      <mesh position={[-2, 2, 0]} ref={box1Ref}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshBasicMaterial color={"red"} />
      </mesh>
      <mesh position={[0, 0, 0]} ref={box2Ref}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshBasicMaterial color={"red"} />
      </mesh>
      <mesh position={[2, 2, 0]} ref={box3Ref}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshBasicMaterial color={"red"} />
      </mesh>
    </>
  )
}
