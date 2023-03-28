import React from "react";
import HomeRoute from "./components/AllRoutes/HomeRoute";
import PrivateRoutes from "./components/Private/Private";
// import { dummy_user } from "./components/Global/ReduxState";
import BusinessRoutes from "./components/AllRoutes/BusinessRoute";
import UserRoutes from "./components/AllRoutes/UserRoutes";
import Notfound from "./components/Notfound/Notfound";
function App() {
  return (
    <div>
      <HomeRoute />
      {/* <PrivateRoutes> */}
      {/* {dummy_user.role === "admin" ? <BusinessRoutes /> : <UserRoutes />} */}
      {/* </PrivateRoutes> */}
      <UserRoutes />
      <BusinessRoutes />
    </div>
  );
}

export default App;
