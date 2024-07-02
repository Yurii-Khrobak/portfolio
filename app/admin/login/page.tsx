'use client'

import { useState } from 'react';
import { useRouter } from "next/navigation";

import { signIn } from 'next-auth/react';

import LoginForm from '@/components/admin/LoginForm';

export default  function Login() {
  const router = useRouter();

  const [user, setUser] = useState({login: '', password: ''});

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response: any = await signIn("credentials", {
        login: user.login,
        password: user.password,
        redirect: false
      });
      console.log({ response });
      if (!response?.error) {
        router.push("/");
        router.refresh();
      }

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Login Successful", response);
    } catch (error: any) {
      console.error("Login Failed:", error);
    }
  }

  return(
    <main className='admin'>
      <h1 className='admin__title title'>Login</h1>
      <LoginForm
        user={user} 
        setUser={setUser} 
        login={login}
      />
    </main>
  )
}
