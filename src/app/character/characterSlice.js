import { createSlice } from "@reduxjs/toolkit"

// value arrays
import colorsArr from "../../config/characteristics/colors"
import eyeTypeArr from "../../config/characteristics/eyeType"
import hairLengthArr from "../../config/characteristics/hairLength"
import hairTypeArr from "../../config/characteristics/hairType"
import heightArr from "../../config/characteristics/height"
import lipsTypeArr from "../../config/characteristics/lipsType"
import noseTypeArr from "../../config/characteristics/noseType"
import peculiaritiesArr from "../../config/characteristics/peculiarities"
import raceArr from "../../config/characteristics/race"
import sexArr from "../../config/characteristics/sex"
import situationArr from "../../config/characteristics/situation"

// random generate funciton
import getOneRandom from "../../helpers/GetOneRandom"

const fieldToArr = {
  sex: sexArr,
  race: raceArr,
  skinColor: colorsArr,
  eyeColor: colorsArr,
  eyeType: eyeTypeArr,
  hairLength: hairLengthArr,
  hairType: hairTypeArr,
  hairColor: colorsArr,
  noseType: noseTypeArr,
  lipsType: lipsTypeArr,
  height: heightArr,
  situation: situationArr,
  peculiarities: peculiaritiesArr,
}

export const characterSlice = createSlice({
  name: "character",
  initialState: {
    sex: getOneRandom(sexArr),
    race: getOneRandom(raceArr),
    skinColor: getOneRandom(colorsArr),
    eyeColor: getOneRandom(colorsArr),
    eyeType: getOneRandom(eyeTypeArr),
    hairLength: getOneRandom(hairLengthArr),
    hairType: getOneRandom(hairTypeArr),
    hairColor: getOneRandom(colorsArr),
    noseType: getOneRandom(noseTypeArr),
    lipsType: getOneRandom(lipsTypeArr),
    height: getOneRandom(heightArr),
    situation: getOneRandom(situationArr),
    peculiarities: getOneRandom(peculiaritiesArr),
  },
  reducers: {
    generate: (state, action) => {
      const step = action.payload
      let newValue = getOneRandom(fieldToArr[step])
      while (newValue === state[step]) newValue = getOneRandom(fieldToArr[step])
      // eslint-disable-next-line no-param-reassign
      state[step] = newValue
    },
  },
})

// Action creators are generated for each case reducer function
export const { generate } = characterSlice.actions
export default characterSlice.reducer
