import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined"
import PropTypes from "prop-types"
import { memo } from "react"

function ThemeToggleButton({ theme, setTheme }) {
  const toggleTheme = () =>
    setTheme((curr) => (curr === "light" ? "dark" : "light"))

  return (
    <button className="ExtraButtons" onClick={toggleTheme} type="button">
      {theme === "dark" ? (
        <NightlightOutlinedIcon sx={{ color: "white" }} />
      ) : (
        <LightModeOutlinedIcon sx={{ color: "white" }} />
      )}
    </button>
  )
}

ThemeToggleButton.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
}

export default memo(ThemeToggleButton)
