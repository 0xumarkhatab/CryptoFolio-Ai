import { Link } from '@chakra-ui/react'
import React from 'react'

function NavbarLink(props) {
  let title = props.title
  let link = props.link
  return (
    <Link textTransform={"capitalize"} href={link} fontSize={["12px","14px","16px"]} fontWeight="bold" color={'white'}>
      {title}
    </Link>
  )
}

export default NavbarLink
