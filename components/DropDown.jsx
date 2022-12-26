import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import React from 'react'

function DropDown(props) {
  let title = props.title
  let links = props.links

  return (
    <Menu>
      <MenuButton color={'white'}>
        {title} <ChevronDownIcon />
      </MenuButton>
      <MenuList>
        {links?.map((item) => {
          return (
            <MenuItem>
              <Link href={item.link}>{item.title}</Link>
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}

export default DropDown
