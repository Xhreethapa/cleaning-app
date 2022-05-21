import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
  Text,
  Flex,
  Tabs,
  TabList,
  Tab,
  Image,
  Heading,
} from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { MdOutlineSettings, MdOutlineSettingsAccessibility, MdOutlineSettingsSuggest } from "react-icons/md";
import {
    RiBilibiliLine,
    RiBilliardsLine,
    RiBillLine,
  RiHomeSmile2Line,
  RiMailSendLine,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";

interface Props {
  onClose: Function;
  isOpen: boolean;
  variant: "drawer" | "sidebar";
}

const SidebarContent = ({ onClick }: { onClick: Function }) => (
  <Flex direction="column" textAlign="left" ml={-5}>
    <Text textAlign="left" fontWeight="semibold" mb={2} ml={5}>
      Menu
    </Text>

    <Tabs
      orientation="vertical"
      borderLeft="1px solid white"
      color="gray.300"
      _focus={{ outline: "none", border: "none" }}
    >
      <TabList>
       <Flex flexDirection="column" gap={3}>
       <Tab
          _focus={{ outline: "none" }}
          _selected={{
            color: "red",
            borderLeft: "4px solid blue",
            borderColor: "red.500",
          }}
        >
          <Flex
            alignItems="center"
            gap={3}
            onClick={() => onClick}
            bg="none"
            fontWeight="semibold"
          >
            <Box fontSize="18px">
              {" "}
              <RiHomeSmile2Line />{" "}
            </Box>
            <Text>Home</Text>
          </Flex>
        </Tab>
        <Tab
          _focus={{ outline: "none" }}
          _selected={{
            color: "red",
            borderLeft: "4px solid blue",
            borderColor: "red.500",
          }}
        >
          <Flex
            alignItems="center"
            gap={3.5}
            onClick={() => onClick}
            bg="none"
            fontWeight="semibold"
          >
            <Box fontSize="18px">
              {" "}
              <RiMailSendLine />{" "}
            </Box>
            <Text>Inbox</Text>
          </Flex>
        </Tab>
        <Tab
          _focus={{ outline: "none" }}
          _selected={{
            color: "red",
            borderLeft: "4px solid blue",
            borderColor: "red.500",
          }}
        >
          <Flex
            alignItems="center"
            gap={4}
            pl="3"
            onClick={() => onClick}
            bg="none"
            fontWeight="semibold"
          >
            <Box fontSize="18px">
              {" "}
              <RiMoneyDollarCircleLine />{" "}
            </Box>
            <Text>Quotes</Text>
          </Flex>
        </Tab>
        <Tab
          _focus={{ outline: "none" }}
          _selected={{
            color: "red",
            borderLeft: "4px solid blue",
            borderColor: "red.500",
          }}
        >
          <Flex
            alignItems="center"
            gap={4}
            pl="4"
            onClick={() => onClick}
            bg="none"
            fontWeight="semibold"
          >
            <Box fontSize="18px">
              {" "}
              <RiBilibiliLine />
            </Box>
            <Text>Invoices</Text>
          </Flex>
        </Tab>
        <Tab
          _focus={{ outline: "none" }}
          _selected={{
            color: "red",
            borderLeft: "4px solid blue",
            borderColor: "red.500",
          }}
        >
          <Flex
            alignItems="center"
            gap={4}
            pl="4"
            onClick={() => onClick}
            bg="none"
            fontWeight="semibold"
          >
            <Box fontSize="18px">
              {" "}
              <MdOutlineSettingsSuggest />
            </Box>
            <Text>Settings</Text>
          </Flex>
        </Tab>
        
       </Flex>
      </TabList>
    </Tabs>
    
    <Box position="absolute" bottom="0" onClick={() => signOut()} w="70%" mx="auto" >
      Logout
    </Box>
  </Flex>
);

const Profile = () => {
    return (
        <Flex alignItems="center" gap={6} mx={6}>
            <Image 
                src="https://english.onlinekhabar.com/wp-content/uploads/2022/05/Balendra-Shaha-Balen-Sketch-1024x624-1.jpg"
                h={12}
                w={12}
                rounded="full"

                />
            <Box my={3}>
                <Heading fontSize="18px">AR Shakir</Heading>
                <Text fontWeight="semibold" fontSize="13px" mt={1}>Sr. Admin Manager</Text>
            </Box>



        </Flex>

    )
}
const Sidebar = ({ isOpen, variant, onClose }: Props) => {
    const { data: session } = useSession();
//   const session = true;
  if (session) {
    return variant === "sidebar" ? (
      <Box
        position="fixed"
        left={0}
        p={5}
        w="700px"
        top={0}
        h="100%"
        bg="#dfdfdf"
      >
        <SidebarContent onClick={onClose} />
      </Box>
    ) : (
      <Drawer isOpen={true} placement="left" onClose={() => onClose}>
        <DrawerOverlay>
          <DrawerContent p={-8}>
            <DrawerCloseButton display={{ base: "none", md: "inline" }} />
            <DrawerHeader>Elite-ADMIN 1.0</DrawerHeader>
            <Profile/>
            <DrawerBody>
              <SidebarContent onClick={onClose} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }
  return null;
};

export default Sidebar;
