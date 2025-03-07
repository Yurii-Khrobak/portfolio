import { FormEvent, ChangeEvent } from 'react';
import MyInput from '../UI/MyInput';
import MyButton from '../UI/MyButton';

interface LoginFormProps {
  user: {
    username: string;
    password: string;
  };
  setUser: React.Dispatch<React.SetStateAction<{
    username: string;
    password: string;
  }>>;
  signIn: (provider: string, options?: any) => Promise<any>;
  error?: string;
}

export default function LoginForm({ user, setUser, signIn, error }: LoginFormProps) {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    await signIn('credentials', {
      username: user.username,
      password: user.password,
      redirect: false,
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUser({
      ...user,
      [id]: value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      
      <MyInput
        id="username"
        type="text"
        placeholder="Username"
        value={user.username}
        onChange={handleInputChange}
        required
      />
      
      <MyInput
        id="password"
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={handleInputChange}
        required
      />
      
      <MyButton type="submit">
        Sign In
      </MyButton>
    </form>
  );
}