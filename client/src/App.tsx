import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Router from "./components/routes/router";
import Desktop1 from './components/Desktop1'
import { BrowserRouter } from "react-router-dom";
export const App = () => (

  <BrowserRouter>
 
 
<ChakraProvider theme={theme}>

<Router/>
 <Desktop1/>

</ChakraProvider>
</BrowserRouter>






)
