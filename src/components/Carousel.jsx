import { useContext, useEffect, useState } from "react"
import { useTransition, animated, config } from "react-spring"

import CarouselQueue from "../config/CarouselQueue"
import LangContext from "../contexts/LangContext"

import "../css/Carousel.css"

function Carousel() {
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState("forward")

  const { lang } = useContext(LangContext)

  const nextPage = () => {
    setDirection("forward")
    setStep((curr) => curr + 1)
  }
  const prevPage = () => {
    setDirection("back")
    setStep((curr) => curr - 1)
  }

  const [renderItem, setRenderItem] = useState()

  useEffect(() => {
    setRenderItem(CarouselQueue(lang, nextPage, prevPage)[step])
  }, [step, lang])

  const transitions = useTransition(renderItem, {
    config: { duration: 400, ...config.gentle },
    from: { x: direction === "forward" ? "120%" : "-120%" },
    enter: { x: "0" },
    leave: { x: direction === "forward" ? "-120%" : "120%" },
  })

  return (
    <div className="Carousel">
      {transitions(
        (styles, item) =>
          item && (
            <animated.div className="StepForm" key={step} style={styles}>
              {renderItem}
            </animated.div>
          )
      )}
    </div>
  )
}

export default Carousel
