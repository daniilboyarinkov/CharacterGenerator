import TranslateIcon from "@mui/icons-material/Translate"
import { string, func } from "prop-types"
import { memo } from "react"
import { animated } from "react-spring"

import capitalize from "../../helpers/StringCapitalize"

const languages = ["en", "ru", "fr"]

function LangTogglePopup({
  lang,
  setLang,
  setOpen,
  langsTransition,
  orientation,
}) {
  return (
    <>
      <button
        type="button"
        className="ExtraButtons"
        onClick={() => setOpen((curr) => !curr)}
      >
        <TranslateIcon sx={{ color: "white" }} />
      </button>
      {langsTransition(
        (styles, item) =>
          item && (
            <animated.span
              className={`ChooseLangPopup ChooseLangPopup-${orientation}`}
              style={styles}
            >
              {languages.map((l) => (
                <button
                  type="button"
                  key={l}
                  onClick={() => setLang(l)}
                  className={`${lang === l && "active"}`}
                >
                  {capitalize(l)}
                </button>
              ))}
            </animated.span>
          )
      )}
    </>
  )
}

LangTogglePopup.propTypes = {
  lang: string.isRequired,
  setLang: func.isRequired,
  setOpen: func.isRequired,
  langsTransition: func.isRequired,
  orientation: string,
}

LangTogglePopup.defaultProps = {
  orientation: "h",
}

export default memo(LangTogglePopup)
