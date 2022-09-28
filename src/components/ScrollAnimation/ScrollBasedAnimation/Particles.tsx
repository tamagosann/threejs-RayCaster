import { Point, Points } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

const particleColors = [
  "#673ab7",
  "#f4b677",
  "orange",
  "blue",
  "#8bc34a",
  "purple",
]

export const Particles = ({ size = 5000 }: { size?: number }) => {
  // このwidthとheightは、three.jsの中の軸の単位で取れる（1~11とか）
  const { width, height } = useThree((state) => state.viewport)
  return (
    <Points limit={size}>
      <pointsMaterial size={0.05} vertexColors />
      {Array.from({ length: size }).map((_, i) => (
        <Point
          key={i}
          // @ts-ignore
          position={[
            (0.5 - Math.random()) * width * 2,
            // これで、下に行くほど濃くなる
            0.5 * height + Math.random() ** 0.25 * height * -3,
            (0.5 - Math.random()) * 25,
          ]}
          color={
            particleColors[
              Math.floor(Math.random() * (particleColors.length - 1))
            ]
          }
        />
      ))}
    </Points>
  )
}
