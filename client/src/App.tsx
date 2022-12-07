import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Router from "./components/routes/router";

export const App = () => (
 
 
<ChakraProvider theme={theme}>

<Router/>

</ChakraProvider>







)
