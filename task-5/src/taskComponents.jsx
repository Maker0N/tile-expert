// ФАЙЛ ДЛЯ РЕДАКТИРОВАНИЯ И ТЕСТИРОВАНИЯ КОМПОНЕНТОВ ИЗ ТЕСТОВОГО ЗАДАНИЯ

import { useState } from "react";

const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt, content, userData }) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallbak();
  };

  if (content) {
    return (
      <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
        <p>{content}</p>
      </div>
    );
  }

  if (userData) {
    return (
      <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
        <address>
          country: {userData.country}, street: {userData.street}
        </address>
      </div>
    );
  }

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      <img src={imgSrc} alt={imgAlt} />
    </div>
  );
};

export default Block1
