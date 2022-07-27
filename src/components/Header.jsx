import { useContext, memo } from "react"

import ExtraLayout from "./ExtraLayout"

import LangContext from "../contexts/LangContext"

import useDevice from "../hooks/useDevice"
import HelloTextEn from "../texts/en/Hello_text"
import HelloTextFr from "../texts/fr/Hello_text"
import HelloTextRu from "../texts/ru/Hello_text"

import "../css/Header.css"

function Header() {
  const { lang } = useContext(LangContext)
  const device = useDevice()

  return (
    <>
      <div className="Header">
        <img
          draggable={false}
          width={device === "pc" ? 75 : 50}
          src="/CharacterGenerator/svg/icon.svg"
          alt=""
        />
        <h1>
          {(lang === "fr" && HelloTextFr) ||
            (lang === "ru" && HelloTextRu) ||
            HelloTextEn}
        </h1>
        <ExtraLayout />
      </div>
      <hr className="HeaderHr" />
    </>
  )
}

export default memo(Header)
