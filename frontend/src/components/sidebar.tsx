import React, { ReactNode, useEffect, useState } from "react"
import { Heading, Box, Center, List, ListIcon, ListItem, Divider, Icon, createIcon, Flex, Link, Image, useColorModeValue } from "@chakra-ui/react"
import { FaGithub, FaLinkedin, FaMailBulk, FaDiscord } from 'react-icons/fa'
// import { logosvg } from '../images/logosvg.svg';

const UpDownIcon = createIcon({
  displayName: 'UpDownIcon',
  viewBox: '0 0 200 200',
  d: 'M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0',
})

export default function Sidebar() {
  return (
    <React.Fragment>
      <Box
        aria-label='Main Navigation'
        as='nav'
        pos='sticky'
        overscrollBehavior='contain'
        top='6.5rem'
        w='210px'
        h='calc(100vh - 16.25rem)'
        pr='2'
        pb='6'
        pl='8'
        pt='4'
        overflowY='auto'
        className='sidebar-content'
        flexShrink={0}
        display={{ base: 'none', md: 'block' }}
      >
        <Box mt={5} mb={5}></Box>
        <Image
          margin={"auto"}
          borderRadius='full'
          boxSize='150px'
          src='https://via.placeholder.com/150'
          alt='Dan Abramov'
        />
        <Box mt={5} mb={5}></Box>
        <Center>
          <Heading as='h5' size='sm'>Quick Links</Heading>
        </Center>
        <Box mt={5} mb={5}></Box>
        <Center>
          <List spacing={2}>
            <ListItem>
              <ListIcon as={FaGithub} color='white.500' viewBox='0 0 300 250' verticalAlign="center" />
              <Link color='white.500' href='https://github.com/sudhirattri/' isExternal>
                <span style={{ "verticalAlign": "top", "lineHeight": "20px" }}>Github - sudhirattri</span>
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={FaLinkedin} color='white.500' verticalAlign="center" />
              <Link color='white.500' href='https://www.linkedin.com/in/sudhir-attri-58875a1ba/' isExternal>
                <span style={{ "verticalAlign": "top", "lineHeight": "20px" }}>LinkedIn</span>
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={FaMailBulk} color='white.500' verticalAlign="center" />
              <Link color='white.500' href='mailto: sattri99@gmail.com' isExternal>
                <span style={{ "verticalAlign": "top", "lineHeight": "20px" }}>sattri99@gmail.com</span>
              </Link>
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem>
              <ListIcon as={FaDiscord} color='white.500' verticalAlign="center" />
              <Link color='white.500' href='https://discord.gg/ganvkgjp' isExternal>
                <span style={{ "verticalAlign": "top", "lineHeight": "20px" }}>RemRem#1730</span>
              </Link>
            </ListItem>
          </List>
        </Center>
        <Box mt={5} mb={5}></Box>
        <Center>
          <Heading as='h5' size='sm'>Recent Posts {useColorModeValue("light", "dark")}</Heading>
        </Center>

        <Box mt={5} mb={5}></Box>
        <Center>
          <List spacing={3}>
            <ListItem>
              . . .
            </ListItem>
          </List>
        </Center>
      </Box>
    </React.Fragment>
  )
}