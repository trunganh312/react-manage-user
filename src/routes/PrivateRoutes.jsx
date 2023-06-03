import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { success } = useSelector((state) => state.auth);

  // if (!token) return <div>Bạn k có quyền vào trang này khi không đăng nhập</div>;
  return success ? children : <Navigate to='/sign-in' />;
};

export default PrivateRoutes;
