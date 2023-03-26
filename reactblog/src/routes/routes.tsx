import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";

const RoutesApp = () => (
  <Routes>
    <Route path="/home" element={<Home/>}/>
  </Routes>
);