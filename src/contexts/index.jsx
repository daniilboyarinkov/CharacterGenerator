/* eslint-disable react/forbid-prop-types */
import PropType from "prop-types"

import CharacterContext from "./CharacterContext"
import LangContext from "./LangContext"
import ThemeContext from "./ThemeContext"

function AllContexts({
  ThemeContextValue,
  LangContextValue,
  CharacterContextValue,
  children,
}) {
  return (
    <LangContext.Provider value={LangContextValue}>
      <ThemeContext.Provider value={ThemeContextValue}>
        <CharacterContext.Provider value={CharacterContextValue}>
          {children}
        </CharacterContext.Provider>
      </ThemeContext.Provider>
    </LangContext.Provider>
  )
}

AllContexts.propTypes = {
  ThemeContextValue: PropType.object.isRequired,
  LangContextValue: PropType.object.isRequired,
  CharacterContextValue: PropType.object.isRequired,
  children: PropType.element.isRequired,
}

export default AllContexts
