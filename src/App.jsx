import React, { useContext } from "react";
import Home from "./b_pages/Home";
import FeatureCard from "./a_components/CardPremium";
import ValueContext, { ValueProvider } from "./context/global"; // Импортируй ValueProvider
import { Route, Routes } from "react-router-dom";
import Layout from "./b_pages/Layout";
import Contacts from "./b_pages/Contacts";
import Details from "./b_pages/Details";
import NotFound from "./b_pages/NotFound";
import CardPost from "./a_components/CardPost";

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
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/post" element={<Details />} />
          {/* <Route path="/cardPost" element={<CardPost />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {value && <FeatureCard />}
    </>
  );
};

export default App;
