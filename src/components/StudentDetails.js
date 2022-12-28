import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDoc, doc } from "@firebase/firestore";
import { firestore, storage } from "../firebase_setup/firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { v4 } from "uuid";

const StudentDetails = () => {
  const params = useParams();
  const { id } = params;
  const [student, setStudent] = useState([]);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    // uploadBytes(imageRef, imageUpload).then((snapshot) => {
    //   getDownloadURL(snapshot.ref).then((url) => {
    //     setImageUrls((prev) => [...prev, url]);
    //   });
    // });

    uploadBytes(imageRef, imageUpload).then(() => {
      alert("image Uploaded");
    });
  };

  useEffect(() => {
    console.log("Loading");
    getStudentById(id);
    console.log(student);

    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  // useEffect(() => {

  // }, []);

  async function getStudentById(_id) {
    console.log(_id);
    const docRef = doc(firestore, "test_data", _id);
    try {
      const querySnapshot = await getDoc(docRef);

      if (querySnapshot.exists()) {
        console.log(querySnapshot.data());
        setStudent(querySnapshot.data());
      } else {
        console.log("Document does not exist");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-2xl font-bold mb-2">Student Details</h1>
      <div className="flex space-between" id="student_image">
        <div className="" id="student_image">
          <label class="block mb-2 text-sm font-medium " for="file_input">
            Upload file
          </label>

          <div className="w-32">
            {imageUrls.map((url) => {
              return <img src={url} />;
            })}
          </div>

          <input
            className="block mb-6  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none "
            id="file_input"
            accept="image/*"
            type="file"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded-full"
            onClick={uploadFile}
          >
            Upload Image
          </button>
        </div>
        <div className="" id="student_details">
          <div className="flex items-center mb-4">
            <div className="w-1/4 text-right font-bold pr-4">Student Id:</div>
            <div className="w-3/4">{student.studentID}</div>
          </div>
          <div className="flex items-center mb-4">
            <div className="w-1/4 text-right font-bold pr-4">Name:</div>
            <div className="w-3/4">{student.name}</div>
          </div>
          <div className="flex items-center mb-4">
            <div className="w-1/4 text-right font-bold pr-4">Father:</div>
            <div className="w-3/4">{student.father}</div>
          </div>
          <div className="flex items-center mb-4">
            <div className="w-1/4 text-right font-bold pr-4">Email:</div>
            <div className="w-3/4">{student.email}</div>
          </div>
          <div className="flex items-center mb-4">
            <div className="w-1/4 text-right font-bold pr-4">Batch:</div>
            <div className="w-3/4">{student.batch}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
