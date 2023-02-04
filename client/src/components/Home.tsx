import {
    Box,
    Button,
    Flex,
    HStack,
    Heading,
    Image,
    Stack,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
import Navbar from './navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
//   import '../App.css'
  export default function SplitScreen() {
    let navigate = useNavigate()
    const [user, setUser] = useState([]);

    const id = localStorage.getItem('id');


    const logout1 = () => {
        if(!localStorage.getItem("token")){
    
        return  <Navbar links={[ { link:"/login", alias:"LOG IN" }, { link: "/register", alias: "REGISTER" },]} logo={'https://media.discordapp.net/attachments/1036228185756541008/1051215907659190422/logo_transparent.png?width=936&height=936'} />
        }else{
          return <Navbar links={[ { link: "/login", alias: "LOG OUT" },]} logo={'https://media.discordapp.net/attachments/1036228185756541008/1051215907659190422/logo_transparent.png?width=936&height=936'} />
    
        }
    
        // localStorage.removeItem('token');
        
    
      };

    return (
        <>
        {(!localStorage.getItem("token"))? <Navbar links={[{ link: "/login", alias: "تسجيل الدخول" }, { link: "/register", alias: "التسجيل" },]} logo={"https://units.imamu.edu.sa/_layouts/15/NewUnits/img/logo.png"} />:<Navbar links={[{ link: "/login", alias: "الملف الشخصي" }]} logo={"https://units.imamu.edu.sa/_layouts/15/NewUnits/img/logo.png"} /> }



        {/* <Navbar links={[{ link: "/login", alias: "تسجيل الدخول" }, { link: "/register", alias: "التسجيل" },]} logo={"https://units.imamu.edu.sa/_layouts/15/NewUnits/img/logo.png"} /> */}
        {(!localStorage.getItem("token")) ? console.log("hello"):null}

       
<HStack



{...(!localStorage.getItem("token"))? <Box></Box>: null}
// display={"flex"}
justifyContent={"space-around"}
// margin={0}
alignItems={"center"}
flexWrap={"wrap"}


>

<Image
           
           boxShadow='dark' p='6' 
           rounded={'lg'}

           h={"570px"}
           w={"650px"}
            
            className='nnn'
                alt={'Login Image'}
                src={"https://cdn.discordapp.com/attachments/1032613167446102037/1039615540492243044/pexels-yan-krukov-8612967.jpg" //   'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                }></Image>
    
            <Stack
            textAlign={"right"}
            spacing={6} width={'250'}>
                <Heading 
                //   textDecoration={"rtl"}
                  
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                    <Text
                    textAlign={"left"}
                   
                   
                        as={'span'}
                        position={'relative'}
                        _after={{
                            content: "''",
                            width: 'full',
                            height: useBreakpointValue({ base: '20%', md: '30%' }),
                            position: 'absolute',
                            bottom: 1,
                            left: 0,
                            bg: '#b96a7b',
                            zIndex: -1,
                        }}>
                            التسجيل في حضانة 
                    </Text>
                    <br />{' '}
                    <Text 
                    
                    fontSize={32}
                    color={'#b96a7b'} as={'span'}>
                    جامعة الإمام محمد بن سعود الإسلامية  
                    </Text>{' '}
                </Heading>
                <Text width={"300px"} fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                    هو موقع تابع لحضانات جامعة الإمام محمد بن سعود الإسلامية يسمح لأولياء الأمور بتسجيل أطفالهم ومتابعة طلباتهم السابقة  
                </Text>
                {(!localStorage.getItem("token"))? 
                            <Link to ={`/register`}>

                            <Button
                            
                            w={"100px"}
                            h={"40px"}
                            // <Link to={`/pageticket/${e.id}`}></Link>
                            // onClick={()=>navigate("/addkid")}
                            colorScheme={'green'}
                            bg={"#b96a7b"}
                            //   rounded={'full'}
                            px={10}
                            _hover={{
                            bg: '#6AB9A8',
                            }}>
                            للتسجيل
                            </Button>
                            </Link> :
                
                
                
                <Link to ={`/addkid/${id}`}>

<Button

w={"100px"}
h={"40px"}
// <Link to={`/pageticket/${e.id}`}></Link>
// onClick={()=>navigate("/addkid")}
colorScheme={'green'}
bg={"#b96a7b"}
//   rounded={'full'}
px={10}
_hover={{
bg: '#6AB9A8',
}}>
تسجيل الابناء
</Button>
</Link>

  }

                

{/* <Link to ={`/addkid`}>

                <Button
                
                w={"100px"}
                h={"40px"}
                // <Link to={`/pageticket/${e.id}`}></Link>
            // onClick={()=>navigate("/addkid")}
              colorScheme={'green'}
              bg={"#b96a7b"}
            //   rounded={'full'}
              px={10}
              _hover={{
                bg: '#6AB9A8',
              }}>
              للتسجيل
            </Button>
            </Link> */}

            </Stack>


    
                </HStack>
       </>
    );
  }