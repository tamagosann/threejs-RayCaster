import { Scroll, ScrollControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { Html } from "../Html"

export const ScrollBasedAnimation = () => {
  const { height, width } = useThree((state) => state.viewport)
  return (
    <ScrollControls pages={3} distance={0.2}>
      <Scroll>
        <ambientLight />
        <pointLight color="blue" position={[8, -25, 5]} intensity={20} />
        <pointLight
          color="red"
          position={[0, -height * 2.25, 5]}
          intensity={10}
        />
        <mesh>
          <boxGeometry />
          <meshPhysicalMaterial transparent color="blue" />
        </mesh>
      </Scroll>
      {/* <Scroll html>
        <Html />
      </Scroll> */}
    </ScrollControls>
  )
}
