/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '../components/loginForm';

export const LoginPage = ()=> {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const toast = useToast();
    const navigate = useNavigate();


    const submitLogin= async()=> {
        try {
           
            const request = await fetch('/api/v1/user/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password}),
              });
        
              const data = await request.json();
        
              if (request.status !== 200) {
                toast({
                  title: data.message,
                  status: 'error',
                  duration: 3000,
                  position: 'top',
                });
                return;
              }
        
              toast({
                title: data.message,
                status: 'success',
                duration: 3000,
                position: 'top',
              });
              localStorage.setItem('token', data.token);
              navigate('/');
            } catch (error) {
              toast({
                title: 'Server Error !',
                status: 'error',
                duration: 3000,
                position: 'top',
              });
            }
          };
    
  return (
    <LoginForm
    username={username}
    setUsername={setUsername}
    setPassword={setPassword}
    password={password}
    submitLogin={submitLogin}

  />
  )
}
