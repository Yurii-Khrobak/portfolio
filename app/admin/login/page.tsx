'use client'

import { useState } from 'react';
import LoginForm from '@/components/admin/LoginForm';
import { useSession, signIn, signOut } from "next-auth/react";
import MyButton from '@/components/UI/MyButton';

export default function Login() {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState<string>('');
  const { data: session, status } = useSession();

  const handleSignIn = async (provider: string, options?: any) => {
    if (provider === 'credentials') {
      setError('');
      const result = await signIn(provider, options);
      
      if (result?.error) {
        setError('Invalid username or password');
        return result;
      }
    } else {
      // For other providers like Google
      return signIn(provider);
    }
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <main className='admin'>
        <h1 className='admin__title title'>Admin Dashboard</h1>
        <p className='admin__text'>Signed in as {session.user?.name}</p>
        <MyButton
          onClick={() => signOut({callbackUrl: "/"})}
        >
          Sign out
        </MyButton>
      </main>
    );
  }

  return (
    <main className='admin'>
      <h1 className='admin__title title'>Login</h1>
      <LoginForm
        user={user} 
        setUser={setUser} 
        signIn={handleSignIn}
        error={error}
      />
    </main>
  );
}