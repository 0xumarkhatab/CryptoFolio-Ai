import {
  Box,
  Flex,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Center,
  Icon,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import NavbarLink from './NavbarLink'
const Navbar = () => (
  <Center position={'absolute'} top={'2vh'} left={['10vw', '10vw', '30vw']}>
    <Box
      border="4px solid"
      borderRadius="md"
      animation="gradient"
      animationDuration="3s"
      bg="black"
      px={4}
      py={2}
      my={4}
    >
      <Flex
        align="center"
        justify="space-around"
        width={['100vw', '80vw', '80vw', '40vw']}
      >
        <Link href="#" fontSize="xl" fontWeight="bold" color={'white'}>
          D-Fi Arbitrage
        </Link>
        <NavbarLink title={'learn'} link={'#'} />
        <NavbarLink title={'profit'} link={'#'} />
        <NavbarLink title={'about us'} link={'#'} />
      </Flex>
    </Box>
  </Center>
)
export default Navbar
