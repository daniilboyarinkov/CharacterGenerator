import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { set } from "../app/theme/themeSlice"

export default function useTheme() {
  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()

  useEffect(() => {
    document.firstElementChild.setAttribute("color-scheme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  return [
    theme,
    (t) => {
      const next = t === "dark" ? "light" : "dark"
      dispatch(set(next))
    },
  ]
}
