import { bool, func } from "prop-types"
import { animated } from "react-spring"

import FadeAnimation from "../animations/Fade.animation"

import "../css/StatusPopup.css"

function StatusPopup({ success, close }) {
  return FadeAnimation(null)((styles) => (
    <animated.div
      style={styles}
      className={`StatusPopup StatusPopup-${success ? "success" : "fail"}`}
    >
      <h1>{success ? "Success!" : "Oops..."}</h1>
      <div className="StatusPopupContent">
        {success ? (
          <>
            <p>Thanks for your suggestion</p>
            <p>Wait for improvements!</p>
          </>
        ) : (
          <>
            <p>Something went wrong...</p>
            <p>Try again later...</p>
          </>
        )}
        <button type="button" onClick={close}>
          {success ? "Can't wait!" : "Ok"}
        </button>
      </div>
    </animated.div>
  ))
}

StatusPopup.propTypes = {
  success: bool.isRequired,
  close: func.isRequired,
}

export default StatusPopup
