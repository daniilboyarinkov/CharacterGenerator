import { bool, object, string } from "prop-types"
import { animated } from "react-spring"

import FadeAnimation from "../animations/Fade.animation"

import "../css/Prompt.css"

function Prompt({ text, show, styles }) {
  return FadeAnimation(show)(
    (animStyles, item) =>
      item && (
        <animated.div style={{ ...animStyles, ...styles }} className="Prompt">
          {text}
        </animated.div>
      )
  )
}

Prompt.propTypes = {
  text: string.isRequired,
  show: bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  styles: object,
}

Prompt.defaultProps = {
  styles: Object.prototype,
}

export default Prompt
