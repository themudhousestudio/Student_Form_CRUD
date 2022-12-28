import React from "react";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase_setup/firebase";
import { v4 as uuidv4 } from "uuid";

const AddStudent = () => {
  const [studentID, setStudentID] = useState("");
  const [name, setName] = useState("");
  const [father, setFather] = useState("");
  const [batch, setBatch] = useState("");
  const [email, setEmail] = useState("");

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
      email: email,
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
    setEmail("");
  };

  return (
    <>
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto my-auto">
        <form onSubmit={submithandler}>
          <div class="grid grid-cols-2 gap-4">
            <div class="form-group mb-6">
              <input
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="text"
                placeholder="Student ID"
                value={studentID}
                onChange={(e) => setStudentID(e.target.value)}
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group mb-6">
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Father Name"
              value={father}
              onChange={(e) => setFather(e.target.value)}
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Batch"
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="email"
              className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="
          w-full
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
          >
            Save Student
          </button>
        </form>
      </div>
    </>
  );
};

export default AddStudent;
