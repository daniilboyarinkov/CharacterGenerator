import LangElFactory from "./LangElFactory"

export default (lang = "en") => [
  {
    id: 0,
    title: LangElFactory(lang, "GreetingFormTitle"),
    content: LangElFactory(lang, "GreetingFormContent"),
    type: "first",
  },
  {
    id: 1,
    step: "sex",
    title: LangElFactory(lang, "SFT")("sex"),
    type: "step",
  },
  {
    id: 2,
    step: "race",
    title: LangElFactory(lang, "SFT")("race"),
    type: "step",
  },
  {
    id: 3,
    step: "skinColor",
    title: LangElFactory(lang, "SFT")("skinColor"),
    type: "step",
  },
  {
    id: 4,
    step: "eyeColor",
    title: LangElFactory(lang, "SFT")("eyeColor"),
    type: "step",
  },
  {
    id: 5,
    step: "eyeType",
    title: LangElFactory(lang, "SFT")("eyeType"),
    type: "step",
  },
  {
    id: 6,
    step: "hairLength",
    title: LangElFactory(lang, "SFT")("hairLength"),
    type: "step",
  },
  {
    id: 7,
    step: "hairType",
    title: LangElFactory(lang, "SFT")("hairType"),
    type: "step",
  },
  {
    id: 8,
    step: "hairColor",
    title: LangElFactory(lang, "SFT")("hairColor"),
    type: "step",
  },
  {
    id: 9,
    step: "noseType",
    title: LangElFactory(lang, "SFT")("noseType"),
    type: "step",
  },
  {
    id: 10,
    step: "lipsType",
    title: LangElFactory(lang, "SFT")("lipsType"),
    type: "step",
  },
  {
    id: 11,
    step: "height",
    title: LangElFactory(lang, "SFT")("height"),
    type: "step",
  },
  {
    id: 12,
    step: "situation",
    title: LangElFactory(lang, "SFT")("situation"),
    type: "step",
  },
  {
    id: 13,
    step: "peculiarities",
    title: LangElFactory(lang, "SFT")("peculiarities"),
    type: "step",
  },
  {
    id: 14,
    title: LangElFactory(lang, "ResultTitle"),
    type: "last",
  },
]
