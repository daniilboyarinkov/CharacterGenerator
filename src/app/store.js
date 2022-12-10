import { configureStore } from "@reduxjs/toolkit"

import characterReducer from "./character/characterSlice"
import languageReducer from "./language/languageSlice"
import stepReducer from "./step/stepSlice"
import themeReducer from "./theme/themeSlice"

export default configureStore({
  reducer: {
    character: characterReducer,
    theme: themeReducer,
    lang: languageReducer,
    step: stepReducer,
  },
})
