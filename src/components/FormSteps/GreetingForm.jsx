import { string } from "prop-types"
import { useCallback, useEffect } from "react"
import { useDispatch } from "react-redux"

import { lastPage, nextPage } from "../../app/step/stepSlice"

import useKeyPress from "../../hooks/useKeyPress"
import FormNav from "../FormNav"

function GreetingForm({ title, content }) {
  const [pressedKey, clearPressedKey] = useKeyPress()
  const dispatch = useDispatch()

  const generateAll = useCallback(() => {
    dispatch(lastPage())
  }, [dispatch])

  const submitAction = useCallback(() => {
    dispatch(nextPage())
  }, [dispatch])

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
}

export default GreetingForm
