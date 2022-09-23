import { useControls, folder } from "leva"

export const Lights = () => {
  const [datas, set] = useControls(() => ({
    ambientLightIntensity: 0.12,
    directionalLightPosition: folder({
      x: 4,
      y: 5,
      z: -2,
    }),
  }))
  const { x, y, z } = datas
  return (
    <>
      <ambientLight intensity={datas.ambientLightIntensity} color="lightcyan" />
      <directionalLight
        color="lightcyan"
        castShadow
        intensity={0.12}
        position={[x, y, z]}
      />
    </>
  )
}
