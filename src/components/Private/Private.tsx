import React from "react";
import { useNavigate } from "react-router-dom";
// import { dummy_user } from "../Global/ReduxState";

const PrivateRoutes = ({ children }: any) => {
  // const user: any = {};
  const navigate = useNavigate();

  // if (dummy_user?.role) {
  //   return children;
  // } else {
  //   navigate("/", { replace: true });
  // window.location.reload();
  // }
};

export default PrivateRoutes;
