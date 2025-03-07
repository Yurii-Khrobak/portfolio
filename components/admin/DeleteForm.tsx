import MyInput from '../UI/MyInput';
import MyButton from '../UI/MyButton';

export default function DeleteForm({name, setName, deleteProject}) {
  return(
    <form className='form' onSubmit={deleteProject}>
      <MyInput 
        value={name} 
        onChange={e => setName(e.target.value)}
        require='true'
        type='text'
        placeholder='Name...'
      />
      <MyButton type='submit'>Delete</MyButton>
    </form>
  )
}
