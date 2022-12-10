// src/components/theme/slice.js
import { createSlice } from "@reduxjs/toolkit"

// пытаемся получить тему из локального хранилища браузера
// если там ничего нет, то пробуем получить тему из настроек системы
// если и настроек нет, то используем темную тему
const getTheme = () => {
  const theme = `${window?.localStorage?.getItem("theme")}`
  if (["light", "dark"].includes(theme)) return theme

  const userMedia = window.matchMedia("(prefers-color-scheme: light)")
  if (userMedia.matches) return "light"

  return "dark"
}

const initialState = getTheme()

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    set: (state, action) => action.payload,
  },
})

export const { set } = themeSlice.actions
export default themeSlice.reducer
