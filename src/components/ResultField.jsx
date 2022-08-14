import { element, oneOfType, string } from "prop-types"

function ResultField({ text, result }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "4px 12px",
        width: "100%",
        minWidth: "240px",
        minHeight: "80px",
        alignItems: "center",
      }}
    >
      {text.length ? (
        <b style={{ textAlign: "left" }}>{`${text}: `}</b>
      ) : (
        <b> </b>
      )}
      {typeof result === "string" ? (
        <span
          style={{
            backgroundColor: "grey",
            padding: "6px 20px",
            borderRadius: "6px",
            position: "relative",
          }}
        >
          {result}
        </span>
      ) : (
        <span>{result}</span>
      )}
    </div>
  )
}

ResultField.propTypes = {
  text: string.isRequired,
  result: oneOfType([string, element]).isRequired,
}

export default ResultField
