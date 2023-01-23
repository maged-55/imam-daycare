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

export default function GetTickets() {
    const [type, setType] = useState('');
    const [numberOfTicket, setNumberOfTicket] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);
    const [seatsLocation, setSeatsLocation] = useState('');
    const [image,setImage] = useState('')
  let eventByAdmin_id = useParams()
    const navigate = useNavigate();

    const toast = useToast();
    eventByAdmin_id =eventByAdmin_id.ticketid as any

    const submitTicket = async () => {
      try {  
        const request = await fetch('/api/v1/ticket', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),

          },
          body: JSON.stringify({ type, price, numberOfTicket,seatsLocation,image,eventByAdmin_id}),
        });
  
        const data = await request.json();
  
        if (request.status !== 201) {
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
        navigate('/home');
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

    

      <Stack bg='#2b2b2b' minH={'100vh'} direction={{ base: 'column', md: 'row' }}>

  <Flex flex={1}>
    <Image
      marginLeft={"20%"}
      boxShadow={"-0px 0px 40px 10px black" }
      border={'1px solid black'}
      borderRadius="2xl"
      h={'78%'}
      width={"75%"}
      marginTop={'14%'}
      alt={'Login Image'}
    //   objectFit={'cover'}
      src={
        'https://units.imamu.edu.sa/administrations/riyadhalatfal/PublishingImages/map.jpg'
      }
    />
  </Flex>
  <Flex

 p={8} flex={1} align={'center'} justify={'center'}>
    <Stack          marginRight={"30%"}
 border={'1px solid black'}borderRadius={'2xl'} boxShadow="-50px 0px 40px 10px black"padding={'14'}  color={"white"} spacing={4} w={'300'} maxW={'md'}>
    <Image
    objectFit={"contain"}
    h={"90px"}
    w={"300px"}
    src='https://units.imamu.edu.sa/_layouts/15/NewUnits/img/logo.png'
            ></Image>
      <Heading fontSize={'2xl'}>إضافة بيانات الطفل</Heading>
      <FormControl id="Catogry">
        <Input borderRadius={'2xl'} bg='white' 
              color={'black'} placeholder={'الإسم الأول'}
              onChange={(e) => setType(e.target.value)}  value={type} type="type" />
      </FormControl>
      
           
      <FormControl id="price">
        <Input borderRadius={'2xl'} bg='white' 
              color={'black'} placeholder ={'الإسم الأخير'}
               onChange={(e) => setNumberOfTicket(+e.target.value)}   type="price" />
      </FormControl>
      <FormControl id="price">
        <Input borderRadius={'2xl'} bg='white' 
              color={'black'} placeholder={'تاريخ الميلاد'}
              onChange={(e) => setPrice(+e.target.value)}   type="price" />
      </FormControl>
      <FormControl id="seatsLocation">
        <Input borderRadius={'2xl'} bg='white' 
              color={'black'} placeholder={'ملاحظات إضافية'}
              onChange={(e) => setSeatsLocation(e.target.value)}  value={seatsLocation} type="seatsLocation" />
      </FormControl>
      ç
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
