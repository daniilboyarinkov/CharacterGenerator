import { useTransition } from "react-spring"

const FadeSlideAnimation = (step) =>
  useTransition(step, {
    from: {
      opacity: 0,
      transform: "translate3d(0, -100px, 0)",
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0, 0px, 0)",
    },
    leave: {
      opacity: 0,
      transform: "translate3d(0, 100px, 0)",
    },
  })

export default FadeSlideAnimation
