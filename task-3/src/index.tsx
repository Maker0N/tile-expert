// ФАЙЛ С КОРНЕВЫМ КОМПОНЕНТОМ. НЕ НУЖДАЕТСЯ В РЕДАКТИРОВАНИИ

import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { MainComponent } from "./taskComponents";

ReactDOM.render(
  <StrictMode>
    <MainComponent />
  </StrictMode>,
  document.getElementById("root")
);
