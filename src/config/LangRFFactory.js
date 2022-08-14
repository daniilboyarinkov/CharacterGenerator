import ColoursToFrenchConverter from "../converters/translations/French/ColoursToFrench.json"
import EyeTypeToFrenchConverter from "../converters/translations/French/EyeTypeToFrench.json"
import HairLengthToFrenchConverter from "../converters/translations/French/HairLengthToFrench.json"
import HairTypeToFrenchConverter from "../converters/translations/French/HairTypeToFrench.json"
import heightToFrenchConverter from "../converters/translations/French/heightToFrench.json"
import LipsTypeToFrenchConverter from "../converters/translations/French/LipsTypeToFrench.json"
import NoseTypeToFrenchConverter from "../converters/translations/French/NoseTypeToFrench.json"
import PeculiaritiesToFrenchConverter from "../converters/translations/French/PeculiaritiesToFrench.json"
import RaceToFrenchConverter from "../converters/translations/French/RaceToFrench.json"
import SexToFrenchConverter from "../converters/translations/French/SexToFrench.json"
import SituationToFrenchConverter from "../converters/translations/French/SituationToFrench.json"

import ColoursToRussianConverter from "../converters/translations/Russian/ColoursToRussian.json"
import EyeTypeToRussianConverter from "../converters/translations/Russian/EyeTypeToRussian.json"
import HairLengthToRussianConverter from "../converters/translations/Russian/HairLengthToRussian.json"
import HairTypeToRussianConverter from "../converters/translations/Russian/HairTypeToRussian.json"
import heightToRussianConverter from "../converters/translations/Russian/heightToRussian.json"
import LipsTypeToRussianConverter from "../converters/translations/Russian/LipsTypeToRussian.json"
import NoseTypeToRussianConverter from "../converters/translations/Russian/NoseTypeToRussian.json"
import PeculiaritiesToRussianConverter from "../converters/translations/Russian/PeculiaritiesToRussian.json"
import RaceToRussianConverter from "../converters/translations/Russian/RaceToRussian.json"
import SexToRussianConverter from "../converters/translations/Russian/SexToRussian.json"
import SituationToRussianConverter from "../converters/translations/Russian/SituationToRussian.json"

/**
 * translates step value to needed lang
 * @param {string} lang current lang
 * @param {string} step current step
 * @param {string} value actual value to translate
 * @returns string on needed lang
 */
const LangRFFactory = (lang, step, value) => {
  switch (step) {
    case "color":
      switch (lang) {
        case "fr":
          return ColoursToFrenchConverter[value]
        case "ru":
          return ColoursToRussianConverter[value]
        default:
          return value
      }
    case "eyeType":
      switch (lang) {
        case "fr":
          return EyeTypeToFrenchConverter[value]
        case "ru":
          return EyeTypeToRussianConverter[value]
        default:
          return value
      }
    case "hairLength":
      switch (lang) {
        case "fr":
          return HairLengthToFrenchConverter[value]
        case "ru":
          return HairLengthToRussianConverter[value]
        default:
          return value
      }
    case "hairType":
      switch (lang) {
        case "fr":
          return HairTypeToFrenchConverter[value]
        case "ru":
          return HairTypeToRussianConverter[value]
        default:
          return value
      }
    case "height":
      switch (lang) {
        case "fr":
          return heightToFrenchConverter[value]
        case "ru":
          return heightToRussianConverter[value]
        default:
          return value
      }
    case "lipsType":
      switch (lang) {
        case "fr":
          return LipsTypeToFrenchConverter[value]
        case "ru":
          return LipsTypeToRussianConverter[value]
        default:
          return value
      }
    case "noseType":
      switch (lang) {
        case "fr":
          return NoseTypeToFrenchConverter[value]
        case "ru":
          return NoseTypeToRussianConverter[value]
        default:
          return value
      }
    case "peculiarities":
      switch (lang) {
        case "fr":
          return PeculiaritiesToFrenchConverter[value]
        case "ru":
          return PeculiaritiesToRussianConverter[value]
        default:
          return value
      }
    case "race":
      switch (lang) {
        case "fr":
          return RaceToFrenchConverter[value]
        case "ru":
          return RaceToRussianConverter[value]
        default:
          return value
      }
    case "sex":
      switch (lang) {
        case "fr":
          return SexToFrenchConverter[value]
        case "ru":
          return SexToRussianConverter[value]
        default:
          return value
      }
    case "situation":
      switch (lang) {
        case "fr":
          return SituationToFrenchConverter[value]
        case "ru":
          return SituationToRussianConverter[value]
        default:
          return value
      }
    default:
      return ""
  }
}

export default LangRFFactory
