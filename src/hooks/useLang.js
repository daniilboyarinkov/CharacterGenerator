import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { set } from "../app/language/languageSlice"

export default function useLang() {
  const lang = useSelector((state) => state.lang)
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.setItem("lang", lang)
  }, [lang])

  return [
    lang,
    (l) => {
      dispatch(set(l))
    },
  ]
}
