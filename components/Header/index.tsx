import { Box, Center, IconButton, Text, Flex, Input } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { AiOutlineLogout, AiOutlineSearch } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
interface Props {
  onShowSidebar: React.MouseEventHandler<HTMLButtonElement> | undefined;
  showSidebarButton?: boolean;
}
1;
const Header = ({ showSidebarButton = true, onShowSidebar }: Props) => {
  return (
    <Flex p={4} justifyContent="center" borderBottom="1px solid gray" borderColor="gray.300" py={6}>
      <Box flex="1">
        {showSidebarButton && (
          <IconButton
            icon={<ChevronRightIcon w={8} h={8} />}
            colorScheme="blackAlpha"
            aria-label="lk"
            _focus={{ outline: "none"}}
            variant="outline"
            onClick={onShowSidebar}
          />
        )}
      </Box>
      <Flex h="40px">
        <Flex
          alignItems="center"
          justifyContent="center"
          bg="gray.200"
          rounded="xl"
          px={3}
          fontSize="xl"
          pl={4}
        >
          <AiOutlineSearch />
          <Input
            _focus={{ outline: "none" }}
            border="none"
            _placeholder={{fontSize:"14px"}}
            placeholder="Search"
          ></Input>
        </Flex>
        <Flex gap={2} ml={3}>
          <Flex
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            _hover={{color:"blue.500"}}
            bg="gray.200"
            rounded="full"
            p={2}
            px={3}
          >
            {" "}
            <BsBell />
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            _hover={{color:"blue.500"}}
            bg="gray.200"
            rounded="full"
            p={2}
            px={3}
          >
            <CgProfile />
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            _hover={{color:"blue.500"}}
            bg="gray.200"
            rounded="full"
            p={2}
            px={3}
          >
            <AiOutlineLogout />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
