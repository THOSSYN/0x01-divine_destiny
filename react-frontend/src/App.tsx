import { useState } from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Views from "./components/Seachbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Devotional from "./pages/Devotional";
import Prayer from "./pages/Prayer";
import Search from "./pages/Search";
import Event from "./pages/Event";
import ViewAll from "./pages/ViewAll";
import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import "./styles/Search.css";
import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import WelcomePage from "./pages/WelcomePage";
import Dev from "./components/Dev";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="Search" element={<Search />} />
          <Route path="/Devotional" Component={Dev} />
          <Route path="/Event" element={<Event />} />
          <Route path="/Prayer" element={<Prayer />} />
          <Route path="/ViewAll" element={<ViewAll />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/WelcomePage" element={<WelcomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// function App() {
//   return (
//     <div className="app">
//       {/* <Navbar /> */}
//       <Views />
//       <Body />
//     </div>
//   );
// }

// export default App;
