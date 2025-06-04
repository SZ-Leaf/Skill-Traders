import React from 'react';

const Homepage = React.lazy(() => import('./Homepage'));
const Signup = React.lazy(() => import('./Signup'));
const Signin = React.lazy(() => import('./Signin'));
const Dashboard = React.lazy(() => import('./Dashboard'));

export {
   Homepage,
   Signin,
   Signup,
   Dashboard
};