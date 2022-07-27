/* eslint-disable react/forbid-prop-types */
import PropType from "prop-types"

import LangContext from "./LangContext"
import ThemeContext from "./ThemeContext"

function AllContexts({ ThemeContextValue, LangContextValue, children }) {
  return (
    <LangContext.Provider value={LangContextValue}>
      <ThemeContext.Provider value={ThemeContextValue}>
        {children}
      </ThemeContext.Provider>
    </LangContext.Provider>
  )
}

AllContexts.propTypes = {
  ThemeContextValue: PropType.object.isRequired,
  LangContextValue: PropType.object.isRequired,
  children: PropType.element.isRequired,
}

export default AllContexts
