import React from "react";
import { useState } from "react";
import {
  addDoc,
  collection,
  setDoc,
  deleteDoc,
  doc,
  query,
  onSnapshot,
} from "firebase/firestore";
import { firestore } from "../firebase_setup/firebase";
import { v4 as uuidv4 } from "uuid";

const AddStudent = () => {
  const [studentID, setStudentID] = useState("");
  const [name, setName] = useState("");
  const [father, setFather] = useState("");
  const [batch, setBatch] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please Add Student");
      return;
    }

    const ref = collection(firestore, "test_data");
    let data = {
      uuid: uuidv4(),
      studentID: studentID,
      name: name,
      father: father,
      batch: batch,
    };
    try {
      addDoc(ref, data);
    } catch (err) {
      console.log(err);
    }
    setStudentID("");
    setName("");
    setFather("");
    setBatch("");
  };

  return (
    <>
      <form onSubmit={submithandler}>
        <div className="form-control mt-2">
          <label>Student ID</label>
          <input
            type="text"
            placeholder="Student ID"
            value={studentID}
            onChange={(e) => setStudentID(e.target.value)}
          />
        </div>
        <div className="form-control mt-2">
          <label>Name</label>
          <input
            type="text"
            placeholder="Add Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control mt-2">
          <label>Father</label>
          <input
            type="text"
            placeholder="Add Father"
            value={father}
            onChange={(e) => setFather(e.target.value)}
          />
        </div>
        <div className="form-control mt-2">
          <label>Batch</label>
          <input
            type="text"
            placeholder="Add Father"
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Save Student"
          className="p-3 px-6 text-white bg-red-700 rounded-full mt-2 baseline"
        />
      </form>
    </>
  );
};

export default AddStudent;
