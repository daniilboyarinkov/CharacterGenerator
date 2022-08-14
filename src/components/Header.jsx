import { useContext, memo } from "react"
import { useTransition, animated } from "react-spring"

import ExtraLayout from "./ExtraLayout"

import LangElFactory from "../config/LangElFactory"
import LangContext from "../contexts/LangContext"

import useDevice from "../hooks/useDevice"

import "../css/Header.css"

function Header() {
  const { lang } = useContext(LangContext)
  const { isMobile } = useDevice()

  const transitions = useTransition(true, {
    from: { y: -110, x: -110 },
    enter: { y: 0, x: 0 },
    leave: { y: -110, x: -110 },
  })

  return transitions((styles) => (
    <div>
      <div className="Header">
        <animated.img
          style={styles}
          draggable={false}
          width={isMobile ? 50 : 75}
          src="/CharacterGenerator/svg/icon.svg"
          alt=""
        />
        <animated.h1 style={styles}>
          {LangElFactory(lang, "HelloText")}
        </animated.h1>
        <ExtraLayout />
      </div>
      <animated.hr style={styles} className="HeaderHr" />
    </div>
  ))
}

export default memo(Header)
