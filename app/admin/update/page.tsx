'use client'

import { useState } from 'react';
import axios from 'axios';

import UpdateForm from '../../../components/admin/UpdateForm';

import { IPortfolioItem } from '../../../types';

export default function Update() {
  const [project, setProject] = setState<IPortfolioItem>({img_base64: '', name: '', link: ''});
  const [img, setImg] = useState<File | null>(null);

  const updateProject = () => {
    try {
      axios.put('http://localhsot:3000/api/project', project);
    } catch (e) {
      console.log(e);
    }
  }

  return(
    <main className='update'>
      <h1 className='update__title title'>
        Update project
      </h1>
      <UpdateForm 
        project={project}
        setProject={setProject}
        updateProject={updateProject}
        img={img}
        setImg={setImg}
      />
    </main>
  );
};
