import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import DiscoveryPage from "./Pages/DiscoveryPage";
import LogInPage from "./Pages/LogInPage";
import SignUpPage from "./Pages/SignUpPage";
import DressDetailPage from "./Pages/DressDetailPage";
import CreateMesonPage from "./Pages/CreateMesonPage";
import ProfilePage from "./Pages/ProfilePage";
import UserPage from "./Pages/UserPage";
import AccountPage from "./Pages/AccountPage";
import Dashboard from "./Pages/DashboardPage";
import CreateProductPage from "./Pages/CreateProductPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditAccountPage from "./Pages/accountsPages/EditAccountPage";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/account/edit" element={<EditAccountPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/discovery" element={<DiscoveryPage />} />
          <Route path="/discovery/:dressId" element={<DressDetailPage />} />
          <Route path="/create-meson" element={<CreateMesonPage />} />
          <Route path="/create-product" element={<CreateProductPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
