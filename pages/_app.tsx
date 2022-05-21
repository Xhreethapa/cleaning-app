import "../styles/globals.css";
import { ChakraProvider, useBreakpointValue } from "@chakra-ui/react";
import { SessionProvider, useSession } from "next-auth/react";
import { AppProps } from "next/app";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const smVariant = { navigation: "drawer", navigationButton: true };
const mdVariant = { navigation: "sidebar", navigationButton: false };


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

     const [isSidebarOpen, setSidebarOpen] = useState(false);
     const variants = useBreakpointValue({ base: smVariant, md: mdVariant });
   
     const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    
 
  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider>
      <Sidebar
          variant={variants?.navigation}
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}/>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
};

export default MyApp;
