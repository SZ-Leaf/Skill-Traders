import { BrowserRouter, Routes, Route } from "react-router";
import { Signup, Dashboard, Signin, Homepage } from "../pages";
import { Suspense } from "react";
import Layout from "./Layout";

const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Homepage />
              </Layout>
            }
          />
          <Route
            path="/signup"
            element={
              <Layout>
                <Signup />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <Signin />
              </Layout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Layout>
                {" "}
                <Dashboard />{" "}
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
