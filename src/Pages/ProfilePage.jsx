import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [pageWidth, setPageWidth] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setPageWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (pageWidth < 768) {
      navigate("/user");
    } else {
      navigate("/account");
    }
  }, [pageWidth, navigate]);

  return <div>صفحه پروفایل</div>;
};

export default ProfilePage;
