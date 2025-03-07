'use client'

import { useState } from 'react';
import axios from 'axios';

import { IPortfolioItem } from '@/types';

import CreateForm from '@/components/admin/CreateForm';

import toBase64 from '@/utils/toBase64';

export default function Create() {
	const [img, setImg] = useState<File | null>(null);
	const [project, setProject] = useState<IPortfolioItem>({img_base64: '', name: '', link: ''});

	const createProject = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const base64 = await toBase64(img);

			const updatedProject = { ...project, img_base64: base64 as string };
			
			await axios.post('/api/projects', JSON.stringify(updatedProject));
		} catch (error) {
			console.log(error);
		}

		setImg(null);
		setProject({ img_base64: '', name: '', link: '' });
	}

	return (
		<main className='admin'>
			<h1 className='admin__title title'>Create project</h1>
			<CreateForm
				project={project}
				setProject={setProject}
				createProject={createProject}
				setImg={setImg}
			/>
		</main>
	);
};