'use client'

import { useState } from 'react';
import axios from 'axios';

import UpdateForm from '@/components/admin/UpdateForm';

import { IPortfolioItem } from '@/types';

import toBase64 from '@/utils/toBase64';

export default function Update() {
  const [img, setImg] = useState<File | null>(null);
  const [project, setProject] = useState<IPortfolioItem>({img_base64: '', name:'', link: '', _id: ''});

  const updateProject = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const base64 = await toBase64(img);

			const updatedProject = { ...project, img_base64: base64 as string };

      await axios.put('/api/projects', JSON.stringify(updatedProject));
    } catch (error) {
      console.log(error);
    }

    setImg(null)
		setProject({ img_base64: '', name: '', link: '', _id: '' })
  }

  return(
    <main className='admin'>
      <h1 className='admin__title title'>
        Update project
      </h1>
      <UpdateForm 
        project={project}
        setProject={setProject}
        updateProject={updateProject}
        setImg={setImg}
      />
    </main>
  );
};
