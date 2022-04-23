import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { FaBed, FaToilet } from "react-icons/fa";
import {
  Gi3DStairs,
  GiBookshelf,
  GiHomeGarage,
  GiRedCarpet,
  GiStoneWall,
  GiVacuumCleaner,
} from "react-icons/gi";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { MdBedroomParent, MdOutlineBalcony } from "react-icons/md";
import { RiFridgeFill } from "react-icons/ri";
import { MdKeyboardBackspace } from "react-icons/md";
import BlindsClosedSharpIcon from "@mui/icons-material/BlindsClosedSharp";
import { BsInfoCircleFill } from "react-icons/bs";
import { SiAdobelightroom } from "react-icons/si";
interface Props {
  active: number;
  setActive: any;
}

const Two = ({ active, setActive }: Props) => {
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
        Select AddOn(s)
      </Heading>
      <Box
        h={300}
        overflow="auto"
        my={3}
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "24px",
          },
        }}
      >
        <Flex alignItems="center" justifyContent="space-between" my={2} mt={4}>
          <Flex alignItems="center">
            <Box fontSize="20" color="blue.700" p={3} rounded="md">
              <MdOutlineBalcony />
            </Box>
            <Box>
              <Flex
                alignItems="center"
                gap={1}
                fontSize="15"
                color="blue.700"
                fontWeight="semibold"
              >
                Balcony
                <Box fontSize="11px" color="gray.500">
                  <BsInfoCircleFill />
                </Box>
              </Flex>
              <Text>$99</Text>
            </Box>
          </Flex>
          <Flex alignItems="center" gap={3}>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
            >
              <GrFormSubtract />
            </Text>
            <Text color="blue.700" fontWeight="semibold">
              0
            </Text>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
            >
              <GrFormAdd />
            </Text>
          </Flex>
        </Flex>

        <Flex alignItems="center" justifyContent="space-between" my={2} mt={4}>
          <Flex alignItems="center">
            <Box fontSize="20" color="blue.700" p={3} rounded="md">
              <FaToilet />
            </Box>
            <Box>
              <Flex
                alignItems="center"
                gap={3}
                fontSize="15"
                color="blue.700"
                fontWeight="semibold"
              >
                Separate Toilet{" "}
                <Box fontSize="11px" color="gray.500">
                  <BsInfoCircleFill />
                </Box>
              </Flex>
              <Text>$99</Text>
            </Box>
          </Flex>
          <Flex alignItems="center" gap={3}>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
            >
              <GrFormSubtract />
            </Text>
            <Text color="blue.700" fontWeight="semibold">
              0
            </Text>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
            >
              <GrFormAdd />
            </Text>
          </Flex>
        </Flex>

        <Flex alignItems="center" justifyContent="space-between" my={2} mt={4}>
          <Flex alignItems="center">
            <Box fontSize="20" color="blue.700" p={3} rounded="md">
              <GiBookshelf />
            </Box>
            <Box>
              <Flex
                alignItems="center"
                gap={3}
                fontSize="15"
                color="blue.700"
                fontWeight="semibold"
              >
                Study Room{" "}
                <Box fontSize="11px" color="gray.500">
                  <BsInfoCircleFill />
                </Box>
              </Flex>
              <Text>$99</Text>
            </Box>
          </Flex>
          <Flex alignItems="center" gap={3}>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
            >
              <GrFormSubtract />
            </Text>
            <Text color="blue.700" fontWeight="semibold">
              0
            </Text>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
            >
              <GrFormAdd />
            </Text>
          </Flex>
        </Flex>

        <Flex alignItems="center" justifyContent="space-between" my={2} mt={4}>
          <Flex alignItems="center">
            <Box fontSize="20" color="blue.700" p={3} rounded="md">
              <GiStoneWall />
            </Box>
            <Box>
              <Flex
                alignItems="center"
                gap={3}
                fontSize="15"
                color="blue.700"
                fontWeight="semibold"
              >
                Wall Wash{" "}
                <Box fontSize="11px" color="gray.500">
                  <BsInfoCircleFill />
                </Box>
              </Flex>
              <Text>$99</Text>
            </Box>
          </Flex>
          <Flex alignItems="center" gap={3}>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
            >
              <GrFormSubtract />
            </Text>
            <Text color="blue.700" fontWeight="semibold">
              0
            </Text>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
            >
              <GrFormAdd />
            </Text>
          </Flex>
        </Flex>

        <Flex alignItems="center" justifyContent="space-between" my={2} mt={4}>
          <Flex alignItems="center">
            <Box fontSize="20" color="blue.700" p={3} rounded="md">
              <RiFridgeFill />
            </Box>
            <Box>
              <Flex
                alignItems="center"
                gap={3}
                fontSize="15"
                color="blue.700"
                fontWeight="semibold"
              >
                Fridge/Freezer{" "}
                <Box fontSize="11px" color="gray.500">
                  <BsInfoCircleFill />
                </Box>
              </Flex>
              <Text>$99</Text>
            </Box>
          </Flex>
          <Flex alignItems="center" gap={3}>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
            >
              <GrFormSubtract />
            </Text>
            <Text color="blue.700" fontWeight="semibold">
              0
            </Text>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
            >
              <GrFormAdd />
            </Text>
          </Flex>
        </Flex>

        <Flex alignItems="center" justifyContent="space-between" my={2} mt={4}>
          <Flex alignItems="center">
            <Box fontSize="20" color="blue.700" p={3} rounded="md">
              <GiHomeGarage />
            </Box>
            <Box>
              <Flex
                alignItems="center"
                gap={3}
                fontSize="15"
                color="blue.700"
                fontWeight="semibold"
              >
                Garage{" "}
                <Box fontSize="11px" color="gray.500">
                  <BsInfoCircleFill />
                </Box>
              </Flex>
              <Text>$99</Text>
            </Box>
          </Flex>
          <Flex alignItems="center" gap={3}>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
            >
              <GrFormSubtract />
            </Text>
            <Text color="blue.700" fontWeight="semibold">
              0
            </Text>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
            >
              <GrFormAdd />
            </Text>
          </Flex>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between" my={2} mt={4}>
          <Flex alignItems="center">
            <Box fontSize="20" color="blue.700" p={3} rounded="md">
              <BlindsClosedSharpIcon />
            </Box>
            <Box>
              <Flex
                alignItems="center"
                gap={3}
                fontSize="15"
                color="blue.700"
                fontWeight="semibold"
              >
                Blinds{" "}
                <Box fontSize="11px" color="gray.500">
                  <BsInfoCircleFill />
                </Box>
              </Flex>
              <Text>$99</Text>
            </Box>
          </Flex>
          <Flex alignItems="center" gap={3}>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
            >
              <GrFormSubtract />
            </Text>
            <Text color="blue.700" fontWeight="semibold">
              0
            </Text>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
            >
              <GrFormAdd />
            </Text>
          </Flex>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between" my={2} mt={4}>
          <Flex alignItems="center">
            <Box fontSize="20" color="blue.700" p={3} rounded="md">
              <MdBedroomParent />
            </Box>
            <Box>
              <Flex
                alignItems="center"
                gap={3}
                fontSize="15"
                color="blue.700"
                fontWeight="semibold"
              >
                Carpet Steam Bedroom{" "}
                <Box fontSize="11px" color="gray.500">
                  <BsInfoCircleFill />
                </Box>
              </Flex>
              <Text>$99</Text>
            </Box>
          </Flex>
          <Flex alignItems="center" gap={3}>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
            >
              <GrFormSubtract />
            </Text>
            <Text color="blue.700" fontWeight="semibold">
              0
            </Text>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
            >
              <GrFormAdd />
            </Text>
          </Flex>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between" my={2} mt={4}>
          <Flex alignItems="center">
            <Box fontSize="20" color="blue.700" p={3} rounded="md">
              <SiAdobelightroom />
            </Box>
            <Box>
              <Flex
                alignItems="center"
                gap={3}
                fontSize="15"
                color="blue.700"
                fontWeight="semibold"
              >
                Carpet Steam Living Room{" "}
                <Box fontSize="11px" color="gray.500">
                  <BsInfoCircleFill />
                </Box>
              </Flex>
              <Text>$99</Text>
            </Box>
          </Flex>
          <Flex alignItems="center" gap={3}>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
            >
              <GrFormSubtract />
            </Text>
            <Text color="blue.700" fontWeight="semibold">
              0
            </Text>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
            >
              <GrFormAdd />
            </Text>
          </Flex>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between" my={2} mt={4}>
          <Flex alignItems="center">
            <Box fontSize="20" color="blue.700" p={3} rounded="md">
              <Gi3DStairs />
            </Box>
            <Box>
              <Flex
                alignItems="center"
                gap={3}
                fontSize="15"
                color="blue.700"
                fontWeight="semibold"
              >
                Carpet Steam Stairs{" "}
                <Box fontSize="11px" color="gray.500">
                  <BsInfoCircleFill />
                </Box>
              </Flex>
              <Text>$99</Text>
            </Box>
          </Flex>
          <Flex alignItems="center" gap={3}>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
            >
              <GrFormSubtract />
            </Text>
            <Text color="blue.700" fontWeight="semibold">
              0
            </Text>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
            >
              <GrFormAdd />
            </Text>
          </Flex>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between" my={2} mt={4}>
          <Flex alignItems="center">
            <Box fontSize="20" color="blue.700" p={3} rounded="md">
              <GiRedCarpet />
            </Box>
            <Box>
              <Flex
                alignItems="center"
                gap={3}
                fontSize="15"
                color="blue.700"
                fontWeight="semibold"
              >
                Carpet Steam Hallway{" "}
                <Box fontSize="11px" color="gray.500">
                  <BsInfoCircleFill />
                </Box>
              </Flex>
              <Text>$99</Text>
            </Box>
          </Flex>
          <Flex alignItems="center" gap={3}>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
            >
              <GrFormSubtract />
            </Text>
            <Text color="blue.700" fontWeight="semibold">
              0
            </Text>
            <Text
              fontSize={14}
              backgroundColor="gray.100"
              px={2.5}
              py={2.5}
              rounded="md"
            >
              <GrFormAdd />
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Two;
