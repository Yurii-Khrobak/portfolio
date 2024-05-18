import MyInput from '../UI/MyInput';
import MyButton from '../UI/MyButton';
import FileInput from '../UI/FileInput';

export default function UpdateForm({project, setProject, createProject, img, setImg}) {
  return(
    <form className='createForm' onSubmit={createProject}>
      <MyInput
        value={project.id}
        onChange={e => setProject({...project, id: e.target.value})}
        require='true'
        type='text'
        placeholder='ID...'
      />
      <MyInput 
        value={project.name} 
        onChange={e => setProject({...project, name: e.target.value})}
        require='true'
        type='text'
        placeholder='Name...'
      />
      <MyInput 
        value={project.link}
        onChange={e => setProject({...project, link: e.target.value})}
        require='true'
        type='text'
        placeholder='Link...'
      />
      <FileInput onChange={e => setImg(e.target.files[0])}/>
      <MyButton>Update</MyButton>
    </form>
  )
}
