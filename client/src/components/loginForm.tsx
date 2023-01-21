import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    
    Button,
    Heading,
    Text,
    useColorModeValue,
    Img,
  } from '@chakra-ui/react';
import { useNavigate ,Link} from 'react-router-dom';
import Navbar from './navbar/Navbar';

// import Logo from '../img/logo1.png'; 
let Logo1 = require('../img/logo1.png');
let Logo2 = require('../img/logo2.png');
let Logo5 = require('../img/logo5.png');



  
  
    interface ILoginForm {
        username: string;
        password: string;
        submitLogin: () => Promise<void>;
        setUsername: React.Dispatch<React.SetStateAction<string>>;
        setPassword: React.Dispatch<React.SetStateAction<string>>;
      }
      
      const LoginForm = ( {
        username ,
        password,
      submitLogin,
      setUsername,
      setPassword,
   
      } : ILoginForm) =>{
        const navigate = useNavigate();


    return (
      
      <>
      <Navbar links={[{ link: "/login", alias: "تسجيل الدخول" }, { link: "/register", alias: "التسجيل" },]} logo={"https://units.imamu.edu.sa/_layouts/15/NewUnits/img/logo.png"}/>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack bg ={"#6AB9A8"} w={"400px"} spacing={10} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading color={"white"} fontSize={'4xl'}>تسجيل الدخول</Heading>

          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>اسم المستخدم</FormLabel>
                <Input
                  onChange={(e) => setUsername(e.target.value)}
                  type="username"
                  value={username} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>كلمة المرور</FormLabel>
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  value={password} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  
                  <Link
                    to='/register'>ليس لديك حساب ؟ </Link>
                </Stack>
                <Button onClick={submitLogin}
                  bg={'#b96a7b'}
                  color={'white'}
                  _hover={{
                    bg: '#6AB9A8',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex></>
    );
  }
  export default LoginForm;