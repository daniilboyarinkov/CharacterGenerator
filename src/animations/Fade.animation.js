import { useTransition } from "react-spring"

const FadeAnimation = (el, extraStyles = Object.prototype) =>
  useTransition(el, {
    from: { opacity: 0, ...extraStyles },
    enter: { opacity: 1, ...extraStyles },
    leave: { opacity: 0, ...extraStyles },
  })

export default FadeAnimation
