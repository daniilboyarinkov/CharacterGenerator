import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded"
import QuestionMarkRoundedIcon from "@mui/icons-material/QuestionMarkRounded"
import ShuffleRoundedIcon from "@mui/icons-material/ShuffleRounded"
import { bool, func, string, object } from "prop-types"
import {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  memo,
} from "react"
import { useTransition, animated } from "react-spring"

import LangElFactory from "../../config/LangElFactory"
import LangRFFactory from "../../config/LangRFFactory"
import CharacterContext from "../../contexts/CharacterContext"

import LangContext from "../../contexts/LangContext"

import "../../css/Forms.css"
import capitalize from "../../helpers/StringCapitalize"
import useHover from "../../hooks/useHover"
import useKeyPress from "../../hooks/useKeyPress"
import ColorCircle from "../ColorCircle"
import Prompt from "../Prompt"
import StepCircle from "../StepCircle"

function StepForm({ step, title, submitAction, returnAction }) {
  const [pressedKey, clearPressedKey] = useKeyPress()
  const { lang } = useContext(LangContext)

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

  useEffect(() => {
    if (pressedKey === " ") {
      submitAction()
      clearPressedKey()
    } else if (pressedKey === "j") {
      returnAction()
      clearPressedKey()
    } else if (pressedKey === "g") {
      regenerate()
      clearPressedKey()
    }
  }, [pressedKey, clearPressedKey, returnAction, submitAction, regenerate])

  const transitions = useTransition(viewStep, {
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

  return (
    <>
      <h2>{capitalize(title)}</h2>
      <div className="FormStepContent">
        <ResultField
          lang={lang}
          transitions={transitions}
          step={step}
          isQuestionHovering={isQuestionHovering}
          questionRef={questionRef}
        />
        <GenerationBtn
          lang={lang}
          regenerate={regenerate}
          isShuffleHovering={isShuffleHovering}
          shuffleRef={shuffleRef}
        />
      </div>
      <FormNav
        lang={lang}
        returnAction={returnAction}
        submitAction={submitAction}
      />
      <StepCircle />
    </>
  )
}

const GenerationBtn = memo(
  ({ lang, regenerate, isShuffleHovering, shuffleRef }) => (
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
)

const ResultField = memo(
  ({ transitions, lang, step, isQuestionHovering, questionRef }) => (
    <div className="ResultField">
      {transitions((styles, item) =>
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
      <button type="button" className="QuestionIcon" ref={questionRef}>
        <QuestionMarkRoundedIcon fontSize="large" />
      </button>
    </div>
  )
)

const FormNav = memo(({ returnAction, submitAction, lang }) => (
  <div className="FormNav">
    <button type="button" onClick={returnAction} className="Back">
      <ArrowBackIosNewRoundedIcon />
    </button>
    <button type="button" onClick={submitAction} className="Submit">
      {capitalize(LangElFactory(lang, "UI")("submit"))}
    </button>
  </div>
))

GenerationBtn.propTypes = {
  lang: string.isRequired,
  regenerate: func.isRequired,
  isShuffleHovering: bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  shuffleRef: object.isRequired,
}

ResultField.propTypes = {
  lang: string.isRequired,
  transitions: func.isRequired,
  step: string.isRequired,
  isQuestionHovering: bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  questionRef: object.isRequired,
}

FormNav.propTypes = {
  returnAction: func.isRequired,
  submitAction: func.isRequired,
  lang: string.isRequired,
}

StepForm.propTypes = {
  step: string.isRequired,
  title: string.isRequired,
  submitAction: func.isRequired,
  returnAction: func.isRequired,
}

export default StepForm
