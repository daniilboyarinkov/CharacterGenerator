import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined"
import { memo } from "react"

import useTheme from "../hooks/useTheme"

function ThemeToggleButton() {
  // const toggleTheme = () =>
  //   setTheme((curr) => (curr === "light" ? "dark" : "light"))
  const [theme, setTheme] = useTheme()

  return (
    <button
      className="ExtraButtons"
      onClick={() => setTheme(theme)}
      type="button"
    >
      {theme === "dark" ? (
        <NightlightOutlinedIcon sx={{ color: "white" }} />
      ) : (
        <LightModeOutlinedIcon sx={{ color: "black" }} />
      )}
    </button>
  )
}

export default memo(ThemeToggleButton)
