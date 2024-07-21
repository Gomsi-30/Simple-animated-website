'use client'
import { useState } from 'react';
import { auth } from '../../../firebase';
import { sendSignInLinkToEmail } from 'firebase/auth';

export default function SignIn() {
  const [email, setEmail] = useState('');

  const handleSignIn = async () => {
    const actionCodeSettings = {
        url: 'http://localhost:3000/finishSignUp', // Use your authorized domain
        handleCodeInApp: true,
        
        // dynamicLinkDomain: 'yourapp.page.link' // Ensure this match
    };

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem('emailForSignIn', email);
      alert('Check your email for the sign-in link!');
    } catch (error) {
      console.error('Error sending email: ', error);
      alert('Failed to send sign-in link');
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSignIn}>Send Sign-In Link</button>
    </div>
  );
}
