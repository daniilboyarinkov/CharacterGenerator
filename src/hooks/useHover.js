import { useEffect, useState } from "react"

function useHover(ref) {
  const [isHovering, setHovering] = useState(false)

  const on = () => setHovering(true)
  const off = () => setHovering(false)

  useEffect(() => {
    if (!ref.current) return undefined
    const node = ref.current

    node.addEventListener("mouseenter", on)
    node.addEventListener("mousemove", on)
    node.addEventListener("mouseleave", off)
    node.addEventListener("mouseout", off)

    return () => {
      node.removeEventListener("mouseenter", on)
      node.removeEventListener("mousemove", on)
      node.removeEventListener("mouseleave", off)
      node.removeEventListener("mouseout", off)
    }
  }, [ref])

  return isHovering
}

export default useHover
