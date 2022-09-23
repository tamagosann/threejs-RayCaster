import React from "react"
import { useControls } from "leva"

export const Fog = () => {
  const { color, near, far } = useControls("fog", {
    color: "#1b153e",
    near: { min: 1, value: 1 },
    far: { min: 10, value: 20 },
  })
  return (
    <>
      {/* fogとcolorを同じ色に設定する事で、遠かった時にシームレスにfogを見せる事ができる */}
      <fog attach="fog" args={[color, near, far]} />
      <color attach="background" args={[color]} />
    </>
  )
}
