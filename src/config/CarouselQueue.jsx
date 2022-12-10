import Slides from "./Slides"

import GreetingForm from "../components/FormSteps/GreetingForm"
import ResultForm from "../components/FormSteps/ResultForm"
import StepForm from "../components/FormSteps/StepForm"

const QueueLength = Slides().length - 1

const CarouselQueue = (lang) => {
  const slides = Slides(lang)
  return slides.map((slide) => {
    if (slide.type === "first")
      return (
        <GreetingForm
          title={slides[slide.id].title}
          content={slides[slide.id].content}
        />
      )
    if (slide.type === "last")
      return <ResultForm title={slides[slide.id].title} />
    return (
      <StepForm step={slides[slide.id].step} title={slides[slide.id].title} />
    )
  })
}

export { CarouselQueue, QueueLength }
