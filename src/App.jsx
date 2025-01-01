// import React, { useEffect } from 'react';
// import { Navbar } from './components/Navbar';
// import {  Routes, Route, Navigate } from 'react-router-dom';
// import  Home from './pages/Home';
// import SignUpPage from './pages/SignUpPage';
// import LoginPage from './pages/LoginPage';
// import ProfilePage from './pages/ProfilePage';
// import SettingsPage from './pages/SettingsPage';
// import { useAuthStore } from './store/useAuthStore';
// import {Loader} from 'lucide-react';

// function App() {
//   const {authUser,checkAuth, isCheckingAuth}=useAuthStore();
//   useEffect(()=>{
//     checkAuth();

//   },[checkAuth]);

//   console.log({authUser});
//   if(isCheckingAuth && !authUser) return(
//     <div className="flex items-center justify-center h-screen">
//       <Loader className="size-10 animate-spin"/>
//     </div>
//   )
//   return (
//   <div>
//   <Navbar/>
//   <Routes>
//     <Route path="/" element={authUser ? <Home />:<Navigate to="/login"/>} />
//     <Route path="/signup" element={authUser ? <SignUpPage /> : <Navigate to="/"/>} />
//     <Route path="/login" element={authUser ? <LoginPage /> : <Navigate to="/"/>} />
//     <Route path="/settings" element={<SettingsPage /> } />
//     <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login"/>  } />
//   </Routes>
//   </div>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import { useAuthStore } from "./store/useAuthStore";
import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";
import { useThemeStore } from "./store/useThemeStore";

function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  const theme = useThemeStore();
  useEffect(() => {
    checkAuth();
  }, []);

  console.log({ authUser });

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  return (
    <div data-theme={theme}>
      <Navbar />
      <Routes>
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}
        />

        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        {/* <Route path="/settings" element={authUser ? <SettingsPage /> : <Navigate to="/login" />} /> */}
        <Route path="/settings" element={<SettingsPage />} />

        <Route
          path="/profile"
          element={authUser ? <ProfilePage /> : <Navigate to="/login" />}
        />

        <Route path="*" element={<Navigate to={authUser ? "/" : "/login"} />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
