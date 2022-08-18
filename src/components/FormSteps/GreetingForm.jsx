import { func, string } from "prop-types"
import { useEffect } from "react"

import useKeyPress from "../../hooks/useKeyPress"
import FormNav from "../FormNav"

function GreetingForm({ title, content, submitAction, generateAll }) {
  const [pressedKey, clearPressedKey] = useKeyPress()

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
      <FormNav
        type="greeting"
        generateAll={generateAll}
        submitAction={submitAction}
      />
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
