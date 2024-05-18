'use client'

import { useState } from 'react';
import axios from 'axios';

import {IPortfolioItem} from '../../../types';
import toBase64 from '../../../utils/toBase64';

import CreateForm from '../../../components/admin/CreateForm';

export default function Create() {
  const [img, setImg] = useState<File | null>(null);
  const [project, setProject] = useState<IPortfolioItem>({img_base64: '', name: '', link: ''})

  const createProject = async(e) => {
    e.preventDefault();

    const base64 = await toBase64(img);

    setProject(project => ({...project, img_base64: base64}));

    try {
      await axios.post('http://localhost:3000/api/projects', project.toJSON());
    } catch (e) {
      console.log(e)
    }

    setImg(null);
    setProject({img_base64: '', name: '', link: ''});
  }

  return(
    <main className='create'>
      <h1 className='create__title title'>
        Create project
      </h1>
      <CreateForm
        project={project} 
        setProject={setProject} 
        createProject={createProject} 
        img={img}
        setImg={setImg}
      />
    </main>
  )
}
