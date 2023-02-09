/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route } from "react-router-dom";
import React from "react";
import Form from "./components/Document/Form";
import ProfilePage from "./pages/ProfilePage";
import AboutPage from "./pages/AboutPage";
import SupportPage from "./pages/SupportPage";
import ContactUsPage from "./pages/ContactUsPage";
import HowitworksPage from "./pages/HowitworksPage";
import DocumentTypes from "./components/Document/DocumentTypes";

function MyRouter() {
  return (
    <div className="container">
      <>
        <Routes>
          {/* <Route path="/" element={<h1>HOME PAGE</h1>} /> */}
          <Route path="/" element={<ProfilePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/how" element={<HowitworksPage />} />
          <Route path="/form/:id" element={<Form />} />
          <Route path="/documents" element={<DocumentTypes />} />
        </Routes>
      </>
    </div>
  );
}

export default MyRouter;
