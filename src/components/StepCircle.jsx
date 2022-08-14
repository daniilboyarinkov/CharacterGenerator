import { useContext } from "react"

import StepContext from "../contexts/StepContext"

import "../css/StepCircle.css"

function StepCircle() {
  const { current, all } = useContext(StepContext)
  return <div className="StepCircle">{`${current}/${all}`}</div>
}

export default StepCircle
