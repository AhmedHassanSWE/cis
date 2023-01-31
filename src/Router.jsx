/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route } from "react-router-dom";
import React from "react";
import Form from "./components/Document/Form";
import ProfilePage from "./pages/ProfilePage";
import AboutPage from "./pages/AboutPage";
import SupportPage from "./pages/SupportPage";
import ContactUsPage from "./pages/ContactUsPage";
import HowitworksPage from "./pages/HowitworksPage";

function MyRouter() {
  return (
    <div className="container">
      <>
        <Routes>
          <Route path="/" element={<h1>HOME PAGE</h1>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/how" element={<HowitworksPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </>
    </div>
  );
}

export default MyRouter;
