import QuestionMarkRoundedIcon from "@mui/icons-material/QuestionMarkRounded"
import ShuffleRoundedIcon from "@mui/icons-material/ShuffleRounded"
import { bool, func, string, object } from "prop-types"
import { useCallback, useRef, useState, memo, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { animated } from "react-spring"

import FadeSlideAnimation from "../../animations/FadeSlide.animation"

import { generate } from "../../app/character/characterSlice"
import {
  firstPage,
  lastPage,
  nextPage,
  prevPage,
} from "../../app/step/stepSlice"

import LangElFactory from "../../config/LangElFactory"
import LangRFFactory from "../../config/LangRFFactory"

import "../../css/Forms.css"
import capitalize from "../../helpers/StringCapitalize"
import useHover from "../../hooks/useHover"
import useLang from "../../hooks/useLang"
// import useKeyPress from "../../hooks/useKeyPress"
import ColorCircle from "../ColorCircle"
import ContactForm from "../ContactForm"
import FormNav from "../FormNav"
import Prompt from "../Prompt"
import StepCircle from "../StepCircle"

function StepForm({ step, title }) {
  const [isContactShown, setContactShown] = useState(false)
  const ShowContact = useCallback(() => {
    setContactShown(true)
  }, [])
  const closeContact = useCallback(() => {
    setContactShown(false)
  }, [])

  // const [pressedKey, clearPressedKey] = useKeyPress()
  const dispatch = useDispatch()

  // const user = useContext(CharacterContext)
  const user = useSelector((state) => state.character)
  const [viewStep, setViewStep] = useState(user[step])

  const shuffleRef = useRef()
  const questionRef = useRef()

  const isShuffleHovering = useHover(shuffleRef)
  const isQuestionHovering = useHover(questionRef)

  const regenerate = useCallback(() => {
    dispatch(generate(step))
  }, [step, dispatch])

  useEffect(() => {
    setViewStep(user[step])
  }, [step, user])

  const returnAction = useCallback(() => {
    dispatch(prevPage())
  }, [dispatch])
  const homeAction = useCallback(() => {
    dispatch(firstPage())
  }, [dispatch])
  const submitAction = useCallback(() => {
    dispatch(nextPage())
  }, [dispatch])
  const generateAll = useCallback(() => {
    dispatch(lastPage())
  }, [dispatch])

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
      <FormNav
        type="step"
        returnAction={returnAction}
        homeAction={homeAction}
        submitAction={submitAction}
        endStep={generateAll}
      />
      <StepCircle />
    </>
  )
}

const GenerationBtn = memo(({ regenerate, isShuffleHovering, shuffleRef }) => {
  const [lang] = useLang()
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
    const [lang] = useLang()
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

StepForm.propTypes = {
  step: string.isRequired,
  title: string.isRequired,
}

export default StepForm
