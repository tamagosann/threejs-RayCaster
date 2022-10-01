import { useSphere } from "@react-three/cannon"
import { useFrame } from "@react-three/fiber"
import { button, useControls } from "leva"
import palettes from "nice-color-palettes"
import React, { useMemo, useState } from "react"

const palette = palettes[Math.floor(Math.random() * (palettes.length - 1))]

const generateRandomBall = (): {
  position: [number, number, number]
  color: string
  radius: number
} => {
  return {
    position: [
      (0.5 - Math.random()) * 50,
      20 + (0.5 - Math.random()) * 50,
      (0.5 - Math.random()) * 50,
    ],
    color: palette[Math.floor(Math.random() * (palette.length - 1))],
    radius: Math.random() * 5,
  }
}

const Ball = ({
  position = [0, 1, 0],
  color,
  radius,
}: {
  position: [number, number, number]
  color: string
  radius: number
}) => {
  const [ref] = useSphere<THREE.Mesh>(() => ({
    mass: 1,
    args: [radius],
    position,
    friction: 0.1,
  }))
  return (
    <mesh ref={ref} castShadow>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export const Balls = () => {
  const [balls, setBalls] = useState(() =>
    Array.from({ length: 3 }).map(generateRandomBall)
  )
  const addRandomBall = () =>
    setBalls((currBalls) => [...currBalls, generateRandomBall()])
  const { flood } = useControls({
    addBall: button(addRandomBall),
    flood: false,
  })
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    const randomNum = Math.random() * 60
    if (randomNum > 55) addRandomBall()
    if (flood && Math.floor(elapsedTime * 10) % 2 === 0) addRandomBall()
  })
  return (
    <>
      {balls.map((ballInfo, i) => (
        <Ball key={i} {...ballInfo} />
      ))}
    </>
  )
}
