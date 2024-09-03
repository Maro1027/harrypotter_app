import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PersonDetail from "./pages/PersonDetail";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/harrypotter_app">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/:name"
            element={<PersonDetail />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
