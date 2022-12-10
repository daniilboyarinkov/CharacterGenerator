import { createSlice } from "@reduxjs/toolkit"

const getLang = () => {
  const lang = `${window?.localStorage?.getItem("lang")}`
  if (["en", "ru", "fr"].includes(lang)) return lang

  return "en"
}

const initialState = getLang()

export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    set: (_, action) => action.payload,
  },
})

export const { set } = langSlice.actions
export default langSlice.reducer
