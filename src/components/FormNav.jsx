import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded"
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded"
import CoPresentRoundedIcon from "@mui/icons-material/CoPresentRounded"
import HomeRoundedIcon from "@mui/icons-material/HomeRounded"
import { string } from "prop-types"

import LangElFactory from "../config/LangElFactory"

import "../css/FormNav.css"
import capitalize from "../helpers/StringCapitalize"
import useLang from "../hooks/useLang"

// type: greeting, step, result
function FormNav({ type, ...args }) {
  const [lang] = useLang()

  if (type !== "greeting" && type !== "step" && type !== "result")
    return <div className="Empty" />

  return (
    <div className={`FormNav FormNav-${type}`}>
      {type === "greeting" && (
        <>
          <button
            type="button"
            onClick={args.generateAll}
            className="ReversedBtn"
          >
            {capitalize(LangElFactory(lang, "UI")("random"))}
          </button>
          <button type="button" onClick={args.submitAction}>
            {capitalize(LangElFactory(lang, "UI")("custom"))}
          </button>
        </>
      )}
      {type === "result" && (
        <>
          <button
            type="button"
            onClick={args.homeAction}
            className="Home ReversedBtn"
          >
            <ArrowBackIosNewRoundedIcon />
            <HomeRoundedIcon />
          </button>
          <div>
            <button type="button" onClick={args.returnAction} className="Back">
              <ArrowBackIosNewRoundedIcon />
            </button>
            <button type="button" className="Submit" onClick={args.saveAction}>
              {capitalize(LangElFactory(lang, "UI")("save"))}
            </button>
          </div>
          <div />
        </>
      )}
      {type === "step" && (
        <>
          <button type="button" onClick={args.homeAction} className="Home">
            <ArrowBackIosNewRoundedIcon />
            <HomeRoundedIcon />
          </button>
          <div>
            <button type="button" onClick={args.returnAction} className="Back">
              <ArrowBackIosNewRoundedIcon />
            </button>
            <button
              type="button"
              onClick={args.submitAction}
              className="Submit"
            >
              {capitalize(LangElFactory(lang, "UI")("submit"))}
            </button>
          </div>
          <button type="button" className="End" onClick={args.endStep}>
            <CoPresentRoundedIcon />
            <ArrowForwardIosRoundedIcon />
          </button>
        </>
      )}
    </div>
  )
}

FormNav.propTypes = {
  type: string.isRequired,
}

export default FormNav
