import enGreetingForm from "../texts/en/GreetingForm.json"
import frGreetingForm from "../texts/fr/GreetingForm.json"
import ruGreetingForm from "../texts/ru/GreetingForm.json"

export default (lang) => [
  {
    id: 0,
    title:
      (lang === "fr" && frGreetingForm.title) ||
      (lang === "ru" && ruGreetingForm.title) ||
      enGreetingForm.title,
    content:
      (lang === "fr" && frGreetingForm.content) ||
      (lang === "ru" && ruGreetingForm.content) ||
      enGreetingForm.content,
    type: "first",
  },
  {
    id: 1,
    title: "Title 1",
    type: "regular",
  },
  {
    id: 2,
    title: "Title 2",
    type: "regular",
  },
  {
    id: 3,
    title: "Title 3",
    type: "regular",
  },
  {
    id: 4,
    title: "Last Slide",
    type: "last",
  },
]
