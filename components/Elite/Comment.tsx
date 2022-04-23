import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { StarIcon } from "@chakra-ui/icons";
const Comment = () => {
  return (
    <Box w="100%" backgroundColor="whitesmoke" zIndex="999" py={10}>
     <Box maxWidth="1000" mx="auto" px={4}>
     <Text color="red" fontSize="15">
        TESTIMONIALS
      </Text>
      <Heading fontSize="28" color="blue.700">
        What Says Our Happy Customers
      </Heading>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={5000}
      >
       <Flex>
       <Box position="relative" backgroundColor="white" m="5" mx="auto" py={8} px={8} shadow="xl" rounded="md" my={14} maxWidth={400}>
          <Flex alignItems="center" gap={3} >
            <Image src="https://english.onlinekhabar.com/wp-content/uploads/2021/12/Karishma-Manandhar-SEE-2075.jpg" borderRadius="full" h={12} maxW={12} objectFit="cover" />
            <Flex flexDirection="column" ml={2} textAlign="left">
              <Heading fontSize="19" color="blue.700">Roseanne</Heading>
              <Text fontSize="13" color="gray.400">Campsie, Sydney</Text>
              <Flex color="yellow.300" fontSize="13" my={2} gap={1}>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
              </Flex>
            </Flex>
          </Flex>
          <Text fontSize="13" textAlign="left" mt={5} mb={2} fontWeight="light" color="gray.400" >
          Very positive first experience with Elite Cleaning services. Rajat was great. The team did a great job with my end of lease cleaning. All surfaces left shiny and gleaming. They were very polite and listened to all my requests carefully. I got my full bond refunded. Thanks to the team.
          </Text>
          <Image src="/elite.png" h={20} maxW={20} position="absolute" top="4" right="10"/>
          </Box>

          <Box display={{base:"none", md:"inline"}} position="relative" backgroundColor="white" m="5" mx="auto" py={8} px={8} shadow="xl" rounded="md" my={14} maxWidth={400}>
          <Flex alignItems="center" gap={3} >
            <Image src="https://english.onlinekhabar.com/wp-content/uploads/2021/12/Karishma-Manandhar-SEE-2075.jpg" borderRadius="full" h={12} maxW={12} objectFit="cover" />
            <Flex flexDirection="column" ml={2} textAlign="left">
              <Heading fontSize="19" color="blue.700">Simran Thapa</Heading>
              <Text fontSize="13" color="gray.400">Manly, Sydney</Text>
              <Flex color="yellow.300" fontSize="13" my={2} gap={1}>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
              </Flex>
            </Flex>
          </Flex>
          <Text fontSize="13" textAlign="left" mt={5} mb={2} fontWeight="light" color="gray.400" >
          Recently got end of lease cleaning, totally satisfied with the job, guys are really helpful, will definately recommend this service. Thanks Mate!.
          </Text>
          <Image src="/elite.png" h={20} maxW={20} position="absolute" top="4" right="10"/>
          </Box>
       </Flex>
       

       <Flex>
       <Box position="relative" backgroundColor="white" m="5" mx="auto" py={8} px={8} shadow="xl" rounded="md" my={14} maxWidth={400}>
          <Flex alignItems="center" gap={3} >
            <Image src="data:image/jpeg;base64,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" borderRadius="full" h={12} maxW={12} objectFit="cover" />
            <Flex flexDirection="column" ml={2} textAlign="left">
              <Heading fontSize="19" color="blue.700">Milan Adhikari</Heading>
              <Text fontSize="13" color="gray.400">Flemington, Sydney</Text>
              <Flex color="yellow.300" fontSize="13" my={2} gap={1}>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
              </Flex>
            </Flex>
          </Flex>
          <Text fontSize="13" textAlign="left" mt={5} mb={2} fontWeight="light" color="gray.400" >
          Abhishek was professional and best at his service. His team did a splendid job on the end of the lease cleaning. He took extra effort to make sure that there are no comments from the property agent. Thanks guys.          </Text>
          <Image src="/elite.png" h={20} maxW={20} position="absolute" top="4" right="10"/>
          </Box>

          <Box display={{base:"none", md:"inline"}} position="relative" backgroundColor="white" m="5" mx="auto" py={8} px={8} shadow="xl" rounded="md" my={14} maxWidth={400}>
          <Flex alignItems="center" gap={3} >
            <Image src="https://english.onlinekhabar.com/wp-content/uploads/2021/12/Karishma-Manandhar-SEE-2075.jpg" borderRadius="full" h={12} maxW={12} objectFit="cover" />
            <Flex flexDirection="column" ml={2} textAlign="left">
              <Heading fontSize="19" color="blue.700">Albert Decosta</Heading>
              <Text fontSize="13" color="gray.400">Surry Hills, Sydney</Text>
              <Flex color="yellow.300" fontSize="13" my={2} gap={1}>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
              </Flex>
            </Flex>
          </Flex>
          <Text fontSize="13" textAlign="left" mt={5} mb={2} fontWeight="light" color="gray.400" >
            Elite has changed the persceition of cleaning requires amount of detailing which they have. In the least amount of effort. Thanks mate!
          </Text>
          <Image src="/elite.png" h={20} maxW={20} position="absolute" top="4" right="10"/>
          </Box>
       </Flex>


       <Flex>
       <Box position="relative" backgroundColor="white" m="5" mx="auto" py={8} px={8} shadow="xl" rounded="md" my={14} maxWidth={400}>
          <Flex alignItems="center" gap={3} >
            <Image src="https://media-exp1.licdn.com/dms/image/C4D03AQENe1MlVSvLvg/profile-displayphoto-shrink_200_200/0/1580043489902?e=1653523200&v=beta&t=WGt3zFagrAE_jXCjAf5Barvy53NgrAHbqAkBoQHm-_w" borderRadius="full" h={12} maxW={12} objectFit="cover" />
            <Flex flexDirection="column" ml={2} textAlign="left">
              <Heading fontSize="19" color="blue.700">Ashraf Khan</Heading>
              <Text fontSize="13" color="gray.400">Auburn, Sydney</Text>
              <Flex color="yellow.300" fontSize="13" my={2} gap={1}>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
              </Flex>
            </Flex>
          </Flex>
          <Text fontSize="13" textAlign="left" mt={5} mb={2} fontWeight="light" color="gray.400" >
          They were a delight to work with, and his service was of exceptional quality. When someone enjoys what they do, it shows in the quality and outcome of their work. It comes highly recommended.          </Text>
          <Image src="/elite.png" h={20} maxW={20} position="absolute" top="4" right="10"/>
          </Box>

          <Box display={{base:"none", md:"inline"}} position="relative" backgroundColor="white" m="5" mx="auto" py={8} px={8} shadow="xl" rounded="md" my={14} maxWidth={400}>
          <Flex alignItems="center" gap={3} >
            <Image src="https://english.onlinekhabar.com/wp-content/uploads/2021/12/Karishma-Manandhar-SEE-2075.jpg" borderRadius="full" h={12} maxW={12} objectFit="cover" />
            <Flex flexDirection="column" ml={2} textAlign="left">
              <Heading fontSize="19" color="blue.700">Jia Chaterjee</Heading>
              <Text fontSize="13" color="gray.400">Concord, Sydney</Text>
              <Flex color="yellow.300" fontSize="13" my={2} gap={1}>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
              </Flex>
            </Flex>
          </Flex>
          <Text fontSize="13" textAlign="left" mt={5} mb={2} fontWeight="light" color="gray.400" >
            Elite has changed the persceition of cleaning requires amount of detailing which they have. In the least amount of effort. Thanks mate!
          </Text>
          <Image src="/elite.png" h={20} maxW={20} position="absolute" top="4" right="10"/>
          </Box>
       </Flex>
      </Carousel>
     </Box>
    </Box>
  );
};

export default Comment;
