import { func, string } from "prop-types"
import { useContext, useEffect } from "react"

import LangElFactory from "../../config/LangElFactory"
import LangContext from "../../contexts/LangContext"
import capitalize from "../../helpers/StringCapitalize"
import useKeyPress from "../../hooks/useKeyPress"

function GreetingForm({ title, content, submitAction, generateAll }) {
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
      <div className="FormNav GFormNav">
        <button type="button" onClick={generateAll}>
          {capitalize(LangElFactory(lang, "UI")("random"))}
        </button>
        <button type="button" onClick={submitAction}>
          {capitalize(LangElFactory(lang, "UI")("custom"))}
        </button>
      </div>
    </>
  )
}

GreetingForm.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  submitAction: func.isRequired,
  generateAll: func.isRequired,
}

export default GreetingForm
