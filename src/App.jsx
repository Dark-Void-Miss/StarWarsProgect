import { Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Characters } from "./components/Chatacters/Characters";

function App() {
  
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Characters" element={<Characters  />} />
        </Routes>
  
    </>
  );
}

export default App;
