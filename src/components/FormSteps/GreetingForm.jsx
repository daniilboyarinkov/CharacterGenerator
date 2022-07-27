import { func, string } from "prop-types"
import { useContext, useEffect } from "react"

import LangContext from "../../contexts/LangContext"
import capitalize from "../../helpers/StringCapitalize"
import useKeyPress from "../../hooks/useKeyPress"
import frUIelements from "../../texts/fr/UIelemenets.json"
import ruUIelements from "../../texts/ru/UIelemenets.json"

function GreetingForm({ title, content, submitAction }) {
  const [pressedKey, clearPressedKey] = useKeyPress()
  const { lang } = useContext(LangContext)

  useEffect(() => {
    if (pressedKey === " ") {
      submitAction()
      clearPressedKey()
    }
  }, [pressedKey, clearPressedKey, submitAction])

  return (
    <>
      <h2>{title}</h2>
      <div className="FormTextContent">
        {content.split("\n").map((text, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <p key={`GreetingFormP-${index}`}>{text}</p>
        ))}
      </div>
      <div className="FormNav">
        <button type="button" onClick={submitAction}>
          {(lang === "fr" && capitalize(frUIelements.submit)) ||
            (lang === "ru" && capitalize(ruUIelements.submit)) ||
            "Submit"}
        </button>
      </div>
    </>
  )
}

GreetingForm.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  submitAction: func.isRequired,
}

export default GreetingForm
