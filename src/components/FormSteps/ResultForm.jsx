import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded"
import { func, string } from "prop-types"
import { useContext, useEffect } from "react"

import LangContext from "../../contexts/LangContext"
import capitalize from "../../helpers/StringCapitalize"
import useKeyPress from "../../hooks/useKeyPress"
import frUIelements from "../../texts/fr/UIelemenets.json"
import ruUIelements from "../../texts/ru/UIelemenets.json"

function ResultForm({ title, returnAction }) {
  const [pressedKey, clearPressedKey] = useKeyPress()
  const { lang } = useContext(LangContext)

  useEffect(() => {
    if (pressedKey === " ") {
      returnAction()
      clearPressedKey()
    }
  }, [pressedKey, clearPressedKey, returnAction])

  return (
    <>
      <h2>{title}</h2>
      <div className="FormResultContent">21</div>
      <div className="FormNav">
        <button type="button" onClick={returnAction}>
          <ArrowBackIosNewRoundedIcon />
        </button>
        <button type="button">
          {(lang === "fr" && capitalize(frUIelements.save)) ||
            (lang === "ru" && capitalize(ruUIelements.save)) ||
            "Save"}
        </button>
      </div>
    </>
  )
}

ResultForm.propTypes = {
  title: string.isRequired,
  returnAction: func.isRequired,
}

export default ResultForm
