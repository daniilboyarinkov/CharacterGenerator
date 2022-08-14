import { useContext, memo, useState } from "react"
import {
  useSpring,
  useTransition,
  useChain,
  useSpringRef,
  animated,
  config,
} from "react-spring"

import LangTogglePopup from "./UI/LangTogglePopup"
import ThemeToggleButton from "./UI/ThemeToggleButton"

import LangContext from "../contexts/LangContext"
import ThemeContext from "../contexts/ThemeContext"
import useDevice from "../hooks/useDevice"

import "../css/ExtraLayout.css"

function ExtraLayout() {
  const { theme, setTheme } = useContext(ThemeContext)
  const { lang, setLang } = useContext(LangContext)
  const [langsOpen, setLangsOpen] = useState(false)
  const { isMobile } = useDevice()

  const wholeRef = useSpringRef()
  const animationStyles = useSpring({
    ref: wholeRef,
    config: { ...config.stiff, duration: 200 },
    to: {
      width: !isMobile && (langsOpen ? 280 : 125),
      height: isMobile && (langsOpen ? 280 : 120),
    },
  })
  const langsRef = useSpringRef()
  const langsTransition = useTransition(langsOpen, {
    config: { ...config.stiff, duration: 600 },
    ref: langsRef,
    from: {
      width: !isMobile && 0,
      height: isMobile && 0,
    },
    enter: {
      width: !isMobile && 200,
      height: isMobile && 200,
    },
    leave: {
      width: !isMobile && 0,
      height: isMobile && 0,
    },
  })

  useChain(langsOpen ? [wholeRef, langsRef] : [langsRef, wholeRef], [0, 0.2])

  return (
    <animated.div
      style={animationStyles}
      className={`ExtraLayout ExtraLayout-${isMobile ? "mobile" : "desktop"}`}
    >
      <LangTogglePopup
        lang={lang}
        setLang={setLang}
        setOpen={setLangsOpen}
        langsTransition={langsTransition}
        orientation={isMobile ? "vertical" : "horizontal"}
      />
      <ThemeToggleButton theme={theme} setTheme={setTheme} />
    </animated.div>
  )
}

export default memo(ExtraLayout)
