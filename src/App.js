import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import AccountPage from "./Pages/AccountPage";
import DiscoveryPage from "./Pages/DiscoveryPage";
import LogInPage from "./Pages/LogInPage";
import SignUpPage from "./Pages/SignUpPage";
import DressDetailPage from "./Pages/DressDetailPage";
import CreateMesonPage from "./Pages/CreateMesonPage";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/account/chat" element={<AccountPage />} />
          <Route path="/discovery" element={<DiscoveryPage />} />
          <Route path="/discovery/:dressId" element={<DressDetailPage />} />
          <Route path="/create-mezon" element={<CreateMesonPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
