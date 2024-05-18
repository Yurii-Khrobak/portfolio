import MyInput from '../UI/MyInput';
import MyButton from '../UI/MyButton';

export default function LoginForm() {
  return(
    <form className='loginForm'>
      <MyInput type='text' placeholder='Login...'/>
      <MyInput type='text' placeholder='Password...'/>
      <MyButton>Login</MyButton>
    </form>
  )
}
