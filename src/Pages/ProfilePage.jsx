import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(pageWidth, "first mount ");
    setPageWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (pageWidth > 768) {
      console.log(pageWidth);
      navigate("/user");
    } else {
      console.log(pageWidth);
      navigate("/account");
    }
  }, [pageWidth, navigate]);

  return null;
};

export default ProfilePage;
