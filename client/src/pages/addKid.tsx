import React from 'react'
import {
    Box,
    Flex,
    Heading,
    VStack,
    Text,
    Input,
    Button,
    useToast,
    HStack,
    Checkbox,
    FormControl,
    FormLabel,
    Stack,
    Image,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { Link, useNavigate, useParams } from 'react-router-dom';
import UpLoadImag from '../components/UpLoadImag';
import Navbar from '../components/navbar/Navbar';

export default function GetTickets() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [numberOfTicket, setNumberOfTicket] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);
    const [seatsLocation, setSeatsLocation] = useState('');
    const [image,setImage] = useState('')
  let user_id = useParams()
    const navigate = useNavigate();

    const toast = useToast();
    user_id =user_id.id as any
    console.log(user_id);
    

    const submitTicket = async () => {
      try {  
        const request = await fetch('/api/v1/req', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
            

          },
          body: JSON.stringify({ fname, lname, dateOfBirth,image,user_id}),
        });

        //print first line


  
        const data = await request.json();
  
        if (request.status !== 200) {
          toast({
            title: data.message,
            status: 'error',
            duration: 2000,
            position: 'top',
          });
          return;
        }
  
        toast({
          title: data.message,
          status: 'success',
          duration: 2000,
          position: 'top',
        });
        navigate('/');
      } catch (error) {
        toast({
          title: 'Server Error !',
          status: 'error',
          duration: 2000,
          position: 'top',
        });
      }
    };
  
    return (
      <>

              {/* <Navbar links={[  { link: "/register", alias: "REGISTER" }, { link: "/login", alias: "LOG IN" },]} logo={'https://media.discordapp.net/attachments/1036228185756541008/1051215907659190422/logo_transparent.png?width=936&height=936'} /> */}
              <Navbar links={[{ link: "/login", alias: "تسجيل الدخول" }, { link: "/register", alias: "التسجيل" },]} logo={"https://units.imamu.edu.sa/_layouts/15/NewUnits/img/logo.png"}/>

    

      <Stack bg='#fff' minH={'100vh'} direction={{ base: 'column', md: 'row' }}>

  <Flex flex={1}>
    <Image
    //   marginLeft={"20%"}
    //   boxShadow={"-0px 0px 40px 10px black" }
    //   border={'1px solid black'}
    //   borderRadius="2xl"
    //   h={'78%'}
    //   width={"75%"}
    //   marginTop={'14%'}
    //   alt={'Login Image'}
    //   objectFit={'cover'}
      src={
        'https://units.imamu.edu.sa/administrations/riyadhalatfal/PublishingImages/map.jpg'
      }
    />
  </Flex>
  <Flex
  

 p={8} flex={1} align={'center'} justify={'center'}>
    <Stack   
     bg={"#6AB9A8"}
        //    marginRight={"30%"}
 border={'1px solid black'}borderRadius={'2xl'} padding={'1.75%'}  color={"white"} spacing={4} w={'300'} maxW={'md'}
 >
    <Image
    objectFit={"contain"}
    h={"90px"}
    w={"300px"}
   
    src='https://units.imamu.edu.sa/_layouts/15/NewUnits/img/logo.png'
            ></Image>
      <Heading color={"white"} fontSize={'2xl'}>إضافة بيانات الطفل</Heading>
      <FormControl id="Catogry">
        <Input borderRadius={'2xl'} bg='white' 
              color={'black'} placeholder={'الإسم الأول'}
              onChange={(e) => setFname(e.target.value)}  value={fname} type="name" />
      </FormControl>
      
           
      <FormControl id="price">
        <Input borderRadius={'2xl'} bg='white' 
              color={'black'} placeholder ={'الإسم الأخير'}
               onChange={(e) => setLname(e.target.value)} value={lname}   type="name" />
      </FormControl>
      <FormControl id="price">
        <Input borderRadius={'2xl'} bg='white' 
              color={'black'} placeholder={'تاريخ الميلاد'}
              onChange={(e) => setDateOfBirth(e.target.value)} value={dateOfBirth}   type="date" />
      </FormControl>
      {/* <FormControl id="seatsLocation">
        <Input borderRadius={'2xl'} bg='white' 
              color={'black'} placeholder={'ملاحظات إضافية'}
              onChange={(e) => setSeatsLocation(e.target.value)}  value={seatsLocation} type="seatsLocation" />
      </FormControl> */}
      
      <FormControl id="image">
              <UpLoadImag></UpLoadImag>
      </FormControl>
    
      <Stack spacing={6}>

        <Button  borderRadius={"2xl"} boxShadow={"-10px 0px 30px 10px black" } onClick={submitTicket} bg={'#A259FF'} variant={'solid'}>
        submit
        </Button>
       
      </Stack>
    </Stack>
  </Flex>
</Stack>

</>
    );
  };
