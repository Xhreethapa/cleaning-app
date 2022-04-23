import { Box, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";

interface Props {
  active: number;
  setActive: any;
}

const Three = ({ active, setActive }: Props) => {
  return (
    <Box color="gray.500">
      <Flex
        gap={3}
        color="red.300"
        alignItems="center"
        justifyContent="right"
        textAlign="right"
        onClick={() => active > 0 && setActive(active - 1)}
      >
        <MdKeyboardBackspace />
        <Text fontSize="14">Go back</Text>
      </Flex>
      <Heading fontSize="16" fontWeight="semibold">
        Contact Details
      </Heading>

      <Flex flexDirection="column" gap={3} my={4}>
        <Input size="sm" placeholder="Full name" />
        <Input size="sm" placeholder="Email " />
        <Input size="sm" placeholder="Phone" />
        <Input size="sm" placeholder="Address" />
      </Flex>
    </Box>
  );
};

export default Three;
