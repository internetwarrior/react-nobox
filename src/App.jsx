import React, { useContext } from "react";
import Header from "./a_components/Header";
import Home from "./b_pages/Home";
import FeatureCard from "./a_components/CardPremium";
import ValueContext, { ValueProvider } from "./context/global"; // Импортируй ValueProvider

const App = () => {
  return (
    <ValueProvider>
      {" "}
      {/* Используем провайдер для оборачивания компонентов */}
      <MainComponent />
    </ValueProvider>
  );
};

// Создаем отдельный компонент для основной логики
const MainComponent = () => {
  const { value, setValue } = useContext(ValueContext); // Теперь правильно используем useContext

  return (
    <div>
      <Header />
      <Home />
      {value && <FeatureCard />}
    </div>
  );
};

export default App;
