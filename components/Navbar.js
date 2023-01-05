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
  Img,
  Text,
  HStack
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import NavbarLink from './NavbarLink'
import { useState } from 'react'
import ConnectModal from './ConnectModal'
function Navbar () {
  const [showConnectModal,setShowConnectModal]=useState();

  return (
  
  <>

  <Center zIndex={"10"} position={'absolute'} top={'2vh'} left={['2vw', '5vw','5vw', '30vw']} right={['2vw', '5vw','5vw', '30vw']}>
    
    <Box
      border="1px solid"
      borderRadius="20px"
      bg="black"
      px={4}
      py={2}
      my={4}
    >
      <Flex
        align="center"
        justify="space-around"
        width={['90vw', '60vw', '60vw', '40vw']}
      >
        <Link href="#" fontSize="md" fontWeight={"700"} color={'white'}>
                <Img width={"120px"}  src="./logo.png" />  
 
        </Link>
        <NavbarLink title={'learn'} link={'#'} />
        <NavbarLink title={'profit'} link={'#'} />
        <NavbarLink title={'about us'} link={'#'} />
        <Button onClick={()=>setShowConnectModal(prev=>!prev)}>Connect</Button>
      </Flex>
    </Box>

  </Center>
  {
        showConnectModal && <ConnectModal ModalStateToggler={setShowConnectModal} />
      }
  
  </>
  )

}
export default Navbar
