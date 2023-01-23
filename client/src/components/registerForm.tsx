import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
   
  } from '@chakra-ui/react';
  import { useNavigate ,Link} from 'react-router-dom';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
  interface IRegisterForm {
    username: string;
    firstname : string;
    lastname : string;
    password: string;
    password2: string;
    email :  string;
    submitRegister: () => Promise<void>;
    setfirstname:React.Dispatch<React.SetStateAction<string>>
    setlastname:React.Dispatch<React.SetStateAction<string>>
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    setPassword2: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
  }
  
  const RegisterForm = ( {
    username ,
    firstname,
    lastname,
    password,
    email,
    password2,
    setPassword2,
  submitRegister,
  setfirstname,
  setlastname,
  setUsername,
  setPassword,
  setEmail,
  } : IRegisterForm) =>{
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);


    return (
      // <Flex
      //   minH={'100vh'}
      //   align={'center'}
      //   justify={'center'}
      //   bg={useColorModeValue('gray.50', 'gray.800')}>
      //   <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      //     <Stack align={'center'}>
      //       <Heading fontSize={'4xl'} textAlign={'center'}>
      //         Sign up
      //       </Heading>
      //       <Text fontSize={'lg'} color={'gray.600'}>
      //         to enjoy all of our cool features ✌️
      //       </Text>
      //     </Stack>
      //     <Box
      //       rounded={'lg'}
      //       bg={useColorModeValue('white', 'gray.700')}
      //       boxShadow={'lg'}
      //       p={8}>
      //       <Stack spacing={4}>
      //         <HStack>
      //           <Box>
      //             <FormControl id="firstName" isRequired>
      //               <FormLabel>Username</FormLabel>
      //               <Input 
      //                onChange={(e) => setUsername(e.target.value)}
      //               type='username' 
      //               value={username} />
      //             </FormControl>
      //           </Box>
              
      //         </HStack>
      //         <FormControl id="email" isRequired>
      //           <FormLabel>Email address</FormLabel>
      //           <Input 
      //           onChange={(e) => setEmail(e.target.value)}
      //           value ={email} 
      //           type='email'/>
      //         </FormControl>
      //         <FormControl id="password" isRequired>
      //           <FormLabel>Password</FormLabel>
      //           <InputGroup>
      //             <Input
      //           onChange={(e) => setPassword(e.target.value)}
      //           value={password}
      //              type='password'/>
      //           </InputGroup>
      //         </FormControl>
      //         <FormControl id="password" isRequired>
      //           <FormLabel>Confirm Password</FormLabel>
      //           <InputGroup>
      //             <Input
      //           onChange={(e) => setPassword2(e.target.value)}
      //           value={password2}
      //              type='password'/>
      //           </InputGroup>
      //         </FormControl>
      //         <Stack spacing={10} pt={2}>
      //           <Button
      //           onClick={submitRegister}
      //             loadingText="Submitting"
      //             size="lg"
      //             bg={'blue.400'}
      //             color={'white'}
      //             _hover={{
      //               bg: 'blue.500',
      //             }}>
      //             Sign up
      //           </Button>
      //         </Stack>
      //         <Stack pt={6}>
      //           <Text align={'center'}>
      //             Already a user? <Link to = {'/login'} color={'blue.400'}>Login</Link>
      //           </Text>
      //         </Stack>
      //       </Stack>
      //     </Box>
      //   </Stack>
      // </Flex>
      <Flex
      minH={'100vh'}
      textAlign={"right"}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            إنشاء حساب جديد
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
         
          </Text>
        </Stack>
        <Box
          
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack    spacing={4}>
            <HStack>
              <Box
                >
                <FormControl
               
                id="firstName" isRequired>
                  <FormLabel>الإسم الأول</FormLabel>
                  <Input 
                  onChange={(e) => setfirstname(e.target.value)}
                  value={firstname}
                  type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>الإسم الأخير</FormLabel>
                  <Input 
                    onChange={(e) => setlastname(e.target.value)}
                    value={lastname}
                  type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="username" isRequired>
              <FormLabel>اسم المستخدم</FormLabel>
              <Input 
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="username"/>
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>البريد الإلكتروني</FormLabel>
              <Input 
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>كلمة المرور</FormLabel>
              <InputGroup>
                <Input
                onChange={(e) => setPassword(e.target.value)}
                  value={password}
                type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="password" isRequired>
                 <FormLabel>تأكيد كلمة المرور</FormLabel>
                <InputGroup>
                  <Input
                  onChange={(e) => setPassword2(e.target.value)}
                          value={password2}
                 type='password'/>
                 </InputGroup>
              </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
               onClick={submitRegister}
                loadingText="Submitting"
                size="lg"
                bg={"#b96a7b"}
                color={'white'}
                _hover={{
                  bg: '#6AB9A8',
                }}>
                ارسال التسجيل
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
              لديك حساب ؟ <Link color={'blue.400'} to={''}>تسجيل الدخول</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    );
  }
  export default RegisterForm;
