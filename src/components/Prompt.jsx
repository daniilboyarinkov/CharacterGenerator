import { bool, object, string } from "prop-types"
import { useTransition, animated } from "react-spring"

import "../css/Prompt.css"

function Prompt({ text, show, styles }) {
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  return transitions(
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
