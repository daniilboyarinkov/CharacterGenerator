import { useSelector } from "react-redux"

import "../css/StepCircle.css"

function StepCircle() {
  const { current, all } = useSelector((state) => state.step)
  return <div className="StepCircle">{`${current}/${all}`}</div>
}

export default StepCircle
