import Account from "./accountsPages/Account";
import User from "./accountsPages/User";
import Layout from "../Layout/Layout";
import { useEffect, useState } from "react";

const AccountPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Layout>{windowWidth > 768 ? <User /> : <Account />}</Layout>
    </div>
  );
};

export default AccountPage;
