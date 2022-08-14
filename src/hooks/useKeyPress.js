import { useEffect, useState } from "react"

export default function useKeyPress() {
  const [key, setKey] = useState("")

  const clearKey = () => setKey("")
  const onKeypress = (e) => setKey(e.key)

  useEffect(() => {
    document.addEventListener("keypress", onKeypress)

    return () => document.removeEventListener("keypress", onKeypress)
  }, [])

  return [key, clearKey]
}
