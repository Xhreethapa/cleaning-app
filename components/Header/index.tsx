import { Box, Center, IconButton, Text, Flex } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

interface Props {
  onShowSidebar: React.MouseEventHandler<HTMLButtonElement> | undefined
  showSidebarButton?: boolean
}
1
const Header = ({ showSidebarButton = true, onShowSidebar }: Props) => {
  return (
    <Flex bg="tomato" p={4} color="white" justifyContent="center">
      <Box flex="1">
        {showSidebarButton && (
          <IconButton
            icon={<ChevronRightIcon w={8} h={8} />}
            colorScheme="blackAlpha"
            aria-label="lk"
            variant="outline"
            onClick={onShowSidebar} 
          />
        )}
      </Box>
      <Center flex="1" h="40px">
        <Text fontSize="xl">Page Title</Text>
      </Center>
      <Box flex="1" />
    </Flex>
  )
}

export default Header
