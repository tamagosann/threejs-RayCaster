import { useProgress } from "@react-three/drei"
import "./Loader.css"

export const Loader = () => {
  const { active, progress } = useProgress()

  return active ? (
    <div className="loader">
      <span>{Math.floor(progress)}%</span>
    </div>
  ) : (
    <></>
  )
}
