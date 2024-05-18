'use client'

import { useState } from 'react';

import LoginForm from '../../../components/admin/LoginForm';

export default function Login() {
  const [user, setUser] = useState({imgPath: '', name: '', link: ''})

  const login = (user) => {
    
  }

  return(
    <main className='login'>
      <h1 className='login__title title'>Login</h1>
      <LoginForm user={user} setUser={setUser} login={login}/>
    </main>
  )
}
