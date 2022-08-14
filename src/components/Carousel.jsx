import { useCallback, useContext, useEffect, useMemo, useState } from "react"
import { useTransition, animated, config } from "react-spring"

import { CarouselQueue, QueueLength } from "../config/CarouselQueue"
import LangContext from "../contexts/LangContext"
import StepContext from "../contexts/StepContext"

import "../css/Carousel.css"

function Carousel() {
  const [step, setStep] = useState(0)
  const [forward, setForward] = useState(true)

  const { lang } = useContext(LangContext)

  const nextPage = useCallback(() => {
    setForward(true)
    setStep((curr) => curr + 1)
  }, [])

  const prevPage = useCallback(() => {
    setForward(false)
    setStep((curr) => curr - 1)
  }, [])

  const lastPage = useCallback(() => {
    setForward(true)
    setStep(QueueLength)
  }, [])

  const [renderItem, setRenderItem] = useState()

  useEffect(() => {
    setRenderItem(CarouselQueue(lang, nextPage, prevPage, lastPage)[step])
  }, [step, lang, nextPage, prevPage, lastPage])

  const transitions = useTransition(renderItem, {
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

  const StepContextValue = useMemo(
    () => ({
      current: step,
      all: QueueLength,
    }),
    [step]
  )

  return (
    <StepContext.Provider value={StepContextValue}>
      <div className="Carousel">
        {transitions((styles, item) => (
          <animated.div className="StepForm" key={step} style={styles}>
            {item}
          </animated.div>
        ))}
      </div>
    </StepContext.Provider>
  )
}

export default Carousel
