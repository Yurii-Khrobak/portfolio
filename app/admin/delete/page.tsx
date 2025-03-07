'use client'

import { useState } from 'react';
import axios from 'axios';

import DeleteForm from '@/components/admin/DeleteForm';

export default function Delete() {
  const [name, setName] = useState<string>('');

  const deleteProject = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Fetch projects
      const { data: projects } = await axios.get('/api/projects/');

      // Find the project ID by matching the name (adjust the logic as needed)
      const projectToDelete = projects.find((project: { name: string; id: string }) => project.name === name);
      
      if (projectToDelete) {
        // Delete the project using its ID
        await axios.delete(`/api/projects/${projectToDelete._id}`);
        console.log('Project deleted successfully');
      } else {
        console.log('Project not found');
      }
    } catch (error) {
      console.error('Error deleting project:', error);
    }

    // Reset the name field
    setName('');
  };

  return (
    <main className="admin">
      <h1 className="admin__title title">Delete project</h1>
      <DeleteForm name={name} setName={setName} deleteProject={deleteProject} />
    </main>
  );
};
