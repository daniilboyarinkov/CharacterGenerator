import emailjs from "@emailjs/browser"
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import { func, string } from "prop-types"
import { useContext, useEffect, useRef, useState } from "react"
import { animated } from "react-spring"

import StatusPopup from "./StatusPopup"

import FadeAnimation from "../animations/Fade.animation"
import LangElFactory from "../config/LangElFactory"
import LangContext from "../contexts/LangContext"
import capitalize from "../helpers/StringCapitalize"
import "../css/ContactForm.css"
import useInput from "../hooks/useInput"

function ContactForm({ close, step }) {
  const nameInput = useInput("", { required: true, minLength: 2 })
  const emailInput = useInput("", { required: true, isEmail: true })
  const suggestionInput = useInput("", { required: true, minLength: 10 })

  const [showStatusPopup, setShowStatusPopup] = useState(false)
  const [success, setSuccess] = useState(false)
  const [isFormValid, setFormValid] = useState(false)

  const { lang } = useContext(LangContext)

  const formRef = useRef()

  const sendEmail = async (e) => {
    e.preventDefault()
    setFormValid(false)
    e.target.reset()
    try {
      const {
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        REACT_APP_PUBLIC_KEY,
      } = process.env

      const result = await emailjs.sendForm(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        formRef.current,
        REACT_APP_PUBLIC_KEY
      )

      setShowStatusPopup(true)

      if (result.status === 200 && result.text === "OK") {
        setSuccess(true)
      } else {
        setSuccess(false)
      }
    } catch (err) {
      setSuccess(false)
    }
  }

  useEffect(() => {
    if (!nameInput.error && !emailInput.error && !suggestionInput.error)
      setFormValid(true)
    else setFormValid(false)
  }, [nameInput.error, emailInput.error, suggestionInput.error])

  return FadeAnimation(null, {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  })((styles) => (
    <>
      {showStatusPopup && <StatusPopup success={success} close={close} />}
      <div
        className="Shadow"
        style={showStatusPopup ? { zIndex: 10002 } : { zIndex: 1000 }}
      />
      <animated.form
        className="ContactForm"
        style={styles}
        ref={formRef}
        onSubmit={sendEmail}
      >
        <button className="ContactCross" type="button" onClick={close}>
          <CloseRoundedIcon fontSize="large" />
        </button>
        <h1>{capitalize(LangElFactory(lang, "CF")("title"))}</h1>
        <h4>{capitalize(LangElFactory(lang, "CF")("subtitle"))}</h4>
        <label htmlFor="step">
          <p>{capitalize(LangElFactory(lang, "CF")("step"))}:</p>
          <input
            type="text"
            id="step"
            name="step"
            readOnly
            value={LangElFactory(lang, "ResultContentKeys")(step)}
          />
        </label>
        <div className="Row">
          <label htmlFor="name">
            {nameInput.isDirty && nameInput.error && (
              <p style={{ color: "red" }}>* {nameInput.errorText}</p>
            )}
            <p>{capitalize(LangElFactory(lang, "CF")("name"))}:</p>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={LangElFactory(lang, "CF")("namePlaceHolder")}
              value={nameInput.value}
              onChange={nameInput.onChange}
              onBlur={nameInput.onBlur}
            />
          </label>
          <label htmlFor="email">
            {emailInput.isDirty && emailInput.error && (
              <p style={{ color: "red" }}>* {emailInput.errorText}</p>
            )}
            <p>{capitalize(LangElFactory(lang, "CF")("email"))}:</p>
            <input
              type="text"
              id="email"
              name="email"
              placeholder={LangElFactory(lang, "CF")("emailPlaceHolder")}
              value={emailInput.value}
              onChange={emailInput.onChange}
              onBlur={emailInput.onBlur}
            />
          </label>
        </div>
        <p className="ContactNote">
          * {capitalize(LangElFactory(lang, "CF")("note"))}
        </p>
        <label htmlFor="suggestion">
          {suggestionInput.isDirty && suggestionInput.error && (
            <p style={{ color: "red" }}>* {suggestionInput.errorText}</p>
          )}
          <p>{capitalize(LangElFactory(lang, "CF")("suggestion"))}:</p>
          <textarea
            name="suggestion"
            id="suggestion"
            cols="30"
            rows="3"
            placeholder={capitalize(
              LangElFactory(lang, "CF")("suggestionPlaceHolder")
            )}
            value={suggestionInput.value}
            onChange={suggestionInput.onChange}
            onBlur={suggestionInput.onBlur}
          />
        </label>
        <br />
        <button type="submit" disabled={!isFormValid}>
          {capitalize(LangElFactory(lang, "CF")("btnText"))}
        </button>
      </animated.form>
    </>
  ))
}

ContactForm.propTypes = {
  close: func.isRequired,
  step: string.isRequired,
}

export default ContactForm
