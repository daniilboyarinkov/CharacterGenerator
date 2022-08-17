import { useState, useEffect, useMemo } from "react"

const useValidation = (value, validations) => {
  const [error, setError] = useState(false)
  const [errorText, setErrorText] = useState("")

  const emailRe = useMemo(
    () =>
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
    []
  )

  useEffect(() => {
    Object.keys(validations).forEach((validation) => {
      switch (validation) {
        case "required":
          // if required: false -> do nothing
          if (!validations[validation]) return
          if (!value || !value.length) {
            setError(true)
            setErrorText("required")
          } else {
            setError(false)
            setErrorText("")
          }
          break
        case "minLength":
          // if required: false -> do nothing
          // weird ? agree
          if (!validations[validation]) return
          // + is explicit casting!
          if (
            !value ||
            value.replace(/\s/g, "").length < +validations[validation]
          ) {
            setError(true)
            setErrorText(`minimal Length: ${validations[validation]}`)
          } else {
            setError(false)
            setErrorText("")
          }
          break
        case "isEmail":
          // if email: false -> do nothing
          if (!validations[validation]) return
          if (!value || !emailRe.test(value)) {
            setError(true)
            setErrorText("invalid Email!")
          } else {
            setError(false)
            setErrorText("")
          }
          break
        default:
          break
      }
    })
  }, [value, validations, emailRe])

  return { error, errorText }
}

export default useValidation
