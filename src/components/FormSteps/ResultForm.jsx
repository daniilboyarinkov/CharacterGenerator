import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded"
import { func, string } from "prop-types"
import { memo, useCallback, useContext, useEffect, useRef } from "react"

import LangElFactory from "../../config/LangElFactory"
import LangRFFactory from "../../config/LangRFFactory"
import CharacterContext from "../../contexts/CharacterContext"
import LangContext from "../../contexts/LangContext"
import exportAsImage from "../../helpers/ExportComponentAsImg"
import capitalize from "../../helpers/StringCapitalize"
import useKeyPress from "../../hooks/useKeyPress"
import ColorCircle from "../ColorCircle"
import ResultField from "../ResultField"

function ResultForm({ title, returnAction }) {
  const [pressedKey, clearPressedKey] = useKeyPress()
  const { lang } = useContext(LangContext)
  const user = useContext(CharacterContext)

  const exportRef = useRef()

  const saveAction = useCallback(() => {
    exportAsImage(exportRef.current, "Character.png")
  }, [exportRef])

  useEffect(() => {
    if (pressedKey === " ") {
      returnAction()
      clearPressedKey()
    }
  }, [pressedKey, clearPressedKey, returnAction])

  return (
    <>
      <h2>{capitalize(title)}</h2>
      <div
        className="FormResultContent"
        style={{ border: "thin solid black", marginTop: 6, borderRadius: 12 }}
        ref={exportRef}
      >
        <h2>{capitalize(LangElFactory(lang, "ResultSubTitle"))}</h2>
        {Object.keys(user).map((key, index) => {
          if (key === "id" || key === "generate") return undefined
          return (
            <ResultField
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              text={LangElFactory(lang, "ResultContentKeys")(key)}
              result={
                key.includes("Color") ? (
                  <ColorCircle
                    color={user[key]}
                    styles={{ width: 50, height: 50, position: "relative" }}
                    promptStyles={{ top: "-150%" }}
                    wrapPosition="relative"
                  />
                ) : (
                  capitalize(LangRFFactory(lang, key, user[key]))
                )
              }
            />
          )
        })}
        <ResultField
          text=""
          result={
            <img
              draggable={false}
              align="end"
              width={100}
              src="/CharacterGenerator/svg/icon.svg"
              alt=""
              style={{ alignSelf: "end" }}
            />
          }
        />
      </div>
      <FormNav
        lang={lang}
        returnAction={returnAction}
        saveAction={saveAction}
      />
    </>
  )
}

const FormNav = memo(({ lang, returnAction, saveAction }) => (
  <div className="FormNav" style={{ position: "relative", marginTop: 24 }}>
    <button type="button" onClick={returnAction} className="Back">
      <ArrowBackIosNewRoundedIcon />
    </button>
    <button type="button" className="Submit" onClick={saveAction}>
      {capitalize(LangElFactory(lang, "UI")("save"))}
    </button>
  </div>
))

FormNav.propTypes = {
  lang: string.isRequired,
  returnAction: func.isRequired,
  saveAction: func.isRequired,
}

ResultForm.propTypes = {
  title: string.isRequired,
  returnAction: func.isRequired,
}

export default ResultForm