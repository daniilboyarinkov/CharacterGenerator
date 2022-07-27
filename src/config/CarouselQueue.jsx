import Slides from "./Slides"

import GreetingForm from "../components/FormSteps/GreetingForm"
import ResultForm from "../components/FormSteps/ResultForm"
import StepForm from "../components/FormSteps/StepForm"

const CarouselQueue = (lang, nextPage, prevPage) => {
  const slides = Slides(lang)
  return slides.map((slide) => {
    if (slide.type === "first")
      return (
        <GreetingForm
          title={slides[slide.id].title}
          content={slides[slide.id].content}
          submitAction={nextPage}
        />
      )
    if (slide.type === "last")
      return (
        <ResultForm title={slides[slide.id].title} returnAction={prevPage} />
      )
    return (
      <StepForm
        title={slides[slide.id].title}
        submitAction={nextPage}
        returnAction={prevPage}
      />
    )
  })
}

export default CarouselQueue
