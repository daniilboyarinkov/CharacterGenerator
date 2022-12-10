import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { animated } from "react-spring"

import StepSlideAnimation from "../animations/StepSlide.animation"
import { setAll } from "../app/step/stepSlice"

import { CarouselQueue, QueueLength } from "../config/CarouselQueue"

import "../css/Carousel.css"
import useLang from "../hooks/useLang"

function Carousel() {
  const dispatch = useDispatch()
  const step = useSelector((state) => state.step.current)

  const [lang] = useLang()
  const [renderItem, setRenderItem] = useState()

  useEffect(() => {
    dispatch(setAll(QueueLength))
  }, [dispatch])

  useEffect(() => {
    setRenderItem(CarouselQueue(lang)[step])
  }, [step, lang])

  return (
    <div className="Carousel">
      {StepSlideAnimation(renderItem)((styles, item) => (
        <animated.div className="StepForm" key={step} style={styles}>
          {item}
        </animated.div>
      ))}
    </div>
  )
}

export default Carousel
