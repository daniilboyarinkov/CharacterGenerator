import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded"
import QuestionMarkRoundedIcon from "@mui/icons-material/QuestionMarkRounded"
import ShuffleRoundedIcon from "@mui/icons-material/ShuffleRounded"
import { func, string } from "prop-types"
import { useContext, useEffect } from "react"

import LangContext from "../../contexts/LangContext"

import "../../css/Forms.css"
import capitalize from "../../helpers/StringCapitalize"
import useKeyPress from "../../hooks/useKeyPress"
import frUIelements from "../../texts/fr/UIelemenets.json"
import ruUIelements from "../../texts/ru/UIelemenets.json"

function StepForm({ title, submitAction, returnAction }) {
  const [pressedKey, clearPressedKey] = useKeyPress()
  const { lang } = useContext(LangContext)

  // TODO: Подсказки по управлению с клавиатуры

  useEffect(() => {
    if (pressedKey === " ") {
      submitAction()
      clearPressedKey()
    } else if (pressedKey === "j") {
      returnAction()
      clearPressedKey()
    }
  }, [pressedKey, clearPressedKey, returnAction, submitAction])

  return (
    <>
      <h2>{title}</h2>
      <div className="FormStepContent">
        <div className="ResultField">
          {(lang === "fr" && capitalize(frUIelements.result)) ||
            (lang === "ru" && capitalize(ruUIelements.result)) ||
            "Result"}
          <button type="button" className="QuestionIcon">
            <QuestionMarkRoundedIcon />
          </button>
        </div>
        <button type="button" className="GenerateBtn">
          {(lang === "fr" && capitalize(frUIelements.generate)) ||
            (lang === "ru" && capitalize(ruUIelements.generate)) ||
            "Generate"}
          <span className="ShuffleIcon">
            <ShuffleRoundedIcon fontSize="large" />
          </span>
        </button>
      </div>
      <div className="FormNav">
        <button type="button" onClick={returnAction}>
          <ArrowBackIosNewRoundedIcon />
        </button>
        <button type="button" onClick={submitAction}>
          {(lang === "fr" && capitalize(frUIelements.submit)) ||
            (lang === "ru" && capitalize(ruUIelements.submit)) ||
            "Submit"}
        </button>
      </div>
    </>
  )
}

StepForm.propTypes = {
  title: string.isRequired,
  submitAction: func.isRequired,
  returnAction: func.isRequired,
}

export default StepForm
