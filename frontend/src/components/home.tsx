import { ChakraProvider, Text, Heading, Box, Flex, Center, Divider, Link, useColorModeValue, Input, chakra } from "@chakra-ui/react"
import React, { ReactNode, useEffect } from "react"
import Sidebar from "../components/sidebar";
import ShadertoyReact from 'shadertoy-react';

export default function Home() {
  const fs =
    `
    void mainImage( out vec4 fragColor, in vec2 fragCoord )
    {
        vec2 uv = fragCoord/iResolution.xy;
        uv = (uv*2.0)-1.0;
      uv.x *=iResolution.x/iResolution.y;
        vec3 col = vec3(0.0);
        float bg = uSkin;
        col = vec3(bg);
        
        float lim = uSkin*.2 + (1.-uSkin)*.2;
        float fg = smoothstep(lim,lim-.1,fract(uv.x*5.+iTime*2.));
        fg = clamp(fg*2.,0.,1.);
        
        col = vec3(1.-fg)*uSkin + vec3(fg)*(1.-uSkin);
        
        fragColor = vec4(col*.9,1.0);
    }
  `
  const uniforms = {
    uSkin: { type: '1f', value: useColorModeValue(1.0, 0.0) }
  };
  return (
    <React.Fragment>
      <Box as='main' className='main-content' pt={{ base: '75', md: '75' }} w='full' mx='auto' fontSize='1.2em' >
        <Box display='flex' w={"80%"}>
          <Sidebar />
          <Box flex='5' minW='0'>
            <Box id='content' px={0} mx='auto' minH='76vh'>
              <Flex>
                <Box
                  minW='0'
                  flex='auto'
                  px={{ base: '4', sm: '6', xl: '8' }}
                  pt='5'
                >
                  <Center>
                    <Heading as='h3' size={"md"}>Hi, stranger</Heading>
                  </Center>
                  <Divider mt={4} mb={4} ></Divider>
                  <Text>
                    Hi, I am a software engineer based in Delhi, graduated from IIIT Delhi and India currently emplyed as a web backend engineer at <Link color='white.500' href='https://soroco.com/' isExternal><span>Soroco</span></Link>. I am interested and involved in Data Science, algorithm design, and Semantic web. I also do cycling and drawings in my freetime and also bit of a heavy gamer.
                  </Text>
                  <Box mt={5} mb={5}></Box>
                  <Text>
                    I have reserved this domain for future use as a portfolio site and blogs (TODO). For now, it serves as a index page for resources and links.
                  </Text>
                  <Box mt={5} mb={5}></Box>
                  <Text>
                    Email me or DM on discord if you want to get in touch with me for something or If you remember me from somewhere and just want to chat using the sidebar on the left.
                  </Text>
                  <Box mt={5} mb={5}></Box>
                  <Text>
                    <b>Note:</b> This site is best viewed in dark mode.
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box style={{ "backdropFilter": "blur(20px)" }} bg={useColorModeValue('#FFFFFFEE', '#171923EE')} position={"fixed"} width={"100%"} height={"100%"} top={0} zIndex={-3}>
      </Box>
      <Box position={"fixed"} width={"100%"} height={"100%"} top={0} zIndex={-4}>
        {/* <ShadertoyReact fs={fs} uniforms={uniforms} /> */}
      </Box>
    </React.Fragment>
  )
}