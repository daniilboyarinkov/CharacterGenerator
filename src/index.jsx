import ReactDOM from "react-dom/client"

import { Provider } from "react-redux"

import store from "./app/store"
import App from "./components/App"

import "./index.css"
import "./css/normalize.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
