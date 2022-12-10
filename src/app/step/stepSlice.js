/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  current: 0,
  forwards: true,
  all: 0,
}

export const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    setAll: (state, action) => {
      state.all = action.payload
    },
    nextPage: (state) => {
      state.current += 1
      state.forwards = true
    },
    prevPage: (state) => {
      state.current -= 1
      state.forwards = false
    },
    lastPage: (state) => {
      state.current = state.all
      state.forwards = true
    },
    firstPage: (state) => {
      state.current = 0
      state.forwards = false
    },
    goToStep: (state, action) => {
      state.current = action.payload
      state.forwards = false
    },
  },
})

export const { setAll, nextPage, prevPage, lastPage, firstPage, goToStep } =
  stepSlice.actions
export default stepSlice.reducer
