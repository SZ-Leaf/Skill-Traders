import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import { Signup, Dashboard, Signin, Homepage } from "../pages";
import { Suspense } from "react";
import Layout from "./Layout";

const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>

            <Route index element={<Homepage />} />

            <Route path="signup" element={<Signup />} />

            <Route path="login" element={<Signin />} />

            <Route path="dashboard" element={<Dashboard />} />

          </Route>
        </Routes>

      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
