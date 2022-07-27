import { useContext, memo, useState, useMemo } from "react"
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
import useWindowDimensions from "../hooks/useWindowDimensions"

import "../css/ExtraLayout.css"

function ExtraLayout() {
  const { theme, setTheme } = useContext(ThemeContext)
  const { lang, setLang } = useContext(LangContext)
  const [langsOpen, setLangsOpen] = useState(false)
  const { width } = useWindowDimensions()

  const device = useMemo(() => (width < 720 ? "mobile" : "desktop"), [width])
  const orientation = useMemo(
    () => (width < 720 ? "vertical" : "horizontal"),
    [width]
  )

  const wholeRef = useSpringRef()
  const animationStyles = useSpring({
    ref: wholeRef,
    config: { ...config.stiff, duration: 200 },
    to: {
      width:
        // eslint-disable-next-line no-nested-ternary
        orientation === "horizontal" && (langsOpen ? 280 : 125),
      height:
        // eslint-disable-next-line no-nested-ternary
        orientation === "vertical" && (langsOpen ? 280 : 120),
    },
  })
  const langsRef = useSpringRef()
  const langsTransition = useTransition(langsOpen, {
    config: { ...config.stiff, duration: 600 },
    ref: langsRef,
    from: {
      width: orientation === "horizontal" && 0,
      height: orientation === "vertical" && 0,
    },
    enter: {
      width: orientation === "horizontal" && 200,
      height: orientation === "vertical" && 200,
    },
    leave: {
      width: orientation === "horizontal" && 0,
      height: orientation === "vertical" && 0,
    },
  })

  useChain(langsOpen ? [wholeRef, langsRef] : [langsRef, wholeRef], [0, 0.2])

  return (
    <animated.div
      style={animationStyles}
      className={`ExtraLayout ExtraLayout-${device}`}
    >
      <LangTogglePopup
        lang={lang}
        setLang={setLang}
        setOpen={setLangsOpen}
        langsTransition={langsTransition}
        orientation={orientation}
      />
      <ThemeToggleButton theme={theme} setTheme={setTheme} />
    </animated.div>
  )
}

export default memo(ExtraLayout)
