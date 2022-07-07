import React, { ReactNode, useEffect } from "react"
import {
  Box,
  Flex,
  Icon,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaMoon, FaSun, FaYoutube, FaLink } from 'react-icons/fa'
import { Item } from "framer-motion/types/components/Reorder/Item";
const Links = [
  {
    "name": "Blogs",
    "link": "/blogs"
  },
  {
    "name": "Showcase",
    "link": "/showcase"
  },
  {
    "name": "About",
    "link": "/about"
  }
];
const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { toggleColorMode: toggleMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  useEffect(() => {
    toggleMode();
    console.log("wowoo")
  }, [])

  // const [theme, setTheme] = useState("dark");
  return (
    <React.Fragment>
      <>
        <Box
          style={{ "backdropFilter": "blur(6px)" }}
          bg={useColorModeValue('#FFFFFFCC', '#171923CC')} px={4} w='full' sx={{ "position": "fixed" }}
          // _hover={{ color: 'gray.600' }}
          fontSize='1.15em'
        >
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <Box>sudhirattri.com</Box>
            </HStack>
            <HStack spacing={8} alignItems={'center'}>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                {Links.map((it) => (
                  <NavLink to={it.link} key={it.link}>{it.name}</NavLink>
                ))}
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
              {useColorModeValue('#light', '#dark')}
              <IconButton
                size='md'
                fontSize='lg'
                aria-label={`Switch to ${text} mode`}
                variant='ghost'
                color='current'
                mr={{ base: '3', md: '5' }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
              <Menu>
                <MenuButton
                  mr={{ base: '0', md: '3' }}
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Icon
                    as={FaLink}
                    display='block'
                    transition='color 0.2s'
                    w='5'
                    h='5'
                    _hover={{ color: 'gray.600' }}
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>Blogs</MenuItem>
                  <MenuItem>Showcase</MenuItem>
                  <MenuDivider />
                  <MenuItem>About</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link.link}>{link.name}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </>
    </React.Fragment>
  )
}