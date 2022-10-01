import { useBox, usePlane } from "@react-three/cannon"
import * as THREE from "three"

export const Plane = ({ size }: { size: [number, number] }) => {
  const [ref] = usePlane<THREE.Mesh>(() => ({
    args: [...size],
    rotation: [-Math.PI / 2, 0, 0],
  }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={size} />
      <meshStandardMaterial color="green" side={THREE.DoubleSide} />
    </mesh>
  )
}
