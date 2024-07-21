"use client"
// pages/signup.js

import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { provider,auth } from '../../firebase';
import {useRouter} from 'next/navigation'
import { useState } from "react";

export default function Signup() {
 const navigate = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup2 = async () => {
    const res = await signInWithPopup(auth, provider);
    console.log(res);
    alert('Logged in with Google');
    navigate.push('/')
  }
  const handleSignup = async () => {

    await createUserWithEmailAndPassword(auth,email,password)
    //  try {
    //   let res = await fetch('http://localhost:3001', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   res = await res.json();
    //   console.log(res);
    //   alert(`User created: ${res.id}`);
      navigate.push('/')
    // } catch (error) {
    //   console.error('Error:', error);
    //   alert('Error creating user');
    // }
  };

  return (
    <div>
      <h1>Signup</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSignup}>Signup</button>
      <button onClick={handleSignup2}>Signup Google</button>
    </div>
  );
}
