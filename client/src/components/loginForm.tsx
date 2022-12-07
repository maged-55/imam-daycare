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
  } from '@chakra-ui/react';
import { useNavigate ,Link} from 'react-router-dom';
  
  
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
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>UserName</FormLabel>
                <Input
                   onChange={(e) => setUsername(e.target.value)}
                 type="username"
                value={username} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
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
                  <Checkbox>Remember me</Checkbox>
                  <Link 
                   to='/register'>don't hava a account?</Link>
                </Stack>
                <Button onClick={submitLogin}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  export default LoginForm;