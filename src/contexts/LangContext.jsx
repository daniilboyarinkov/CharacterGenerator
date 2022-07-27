import { createContext } from "react"

const LangContext = createContext({ lang: "en", setLang: () => {} })

export default LangContext
