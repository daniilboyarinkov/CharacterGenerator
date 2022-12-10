import colorsArr from "../config/characteristics/colors"
import eyeTypeArr from "../config/characteristics/eyeType"
import hairLengthArr from "../config/characteristics/hairLength"
import hairTypeArr from "../config/characteristics/hairType"
import heightArr from "../config/characteristics/height"
import lipsTypeArr from "../config/characteristics/lipsType"
import noseTypeArr from "../config/characteristics/noseType"
import peculiaritiesArr from "../config/characteristics/peculiarities"
import raceArr from "../config/characteristics/race"
import sexArr from "../config/characteristics/sex"
import situationArr from "../config/characteristics/situation"
import getOneRandom from "../helpers/GetOneRandom"
// import getMultipleRandom from "../helpers/GetMultipleRandom"

// const getThreeRandom = getMultipleRandom.bind(null, 3)
// const getOneRandom = getMultipleRandom.bind(null, 1)

// function Character() {
//   this.sex = "" // пол
//   this.race = "" // раса
//   this.skinColor = "" // цвет кожи
//   this.eyeColor = "" // цвет глаз
//   this.eyeType = "" // тип глаз
//   this.hairLength = "" // длина волос
//   this.hairType = "" // тип волос
//   this.hairColor = "" // цвет волос
//   this.noseType = "" // тип носа
//   this.lipsType = "" // тип рта
//   this.height = "" // рост
//   this.situation = "" // ситуация
//   // особенности
//   this.peculiarities = [] // string array
// }

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

const Character = {
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
  generate: (field) => getOneRandom(fieldToArr[field]),
}

export default Character
