import "../styles/globals.css";
import { Box, ChakraProvider, useBreakpointValue } from "@chakra-ui/react";
import { SessionProvider, useSession } from "next-auth/react";
import { AppProps } from "next/app";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import Header from "../components/Header";

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
          variant={"drawer"}
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
        />
        <Box ml={!variants?.navigationButton ? 200 : 0}>
          <Header
            showSidebarButton={variants?.navigationButton}
            onShowSidebar={toggleSidebar}
          />
        </Box>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
};

export default MyApp;
