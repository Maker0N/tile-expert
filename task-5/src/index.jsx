// ФАЙЛ С КОРНЕВЫМ КОМПОНЕНТОМ ДЛЯ РЕДАКТИРОВАНИЯ ПОДКЛЮЧАЕМЫХ ТЕСТОВЫХ КОМПОНЕНТОВ

import { Fragment, StrictMode } from "react";
import ReactDOM from "react-dom";

import Block1 from "./taskComponents";

function App() {
  return (
    <Fragment>
      <Block1
        mouseEnterCallbak={() => console.log("hi from Block1")}
        imgSrc="https://ohmylook.ua/files/products/42504.290x484.JPG?ce7d3c50d2e66b146f8711dd9eb7af35"
        imgAlt="my picture"
      />
      <Block1
        mouseEnterCallbak={() => console.log("hi from Block 2")}
        content="Magdalena"
      />
      <Block1
        mouseEnterCallbak={() => console.log("hi from Block 3")}
        userData={{ country: "USA", street: "Maskavas" }}
      />
    </Fragment>
  );
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
