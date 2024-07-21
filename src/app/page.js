'use client'
import { useState, useEffect } from 'react';

import { onAuthStateChanged } from 'firebase/auth';

import {auth} from "../../firebase";
import {useRouter} from 'next/navigation'
export default function Home() {
  const [users,setUser] = useState(null)
  const navigate = useRouter()
  
  useEffect(()=> {
    onAuthStateChanged(auth, (user)=>{
      
      if(user===null){
        navigate.push('/task')
      }else{
        console.log(user)
        setUser(user)
      }
    })
  },[users])

  return (
    <div className="text-red-200">
   {!users ? <h1> Loading... </h1> :

       <button onClick={() => auth.signOut()}> Logout </button>
   }
    </div>
  );
}
