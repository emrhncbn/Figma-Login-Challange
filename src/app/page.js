"use client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "@/components/App";
import SignUp from "@/components/Signup";
import Farmanalytics from "@/components/Farmanalytics";
import Livestock from "@/components/Livestock";
import Dashboard from "@/components/Dashboard";
import Addfarm from "@/components/Addfarm";
import Addcrop from "@/components/Addcrop";
import Addcattle from "@/components/Addcattle";

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/farmanalytics" element={<Farmanalytics />} />
        <Route path="/livestock" element={<Livestock />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addfarm" element={<Addfarm />} />
        <Route path="/addcrop" element={<Addcrop />} />
        <Route path="/addcattle" element={<Addcattle />} />
      </Routes>
    </BrowserRouter>
  )
}
