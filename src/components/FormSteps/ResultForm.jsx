import { string } from "prop-types"
import { useCallback, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

import { firstPage, goToStep, prevPage } from "../../app/step/stepSlice"

import LangElFactory from "../../config/LangElFactory"
import LangRFFactory from "../../config/LangRFFactory"
import exportAsImage from "../../helpers/ExportComponentAsImg"
import capitalize from "../../helpers/StringCapitalize"
import useLang from "../../hooks/useLang"
// import useKeyPress from "../../hooks/useKeyPress"
import ColorCircle from "../ColorCircle"
import FormNav from "../FormNav"
import ResultField from "../ResultField"

function ResultForm({ title }) {
  const dispatch = useDispatch()
  // const [pressedKey, clearPressedKey] = useKeyPress()
  const [lang] = useLang()
  const user = useSelector((state) => state.character)

  const exportRef = useRef()

  const saveAction = useCallback(() => {
    exportAsImage(exportRef.current, "Character.png")
  }, [exportRef])

  const returnAction = useCallback(() => {
    dispatch(prevPage())
  }, [dispatch])
  const homeAction = useCallback(() => {
    dispatch(firstPage())
  }, [dispatch])
  const goTo = useCallback(
    (st) => {
      dispatch(goToStep(st))
    },
    [dispatch]
  )

  // useEffect(() => {
  //   if (pressedKey === " ") {
  //     returnAction()
  //     clearPressedKey()
  //   }
  // }, [pressedKey, clearPressedKey, returnAction])

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
              goToStepField={() => goTo(index + 1)}
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
        type="result"
        returnAction={returnAction}
        homeAction={homeAction}
        saveAction={saveAction}
      />
    </>
  )
}

ResultForm.propTypes = {
  title: string.isRequired,
}

export default ResultForm
