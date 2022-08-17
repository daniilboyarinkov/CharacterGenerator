import { useTransition } from "react-spring"

const HeaderSlideInAnimation = () =>
  useTransition(null, {
    from: { y: -110, x: -110 },
    enter: { y: 0, x: 0 },
    leave: { y: -110, x: -110 },
  })

export default HeaderSlideInAnimation
