import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded"
import QuestionMarkRoundedIcon from "@mui/icons-material/QuestionMarkRounded"
import ShuffleRoundedIcon from "@mui/icons-material/ShuffleRounded"
import { bool, func, string, object } from "prop-types"
import { useCallback, useContext, useRef, useState, memo } from "react"
import { animated } from "react-spring"

import FadeSlideAnimation from "../../animations/FadeSlide.animation"

import LangElFactory from "../../config/LangElFactory"
import LangRFFactory from "../../config/LangRFFactory"
import CharacterContext from "../../contexts/CharacterContext"

import LangContext from "../../contexts/LangContext"

import "../../css/Forms.css"
import capitalize from "../../helpers/StringCapitalize"
import useHover from "../../hooks/useHover"
// import useKeyPress from "../../hooks/useKeyPress"
import ColorCircle from "../ColorCircle"
import ContactForm from "../ContactForm"
import Prompt from "../Prompt"
import StepCircle from "../StepCircle"

function StepForm({ step, title, submitAction, returnAction }) {
  const [isContactShown, setContactShown] = useState(false)
  const ShowContact = useCallback(() => {
    setContactShown(true)
  }, [])
  const closeContact = useCallback(() => {
    setContactShown(false)
  }, [])

  // const [pressedKey, clearPressedKey] = useKeyPress()

  const user = useContext(CharacterContext)
  const [viewStep, setViewStep] = useState(user[step])

  const shuffleRef = useRef()
  const questionRef = useRef()

  const isShuffleHovering = useHover(shuffleRef)
  const isQuestionHovering = useHover(questionRef)

  const regenerate = useCallback(() => {
    const curr = user[step]
    const pr = user.generate(step)
    if (pr !== curr) {
      user[step] = pr
      setViewStep(user[step])
    } else {
      regenerate()
    }
  }, [user, step])

  // useEffect(() => {
  //   if (pressedKey === " ") {
  //     submitAction()
  //     clearPressedKey()
  //   } else if (pressedKey === "j") {
  //     returnAction()
  //     clearPressedKey()
  //   } else if (pressedKey === "g") {
  //     regenerate()
  //     clearPressedKey()
  //   }
  // }, [pressedKey, clearPressedKey, returnAction, submitAction, regenerate])

  return (
    <>
      {isContactShown && <ContactForm close={closeContact} step={step} />}
      <h2>{capitalize(title)}</h2>
      <div className="FormStepContent">
        <ResultField
          viewStep={viewStep}
          step={step}
          isQuestionHovering={isQuestionHovering}
          questionRef={questionRef}
          ShowContact={ShowContact}
        />
        <GenerationBtn
          regenerate={regenerate}
          isShuffleHovering={isShuffleHovering}
          shuffleRef={shuffleRef}
        />
      </div>
      <FormNav returnAction={returnAction} submitAction={submitAction} />
      <StepCircle />
    </>
  )
}

const GenerationBtn = memo(({ regenerate, isShuffleHovering, shuffleRef }) => {
  const { lang } = useContext(LangContext)
  return (
    <button type="button" className="GenerateBtn" onClick={regenerate}>
      {capitalize(LangElFactory(lang, "UI")("generate"))}
      <Prompt
        text={capitalize(LangElFactory(lang, "SF")("generationPrompt"))}
        show={isShuffleHovering}
        styles={{ top: "-70%" }}
      />
      <span className="ShuffleIcon" ref={shuffleRef}>
        <ShuffleRoundedIcon fontSize="large" />
      </span>
    </button>
  )
})

const ResultField = memo(
  ({ step, viewStep, isQuestionHovering, questionRef, ShowContact }) => {
    const { lang } = useContext(LangContext)
    return (
      <div className="ResultField">
        {FadeSlideAnimation(viewStep)((styles, item) =>
          step.toLowerCase().includes("color") ? (
            <ColorCircle color={item} styles={styles} />
          ) : (
            <animated.b style={{ position: "absolute", ...styles }}>
              {capitalize(LangRFFactory(lang, step, item))}
            </animated.b>
          )
        )}
        <Prompt
          text={capitalize(LangElFactory(lang, "SF")("questionPrompt"))}
          show={isQuestionHovering}
          styles={{ top: "-30%" }}
        />
        <button
          type="button"
          className="QuestionIcon"
          ref={questionRef}
          onClick={ShowContact}
        >
          <QuestionMarkRoundedIcon fontSize="large" />
        </button>
      </div>
    )
  }
)

const FormNav = memo(({ returnAction, submitAction }) => {
  const { lang } = useContext(LangContext)
  return (
    <div className="FormNav">
      <button type="button" onClick={returnAction} className="Back">
        <ArrowBackIosNewRoundedIcon />
      </button>
      <button type="button" onClick={submitAction} className="Submit">
        {capitalize(LangElFactory(lang, "UI")("submit"))}
      </button>
    </div>
  )
})

GenerationBtn.propTypes = {
  regenerate: func.isRequired,
  isShuffleHovering: bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  shuffleRef: object.isRequired,
}

ResultField.propTypes = {
  viewStep: string.isRequired,
  ShowContact: func.isRequired,
  step: string.isRequired,
  isQuestionHovering: bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  questionRef: object.isRequired,
}

FormNav.propTypes = {
  returnAction: func.isRequired,
  submitAction: func.isRequired,
}

StepForm.propTypes = {
  step: string.isRequired,
  title: string.isRequired,
  submitAction: func.isRequired,
  returnAction: func.isRequired,
}

export default StepForm
