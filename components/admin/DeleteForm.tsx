import MyInput from '../UI/MyInput';
import MyButton from '../UI/MyButton';

export default function DeleteForm({id, setID, deleteProject}) {
  return(
    <form className='form' onSubmit={deleteProject}>
      <MyInput 
        value={id} 
        onChange={e => setID(e.target.value)}
        require='true'
        type='text'
        placeholder='ID...'
      />
      <MyButton>Delete</MyButton>
    </form>
  )
}
