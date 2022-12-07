import { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterForm from '../components/registerForm';

export const RegisterPage = ()=> {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const toast = useToast();
    const navigate = useNavigate();
    const [password2, setPassword2] = useState('');



    const submitRegister = async()=> {
        try {
            if(password!==password2){
                toast({
                    title: "Please enter your correct password",
                    status: 'error',
                    duration: 3000,
                    position: 'top',
                  });
                  return;
                
            }
            const request = await fetch('/api/v1/user/register', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password, email }),
              });
        
              const data = await request.json();
        
              if (request.status !== 201) {
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
            //   navigate('/login');
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
    <RegisterForm
    username={username}
    setUsername={setUsername}
    setPassword={setPassword}
    password={password}
    password2={password2}
    setPassword2={setPassword2}
    setEmail={setEmail}
    email={email}
    submitRegister={submitRegister}
  />



   
  )
}
