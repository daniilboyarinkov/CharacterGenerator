import { object, string } from "prop-types"
import { useContext, useRef } from "react"
import { animated } from "react-spring"

import Prompt from "./Prompt"

import LangRFFactory from "../config/LangRFFactory"
import LangContext from "../contexts/LangContext"
import ColorToHex from "../converters/ColoursToHex.json"
import capitalize from "../helpers/StringCapitalize"

import useHover from "../hooks/useHover"

function ColorCircle({ color, styles, promptStyles, wrapPosition }) {
  const circleRef = useRef()
  const isHovering = useHover(circleRef)
  const { lang } = useContext(LangContext)

  return (
    <div
      style={{
        position: wrapPosition,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Prompt
        text={capitalize(LangRFFactory(lang, "color", color))}
        show={isHovering}
        styles={promptStyles}
      />
      <animated.div
        ref={circleRef}
        style={{
          background: ColorToHex[color],
          width: 100,
          height: 100,
          borderRadius: "50%",
          ...styles,
        }}
        className="color-circle"
      />
    </div>
  )
}

ColorCircle.propTypes = {
  color: string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  styles: object,
  // eslint-disable-next-line react/forbid-prop-types
  promptStyles: object,
  wrapPosition: string,
}

ColorCircle.defaultProps = {
  styles: Object.prototype,
  promptStyles: Object.prototype,
  wrapPosition: "absolute",
}

export default ColorCircle
