import * as React from "react";
import {useState} from "react";
import Link from 'next/link'
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Season from '../components/season'
import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, HStack, Image, Input, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
// import Logo from "../components/Banner/Logo";


const Logo = () => {
  return (
    <Flex position="relative">
      <Box position="relative" w="70px" top={-1}>
        <Box
          position="absolute"
          left="6"
          top={6}
          h={12}
          w={12}
          rounded="full"
          backgroundColor="#BFD4E9"
        ></Box>
        <Box
          zIndex="2"
          position="absolute"
          left={2}
          h={10}
          w={10}
          rounded="full"
          backgroundColor="#063668"
        ></Box>
        <Box
          zIndex={999}
          position="absolute"
          right="2"
          top="-1"
          h={6}
          w={6}
          rounded="full"
          backgroundColor="#DD1515"
        ></Box>
      </Box>
      <Heading color="blue.800">
        Elite{" "}
        <Text pl={4} fontSize={15}>
          Cleaning
        </Text>
      </Heading>
    </Flex>
  );
};

const LogoEnlarge = () => {
  return (
    <Flex position="relative">
      <Box position="relative" w="140px" top={-1}>
        <Box
          position="absolute"
          left="12"
          top={12}
          h={24}
          w={24}
          rounded="full"
          backgroundColor="#BFD4E9"
        ></Box>

        <Box
          zIndex="2"
          position="absolute"
          left={6}
          h={20}
          w={20}
          rounded="full"
          backgroundColor="#063668"
        ></Box>
        <Box
          zIndex={999}
          position="absolute"
          right="2"
          top="-4"
          h={12}
          w={12}
          rounded="full"
          backgroundColor="#DD1515"
        ></Box>
      </Box>
      <Heading fontSize={60} color="blue.800">
        Elite{" "}
        <Text pl={4} fontSize={30}>
          Cleaning
        </Text>
      </Heading>
    </Flex>
  );
};
export default function Home() {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const router = useRouter()
  const handleLogin = (event:any) => {
    event.preventDefault();
    event.stopPropagation();

    signIn("credentials", {
        email:user, password, callbackUrl: `${window.location.origin}/dashboard`, redirect: false }
    ).then(function(result:any){
        if (result?.error !== null)
        {
            if (result?.status === 401)
            {
                setLoginError("Your username/password combination was incorrect. Please try again");
            }
            else
            {
                setLoginError(result.error);
            }
        }
        else
        {
            router.push(result.url);
        }
    });
}
  return (
      // <form onSubmit={handleLogin}>
      //   {loginError}
      //   <label>
      //     Email: <input type='text' value={user} onChange={(e) => setUser(e.target.value)} />
      //   </label>
      //   <label>
      //     Password: <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      //   </label>
      //   <button type='submit'>Submit login</button>

      //     <Link href='/register'>Register</Link>

      //     <Season/>
      // </form>
      <Flex  
      margin="auto"
      alignSelf="center"
      h={{ base: "auto", md: "100vh" }}
      w="110vw"
      flexDirection={{ base: "column", md: "row" }}
    >
      {/* --- Left side of page --- */}

      <Stack
        alignItems="center"
        justifyContent="center"
        w={{ base: "110vw", md: "50vw" }}
        p={{ base: "25px", md: "0px" }}
      >
        <Box
          position={{ base: "static", md: "absolute" }}
          left={{ base: "0", md: "20px" }}
          top={{ base: "0", md: "35px" }}
          m={{ base: "50px", md: "0px" }}
          mb={{ base: "100px", md: "0px" }}
          borderRadius="65px"
        >
          <Box display={{ base: "block", md: "none" }}>
            <LogoEnlarge />
          </Box>
          <Box display={{ base: "none", md: "block" }}>
            <Logo />
          </Box>
        </Box>

        {/* -- Login Component */}

        <Stack w="450px" h="500px" p="10">
          <Stack spacing="8">
            <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
              <Heading
                textAlign="left"
                fontSize={useBreakpointValue({ base: "40", md: "50" })}
              >
               Admin-Log in
              </Heading>
            </Stack>
            <Box borderWidth="0px">
              <Stack spacing="6">
                <Stack spacing="5">
                  <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      isRequired={true}
                      id="email"
                      type="email"
                      borderBottomWidth="2px"
                      placeholder="example@example.com"
                      variant="flushed"
                      onChange={(event) => {
                        setUser(event.target.value);
                      }}
                    />
                    <Stack>
                      <HStack justifyContent="space-between">
                        <FormLabel htmlFor="password" mt="4">
                          Password
                        </FormLabel>
                        <Button variant="link" colorScheme="blue" size="sm">
                          Forgot password?
                        </Button>
                      </HStack>
                      <Input
                        isRequired={true}
                        id="password"
                        type="password"
                        borderBottomWidth="2px"
                        placeholder="Enter your password"
                        variant="flushed"
                        onChange={(event) => {
                          setPassword(event.target.value);
                        }}
                      />
                    </Stack>
                  </FormControl>
                </Stack>
                <Checkbox defaultIsChecked>Remember me</Checkbox>
                <Stack spacing="6">
                  <Button
                    variant="primary"
                    color="white"
                    bgColor="#2a4365"
                    borderLeftRadius="0"
                    borderBottomLeftRadius="55"
                    borderRightRadius="50"
                    onClick={(e) => handleLogin(e)}
                  >
                    Log In
                  </Button>
                  <HStack spacing="1" justify="center">
                    <Text color="muted">Use SSO </Text>
                    <Button variant="link" colorScheme="blue">
                      Sign In
                    </Button>
                  </HStack>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Stack>

      {/* Right: Login Illustration */}
      <Stack
        backgroundImage="/log-in-right-bg-illustration.svg"
        backgroundSize="cover"
        alignItems="center"
        justifyContent="center"
        w={{ base: "110vw", md: "50vw" }}
        p={{ base: "25px", md: "0px" }}
        mt={{ base: "25px", md: "0px" }}
        display={{base:"none", md:"flex"}}
      >
        <Image
          src="/log-in-Illustration.svg"
          maxWidth="400px"
          
          // display={{ base: "none", sm: "block" }}
        />
      </Stack>
    </Flex>
  )
}