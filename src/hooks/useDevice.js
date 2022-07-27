import { useState, useEffect } from "react"

import useWindowDimensions from "./useWindowDimensions"

export default function useDevice() {
  const { width } = useWindowDimensions()
  const [device, setDevice] = useState("pc")

  useEffect(() => {
    if (width < 720) setDevice("mobile")
    else setDevice("pc")
  }, [width])

  return device
}
