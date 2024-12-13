import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LandIngPage from "./components/landing_page/LandingPage";

const App = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isUserLoggedIn ? (<Home />) : (<LandIngPage />)}></Route>
        <Route path="/landing" element={<LandIngPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
