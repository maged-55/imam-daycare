import { Stack,Box, Image,Text, VStack, HStack, Img, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Interface } from 'readline';
export default function PageTicket() {
  const [req, setReq] =useState([]as any) ;
  let {ticketid }=useParams();

 
console.log('====================================');
console.log(ticketid);
console.log('====================================');
  // getByNameEventByAdminHandler
  const fetchData = async() => {
    try{

    
     await fetch(`/api/v1/req`,{
      // ${ticketid}
      method:"GET" ,
      headers: {
                 Authorization: 'Bearer ' + localStorage.getItem('token'),
              },
     })
          .then((response) => response.json())
          .then((data) => setReq(data));

    }catch(e){
      console.log(e)
    }
  }
 

  useEffect(() => {
    fetchData();
  },[])
  

// let a;
//   const ff =()=>{
//     user.map((e:any) =>(
//       a=e.image
//     ))
//   }
//   ff();
     // eslint-disable-next-line @typescript-eslint/no-unused-expressions


  return (
    <div>

      <Stack w={'100%'}>
        <Box w={'100%'}>
          <Box  
         
          border={"2px"}
overflow="hidden"
height={"45vh"}
width={"100%"}
 >
          {/* <Image src='https://cdn.discordapp.com/attachments/1032613167446102037/1051708389924802600/image.png' */}
          {/* <Img  src={user.image} 
           height={'100vh'} width={'100%'}  objectFit={'fill'}  marginTop={"0"} filter={'auto'} boxShadow={"-50px 0px 40px 10px #A259FF"} brightness='55%'></Img> */}
          
          </Box>
          <Link to={'/home'}>  <Button marginLeft={"80%"} marginTop={"10"} width={"15%"} shadow={'dark-lg'} bg={'#a259ff'}>back</Button></Link>

           <Box shadow={'dark-lg'} margin={'0 auto 10px auto'} width={'80%'} padding={'2'} display={'flex'} justifyContent={'space-between'}
            border={'2px solid gray'} borderRadius={'7'} color={'gray'} marginTop={'10'}>

              <Box>
            <Text>CATOGARY</Text>
            </Box>
            <Box w={'30%'} display={'flex'} justifyContent={'space-between'}>
            <Text>PRICE</Text>
            <Text>Seats Location</Text>
            <Text>Number Of Tickets</Text>
            </Box>
           </Box>
           

            
     <div>
      
      {req.map((e: any) => (
              <VStack >
                
                <Box bg={'#393737'} shadow={'dark-lg'} margin={'0 auto 10px auto'} width={'80%'} padding={'2'} display={'flex'} justifyContent={'space-between'}
                     borderRadius={'7'} color={'white'} marginTop={'1.5'}>
                      <Box>
                        <HStack 
                       
                        
                        key={e.id} bg={'#393737'}>
                          
                    <Text bg={'#393737'} fontSize={'2xl'}>{e.type}</Text>
                    </HStack>
                    </Box>
                    <Box bg={'#393737'} marginTop={'2'} w={'30%'} display={'flex'} justifyContent={'space-between'}>
                    <Text bg={'#393737'}>{e.fname}$</Text>
      
                    <Text bg={'#393737'}>{e.lname}</Text>
                    <Text bg={'#393737'}>{e.image}</Text>
      
                    {/* <Link to =""> */}
                    <Link to ={`/d/${e.id}`}>  <Button shadow={'dark-lg'} bg={'#a259ff'}>Buy</Button> </Link>
                    {/* </Link> */}
                    </Box>
                    </Box>
                </VStack> 
      ))}
           </div>
           {/* ffk */}
           {/* <AddTickets ticketid={ticketid} /> */}
           
        </Box>
        
      </Stack>
    
    </div>
    
  )
}
