import { useState } from "react"

import useValidation from "./useValidation"

/**
 * Hook for inputs
 * * Onchange here is waiting for event object not just a regular value.
 * Dunno whether thats accurate...
 * @param {string} initialValue initial input value
 * @param {object} initialValue validation object
 * @returns inputs logic behavior
 */
const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue)
  const [isDirty, setDirty] = useState(false)
  const error = useValidation(value, validations)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onBlur = () => {
    setDirty(true)
  }

  return { value, onChange, onBlur, isDirty, ...error }
}

export default useInput
