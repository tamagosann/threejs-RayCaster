import { Point, Points } from "@react-three/drei"
import { useControls } from "leva"
import { FC } from "react"
import * as THREE from "three"
import colors from "nice-color-palettes"

const palette = colors[Math.floor(Math.random() * colors.length)]

const controls = {
  count: { value: 10000, min: 100, max: 50000, step: 100 },
  size: { value: 0.01, min: 0.01, max: 0.1 },
  radius: { value: 5, min: 2, max: 20, step: 1 },
  branches: { value: 3, min: 1, max: 20, step: 1 },
  spin: { value: 1, min: -5, max: 5, step: 1 },
  random: { value: 0.2, min: 0, max: 3, step: 0.01 },
  randomPower: { value: 3, min: 1, max: 10, step: 0.01 },
  insideColor: palette[0],
  outsideColor: palette[1 + Math.floor(Math.random() * (palette.length - 2))],
}

export const Galaxy = () => {
  const {
    count,
    size,
    radius,
    branches,
    spin,
    random,
    randomPower,
    insideColor,
    outsideColor,
  } = useControls(controls)
  return (
    <Points limit={10000}>
      <pointsMaterial
        size={size}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
        vertexColors
      />
      {Array.from({ length: count }).map((_, i) => {
        const radiuss = Math.random() * radius
        const randomNessX =
          Math.pow(Math.random(), randomPower) * (Math.random() < 0.5 ? 1 : -1)
        const randomNessY =
          Math.pow(Math.random(), randomPower) * (Math.random() < 0.5 ? 1 : -1)
        const randomNessZ =
          Math.pow(Math.random(), randomPower) * (Math.random() < 0.5 ? 1 : -1)
        const branchAngle = ((i % branches) / branches) * Math.PI * 2
        const spinAngle = radiuss * spin
        const x = Math.cos(branchAngle + spinAngle) * radiuss + randomNessX
        const y = randomNessY
        const z = Math.sin(branchAngle + spinAngle) * radiuss + randomNessZ
        const color = new THREE.Color(insideColor).lerp(
          new THREE.Color(outsideColor),
          radiuss / radius
        )
        return (
          <>
            {/* @ts-ignore */}
            <Point position={[x, y, z]} color={color} />
          </>
        )
      })}
    </Points>
  )
}
