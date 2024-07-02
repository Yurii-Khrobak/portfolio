'use client'

import { useState } from 'react';
import axios from 'axios';

import DeleteForm from '@/components/admin/DeleteForm';

export default function Delete() {
  const [id, setID] = useState<string>('');

  const deleteProject = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await axios.delete(`http://localhost:3000/api/projects/${id}`);
    } catch (error) {
      console.log(error);
    }

    setID('')
  }

  return(
    <main className='admin'>
      <h1 className='admin__title title'>
        Delete project
      </h1>
      <DeleteForm 
        id={id}
        setID={setID}
        deleteProject={deleteProject}
      />
    </main>
  );
};
