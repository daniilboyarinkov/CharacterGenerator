import { element, oneOfType, string, func } from "prop-types"

import "../css/ResultField.css"

function ResultField({ text, result, goToStepField }) {
  return (
    <div className="ResultContentField">
      {text.length ? (
        <button
          className="ResultContentFieldTitle"
          type="button"
          onClick={goToStepField}
        >
          <b>{`${text}: `}</b>
        </button>
      ) : (
        <b> </b>
      )}
      {typeof result === "string" ? (
        <span className="ResultContentFieldText">{result}</span>
      ) : (
        <span>{result}</span>
      )}
    </div>
  )
}

ResultField.propTypes = {
  text: string.isRequired,
  result: oneOfType([string, element]).isRequired,
  goToStepField: func,
}

ResultField.defaultProps = {
  goToStepField: Function.prototype,
}

export default ResultField
