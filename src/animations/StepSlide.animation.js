import { useSelector } from "react-redux"
import { useTransition, config } from "react-spring"

const StepSlideAnimation = (renderItem) => {
  const forward = useSelector((state) => state.step.forwards)

  return useTransition(renderItem, {
    config: { duration: 400, ...config.gentle },
    from: {
      x: forward ? "120%" : "-120%",
      transform: "translate3d(0, -60px, 0)",
    },
    enter: { x: "0", transform: "translate3d(0, 0px, 0)" },
    leave: {
      x: forward ? "-120%" : "120%",
      transform: "translate3d(0, -60px, 0)",
    },
  })
}

export default StepSlideAnimation
