import { memo } from "react"

import "../css/Footer.css"

function Footer() {
  return (
    <div className="Footer">
      <h2>Made by ©BitDittoWit</h2>
      <a href="https://github.com/daniilboyarinkov/">Github</a>
    </div>
  )
}

export default memo(Footer)
