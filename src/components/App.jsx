import { useMemo } from "react"
import useLocalStorage from "use-local-storage"

import Carousel from "./Carousel"
// import Footer from "./Footer"
import Header from "./Header"

import AllContexts from "../contexts/index"
import Character from "../models/Сharacter"

import "../css/App.css"

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark")
  const [lang, setLang] = useLocalStorage("lang", "en")

  const CharacterContextValue = useMemo(() => Character, [])

  const ThemeContextValue = useMemo(
    () => ({ theme, setTheme }),
    [theme, setTheme]
  )

  const LangContextValue = useMemo(() => ({ lang, setLang }), [lang, setLang])

  return (
    <AllContexts
      ThemeContextValue={ThemeContextValue}
      LangContextValue={LangContextValue}
      CharacterContextValue={CharacterContextValue}
    >
      <div className="App" data-theme={theme}>
        <Header />
        <Carousel />
        {/* <Footer /> */}
      </div>
    </AllContexts>
  )
}

export default App
