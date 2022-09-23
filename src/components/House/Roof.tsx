import { folder, useControls } from "leva"

export const Roof = (props: any) => {
  const position = useControls("Roof Position", {
    roofPosition: folder({
      x: 0,
      y: 4,
      z: 0,
    }),
  })
  const scale = useControls("Roof Scale", {
    roofScale: folder({
      x: 4.5,
      y: 2,
      z: 4,
    }),
  })

  return (
    <>
      <mesh
        castShadow
        {...props}
        position={[position.x, position.y, position.z]}
        rotation-y={Math.PI / 4}
      >
        <coneGeometry args={[scale.x, scale.y, scale.z]} />
        <meshStandardMaterial color="#b35f45" />
      </mesh>
    </>
  )
}
