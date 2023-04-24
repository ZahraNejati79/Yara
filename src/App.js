import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import AccountPage from "./Pages/AccountPage";
import DiscoveryPage from "./Pages/DiscoveryPage";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/Login";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/account/chat" element={<AccountPage />} />
          <Route path="/discovery" element={<DiscoveryPage />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
