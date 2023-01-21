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
import { useNavigate } from 'react-router-dom';
//   import '../App.css'
  export default function SplitScreen() {
    let navigate = useNavigate()

    return (
        <>
        <Navbar links={[{ link: "/login", alias: "تسجيل الدخول" }, { link: "/register", alias: "التسجيل" },]} logo={"https://units.imamu.edu.sa/_layouts/15/NewUnits/img/logo.png"} />
        
       
<HStack




// display={"flex"}
justifyContent={"space-around"}
margin={0}
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

                <Button
                
                w={"100px"}
                h={"40px"}
            onClick={()=>navigate("/register")}
              colorScheme={'green'}
              bg={"#b96a7b"}
            //   rounded={'full'}
              px={10}
              _hover={{
                bg: '#6AB9A8',
              }}>
              للتسجيل
            </Button>

            </Stack>


    
                </HStack>
       </>
    );
  }