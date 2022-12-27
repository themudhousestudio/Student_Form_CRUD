import React from "react";
import { useEffect, useState } from "react";
import { firestore } from "../firebase_setup/firebase";
import { collection, getDocs } from "@firebase/firestore";

const StudentList = () => {
  const [uid, setUid] = useState([]);
  const [student, setStudent] = useState([]);

  useEffect(() => {
    let _stds = [];
    let _ids = [];
    const colRef = collection(firestore, "test_data");

    getDocs(colRef).then((snapshot) => {
      if (snapshot.empty) {
        console.log("No matching documents.");
        return;
      }
      snapshot.docs.forEach((doc) => {
        setStudent((s) => [...s, doc.data()]);

        _stds.push({ ...doc.data() });
        _ids.push({ ...doc.id });
      });

      // setStudent((prevFiles) => [...prevFiles, _stds]);
    });
    //setStudent(..._stds);
    console.log(student);
    //console.log(_stds);
  }, []);

  return <></>;
};

export default StudentList;
