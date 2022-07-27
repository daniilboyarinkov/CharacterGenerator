import { useEffect, useState } from "react"

export default function useKeyPress() {
  const [key, setKey] = useState("")

  const clearKey = () => setKey("")

  useEffect(() => {
    const onKeypress = (e) => setKey(e.key)

    document.addEventListener("keypress", onKeypress)

    return () => document.removeEventListener("keypress", onKeypress)
  }, [])

  return [key, clearKey]
}
