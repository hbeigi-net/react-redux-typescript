import App from "./app";
import * as ReactDom from "react-dom/client"
import "./style.css"
const root = ReactDom.createRoot(document.querySelector("#root") as HTMLElement); 
root.render(App({})); 