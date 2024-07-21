// components/ImageUpload.js
'use client'
import { useState } from 'react';
import { addDoc, doc,deleteDoc,deleteField, setDoc,collection,updateDoc,serverTimestamp,increment , arrayUnion} from "firebase/firestore";
import {db} from '../../../firebase.js'
const ImageUpload = () => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    // await setDoc(doc(db, "cities", "LA"), {
    //   name: "Los Angeles",
    //   state: "CA",
    //   country: "USA"
    // });


    // const cityRef = doc(db, 'cities', 'LA');
    // setDoc(cityRef, { capital: true }, { merge: true });


// const docData = {
//   stringExample: "Hello world!",
//   booleanExample: true,
//   numberExample: 3.14159265,
//   dateExample: Date.now(),
//   arrayExample: [5, true, "hello"],
//   nullExample: null,
//   objectExample: {
//       a: 5,
//       b: {
//           nested: "foo"
//       }
//   }
// };
// await setDoc(doc(db, "data", "one"), docData);

// const docRef = await addDoc(collection(db, "cities"), {
//   name: "Tokyo",
//   country: "Japan"
// });
// console.log("Document written with ID: ", docRef.id);

// Add a new document with a generated id
// const newCityRef = doc(collection(db, "cities"));
// later...
// await setDoc(newCityRef, data);
await updateDoc(doc(db,'cities','esi'),{
  population:deleteField()
})
// await updateDoc(doc(db,'cities','User'),{more:{hair:'pink'}})

    if (!file) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:3001/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'multipart/form-data',
        },
      });

      const data = await response.json();
      if (response.ok) {
        console.log('File uploaded successfully:', data.url);
      } else {
        console.error('File upload failed:', data);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImageUpload;
