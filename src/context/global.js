import React, { createContext, useState, useEffect } from "react";

// Создание контекста
const ValueContext = createContext();

// Экспорт контекста
export default ValueContext;

// Провайдер для контекста
export const ValueProvider = ({ children }) => {
  const [value, setValue] = useState(true); // Состояние для value

  // Эффект для каких-либо действий при изменении value (если нужно)
  useEffect(() => {
    // Здесь можно добавить логику, если value изменяется
    console.log("Value изменился:", value);
  }, [value]);

  // Данные для контекста
  const contextData = {
    value,
    setValue,
  };

  return (
    <ValueContext.Provider value={contextData}>
      {children}
    </ValueContext.Provider>
  );
};
