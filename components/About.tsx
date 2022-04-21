import { CheckIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Box w="100%" my={10}>
      <Flex maxWidth="1000" mx="auto" px={4}>
        <Box position="relative" w="50%" display={{base:"none", md:"inline"}}>
          <Image
            h={320}
            shadow="lg"
            rounded="md"
            w={220}
            objectFit="cover"
            src="https://odysseycleaning.com.au/wp-content/uploads/2019/06/service_img_01-350x350.jpg"
          />
          <Image
            position="absolute"
            top="32"
            left="154px"
            h={320}
            shadow="lg"
            rounded="md"
            w={220}
            objectFit="cover"
            src="https://media-exp1.licdn.com/dms/image/C4D1BAQFmepVVpgnu3g/company-background_10000/0/1609790610458?e=2147483647&v=beta&t=8GIgvZxK-qmqRgGmYy1nQyaBd4V0le1ksldLwxIrj0s"
          />
          <Box backgroundColor="white" zIndex="999" rounded="md" shadow="lg" position="absolute" bottom="160px" left="40px" px={4} py={3}>
              <Flex alignItems="center" gap="2">
                  <Heading color="blue.700" fontSize="24">10+</Heading>
                  <Box fontSize="13" fontWeight="semibold" color="blue.600">
                      <Text>Years</Text>
                      <Text>Experience</Text>
                  </Box>
              </Flex>
          </Box>
        </Box>
        <Flex flexDirection="column" w={{base:"100%", md:"50%"}}>
          <Text color="red">ABOUT US</Text>
          <Heading color="blue.700" fontSize={25}>
            Best Cleaning Services Provider in Sydney
          </Heading>
          <Text py={4} fontSize={14} color="gray.500" lineHeight="1.7">
            We as a top-rated cleaning services provider, do our best to keep
            your home or office clean and tidy. With our years of experience in
            the industry, we know what it takes to make your place feel like a
            home. We offer all kinds of cleaning services.{" "}
          </Text>
          <Flex flexDirection="column" gap={3} px={3}>
            <Flex gap={4} fontWeight="bold" alignItems="center">
              <Box
                border="2px solid red"
                px="1.5"
                color="red"
                fontWeight="bold"
                rounded="full"
              >
                <CheckIcon fontSize="xs" />
              </Box>
              <Text fontSize="14" color="blue.700">
                Loaded with Professional and Honest
              </Text>
            </Flex>
            <Flex gap={4} fontWeight="bold" alignItems="center">
              <Box
                border="2px solid red"
                px="1.5"
                color="red"
                fontWeight="bold"
                rounded="full"
              >
                <CheckIcon fontSize="xs" />
              </Box>
              <Text fontSize="14" color="blue.700">
                Provide the Finest Cleaning
              </Text>
            </Flex>
            <Flex gap={4} fontWeight="bold" alignItems="center">
              <Box
                border="2px solid red"
                px="1.5"
                color="red"
                fontWeight="bold"
                rounded="full"
              >
                <CheckIcon fontSize="xs" />
              </Box>
              <Text fontSize="14" color="blue.700">
                100% Satisfaction Cleaning
              </Text>
            </Flex>
            <Flex gap={4} fontWeight="bold" alignItems="center">
              <Box
                border="2px solid red"
                px="1.5"
                color="red"
                fontWeight="bold"
                rounded="full"
              >
                <CheckIcon fontSize="xs" />
              </Box>
              <Text fontSize="14" color="blue.700">
                We are bonded and
              </Text>
            </Flex>

            <Flex gap={4} fontWeight="bold" alignItems="center">
              <Box
                border="2px solid red"
                px="1.5"
                color="red"
                fontWeight="bold"
                rounded="full"
              >
                <CheckIcon fontSize="xs" />
              </Box>
              <Text fontSize="14" color="blue.700">
                Movein/Move Out Cleaning
              </Text>
            </Flex>
          </Flex>
          <Button w={130} my={8} colorScheme="red" fontSize="13">
            More About Us
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default About;
