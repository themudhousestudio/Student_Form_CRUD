import React from "react";
import { useEffect, useState } from "react";
import { firestore } from "../firebase_setup/firebase";
import { collection, getDocs } from "@firebase/firestore";
import { Link, Route, Routes } from "react-router-dom";
import StudentDetails from "./StudentDetails";
const StudentList = () => {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    console.log("Loading");
    getStudents();
    console.log(student);
  }, []);

  async function getStudents() {
    const colRef = collection(firestore, "test_data");
    const querySnapshot = await getDocs(colRef);
    const data = querySnapshot.docs.map((d) => ({
      id: d.id,
      ...d.data(),
    }));
    setStudent(data);
  }

  return (
    <>
      <div className="relative container  mx-auto p-6 ">
        {student != null ? (
          student.map((s, index) => {
            return (
              <div
                key={index}
                className="m flex justify-between p-6 mt-1 bg-white border border-gray-200 rounded-lg"
              >
                <div className="flex ">
                  <p className="p-2 text-lg">{s.batch}</p>
                  <p className="p-2 text-lg">{s.name}</p>
                  <p className="p-2 text-lg">{s.father}</p>
                  <p className="p-2 text-lg">{s.email}</p>
                </div>
                <div className="flex ">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded-full">
                    Details
                  </button>
                  <Link
                    to={`/studentdetails/${s.id}`}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Details
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <>
            <div>No Students in Database</div>
          </>
        )}
        <div className="m flex justify-end p-2  bg-white ">
          <Link
            to="/addstudent"
            className="text-xl bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Add
          </Link>
        </div>
      </div>
    </>
  );
};

export default StudentList;
