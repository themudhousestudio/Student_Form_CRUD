import "./App.css";
import { useState, useRef } from "react";
import { Link, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";
import StudentDetails from "./components/StudentDetails";

function App() {
  return (
    <div className="relative container  mx-auto p-6">
      <nav className="flex justify-center space-x-10">
        <Link to="/" className="text-xl">
          Home
        </Link>
        <Link to="/studentlist" className="text-xl">
          List
        </Link>
        <Link to="/addstudent" className="text-xl">
          Add
        </Link>
      </nav>
      <div className="mt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/studentlist" element={<StudentList />} />
          <Route path="/studentdetails:id" element={<StudentDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
