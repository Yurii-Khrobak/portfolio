import MyInput from '../UI/MyInput';
import MyButton from '../UI/MyButton';

export default function LoginForm({user, setUser, login}) {
  return(
    <form className='form' onSubmit={login}>
      <MyInput
        value={user.login} 
        onChange={e => setUser({...user, login: e.target.value})}
        require='true'
        type='text'
        placeholder='Login...'
      />
      <MyInput
        value={user.password} 
        onChange={e => setUser({...user, password: e.target.value})}
        require='true'
        type='text'
        placeholder='Password...'
      />
      <MyButton>Login</MyButton>
    </form>
  )
}
