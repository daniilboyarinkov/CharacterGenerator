import enContactForm from "../texts/en/ContactForm.json"
import enGreetingForm from "../texts/en/GreetingForm.json"
import HelloTextEn from "../texts/en/Hello_text"
import enResultForm from "../texts/en/ResultForm.json"
import enStepForm from "../texts/en/StepForm.json"
import frContactForm from "../texts/fr/ContactForm.json"
import frGreetingForm from "../texts/fr/GreetingForm.json"
import HelloTextFr from "../texts/fr/Hello_text"
import frResultForm from "../texts/fr/ResultForm.json"
import frStepForm from "../texts/fr/StepForm.json"
import frUIelements from "../texts/fr/UIelemenets.json"
import ruContactForm from "../texts/ru/ContactForm.json"
import ruGreetingForm from "../texts/ru/GreetingForm.json"
import HelloTextRu from "../texts/ru/Hello_text"
import ruResultForm from "../texts/ru/ResultForm.json"
import ruStepForm from "../texts/ru/StepForm.json"
import ruUIelements from "../texts/ru/UIelemenets.json"

// TODO: magic strings must be replaced with Symbols

const LangElFactory = (lang, el) => {
  switch (el) {
    case "HelloText":
      switch (lang) {
        case "fr":
          return HelloTextFr
        case "ru":
          return HelloTextRu
        default:
          return HelloTextEn
      }
    case "GreetingFormTitle":
      switch (lang) {
        case "fr":
          return frGreetingForm.title
        case "ru":
          return ruGreetingForm.title
        default:
          return enGreetingForm.title
      }
    case "SF": // StepForm
      return (field) =>
        (lang === "fr" && frStepForm[field]) ||
        (lang === "ru" && ruStepForm[field]) ||
        enStepForm[field]
    case "SFT": // StepFormTitles
      return (step) =>
        (lang === "fr" && frStepForm.titles[step]) ||
        (lang === "ru" && ruStepForm.titles[step]) ||
        enStepForm.titles[step]
    case "CF": // ContactForm
      return (field) =>
        (lang === "fr" && frContactForm[field]) ||
        (lang === "ru" && ruContactForm[field]) ||
        enContactForm[field]
    case "ResultTitle":
      switch (lang) {
        case "fr":
          return frResultForm.title
        case "ru":
          return ruResultForm.title
        default:
          return enResultForm.title
      }
    case "ResultSubTitle":
      switch (lang) {
        case "fr":
          return frResultForm.subtitle
        case "ru":
          return ruResultForm.subtitle
        default:
          return enResultForm.subtitle
      }
    case "ResultContentKeys":
      return (key) =>
        (lang === "fr" && frResultForm.resultContentKeys[key]) ||
        (lang === "ru" && ruResultForm.resultContentKeys[key]) ||
        enResultForm.resultContentKeys[key]
    case "GreetingFormContent":
      switch (lang) {
        case "fr":
          return frGreetingForm.content
        case "ru":
          return ruGreetingForm.content
        default:
          return enGreetingForm.content
      }
    case "UI":
      return (element) =>
        (lang === "fr" && frUIelements[element]) ||
        (lang === "ru" && ruUIelements[element]) ||
        element
    default:
      return ""
  }
}

export default LangElFactory
