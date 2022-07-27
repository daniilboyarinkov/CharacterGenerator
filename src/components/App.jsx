import { useMemo } from "react"
import useLocalStorage from "use-local-storage"

import Carousel from "./Carousel"
import Header from "./Header"

import AllContexts from "../contexts/index"

import "../css/App.css"

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark")
  const [lang, setLang] = useLocalStorage("lang", "en")

  const ThemeContextValue = useMemo(
    () => ({ theme, setTheme }),
    [theme, setTheme]
  )

  const LangContextValue = useMemo(() => ({ lang, setLang }), [lang, setLang])

  return (
    <AllContexts
      ThemeContextValue={ThemeContextValue}
      LangContextValue={LangContextValue}
    >
      <div className="App" data-theme={theme}>
        <Header />
        <Carousel />
      </div>
    </AllContexts>
  )
}

export default App
