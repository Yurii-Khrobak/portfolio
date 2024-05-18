'use client'

import { useState } from 'react';
import axios from 'axios';

import DeleteForm from '../../../components/admin/DeleteForm';

export default function Delete() {
  const [id, setID] = useState<string>('');

  const deleteProject = async() => {
    try {
      await axios.delete(`http://localhost:3000/api/projects/${id}`);
    } catch (e) {
      console.log(e);
    }
  }

  return(
    <main className='delete'>
      <h1 className='delete__title title'>
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
