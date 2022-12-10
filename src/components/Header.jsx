import { memo } from "react"
import { animated } from "react-spring"

import ExtraLayout from "./ExtraLayout"

import HeaderSlideInAnimation from "../animations/HeaderSlideIn.animation"
import LangElFactory from "../config/LangElFactory"

import useDevice from "../hooks/useDevice"

import "../css/Header.css"
import useLang from "../hooks/useLang"

function Header() {
  const [lang] = useLang()
  const { isMobile } = useDevice()

  return HeaderSlideInAnimation()((styles) => (
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
      <animated.hr
        style={{
          ...styles,
          borderBottomColor: "var(--text2)",
        }}
        className="HeaderHr"
      />
    </div>
  ))
}

export default memo(Header)
