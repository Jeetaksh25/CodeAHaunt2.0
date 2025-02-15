import React, { useState } from "react";
import {
  Box,
  HStack,
  Button,
  Text,
  IconButton,
  VStack,
  useBreakpointValue,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";
import { MdDarkMode, MdOutlineLightMode, MdMenu } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerRoot,
} from "@/components/ui/drawer";

<<<<<<< HEAD
import { Tooltip } from "@/components/ui/tooltip"

=======
import { Tooltip } from "@/components/ui/tooltip";
>>>>>>> f871e41 (test commit)

import { useColorModeValue, useColorMode } from "../components/ui/color-mode";

const NavBar = () => {
  const { authUser, logout } = useAuthStore();
  const { colorMode, toggleColorMode } = useColorMode();
  const isMobile = useBreakpointValue({ base: true, md: false });

<<<<<<< HEAD

=======
>>>>>>> f871e41 (test commit)
  const handleLogout = () => {
    logout();
  };

  const navItems = (
    <>
<<<<<<< HEAD
      <Flex alignItems="center" gap={3} flexDir={isMobile ? "column" : "row"} p={0} m={0}>
        <Link to="/">
          <Heading fontSize={"2xl"} color={useColorModeValue("black", "white")} mx={4}>
=======
      <Flex
        alignItems="center"
        gap={3}
        flexDir={isMobile ? "column" : "row"}
        p={0}
        m={0}
      >
        <Link to="/">
          <Heading
            fontSize={"2xl"}
            color={useColorModeValue("black", "white")}
            mx={4}
          >
>>>>>>> f871e41 (test commit)
            Home
          </Heading>
        </Link>
        <Link to="/tasks">
<<<<<<< HEAD
          <Button bg={useColorModeValue("rgb(254, 244, 226)", "gray.600")} color={useColorModeValue("black", "white")}>
=======
          <Button
            bg={useColorModeValue("rgb(254, 244, 226)", "gray.600")}
            color={useColorModeValue("black", "white")}
          >
>>>>>>> f871e41 (test commit)
            Daily Tasks
          </Button>
        </Link>
        <Link to="/test">
<<<<<<< HEAD
          <Button bg={useColorModeValue("rgb(254, 244, 226)", "gray.600")} color={useColorModeValue("black", "white")}>
=======
          <Button
            bg={useColorModeValue("rgb(254, 244, 226)", "gray.600")}
            color={useColorModeValue("black", "white")}
          >
>>>>>>> f871e41 (test commit)
            Take Test
          </Button>
        </Link>
        <Link to="/connect">
<<<<<<< HEAD
          <Button bg={useColorModeValue("rgb(254, 244, 226)", "gray.600")} color={useColorModeValue("black", "white")}>
=======
          <Button
            bg={useColorModeValue("rgb(254, 244, 226)", "gray.600")}
            color={useColorModeValue("black", "white")}
          >
>>>>>>> f871e41 (test commit)
            Connect
          </Button>
        </Link>

        <Link to="/chatbot">
<<<<<<< HEAD
          <Button bg={useColorModeValue("rgb(254, 244, 226)", "gray.600")} color={useColorModeValue("black", "white")}>
=======
          <Button
            bg={useColorModeValue("rgb(254, 244, 226)", "gray.600")}
            color={useColorModeValue("black", "white")}
          >
>>>>>>> f871e41 (test commit)
            Chat Bot
          </Button>
        </Link>

        <Link to="/freechat">
<<<<<<< HEAD
          <Button bg={useColorModeValue("rgb(254, 244, 226)", "gray.600")} color={useColorModeValue("black", "white")}>
            Consult
          </Button>
        </Link>

=======
          <Button
            bg={useColorModeValue("rgb(254, 244, 226)", "gray.600")}
            color={useColorModeValue("black", "white")}
          >
            Consult
          </Button>
        </Link>
>>>>>>> f871e41 (test commit)
      </Flex>
    </>
  );

  return (
    <Box
      w="98%"
      px={5}
      py={3}
      bg={useColorModeValue("rgb(247, 230, 201)", "gray.800")}
      color={useColorModeValue("black", "white")}
      borderRadius="md"
      mx={"auto"}
      my={0}
      position={"sticky"}
      zIndex={1000}
      shadow={useColorModeValue("md", "md")}
    >
      {isMobile ? (
        <DrawerRoot key={"start"} placement="start">
          <HStack justifyContent="space-between">
            <DrawerTrigger asChild>
              <Button>
                <CiMenuBurger />
              </Button>
            </DrawerTrigger>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
            </Button>
            {!authUser && (
              <>
                <Link to="/login">
<<<<<<< HEAD
                  <Button bg={useColorModeValue("rgb(254, 244, 226)", "gray.600")} color={useColorModeValue("black", "white")}>
=======
                  <Button
                    bg={useColorModeValue("rgb(254, 244, 226)", "gray.600")}
                    color={useColorModeValue("black", "white")}
                  >
>>>>>>> f871e41 (test commit)
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
<<<<<<< HEAD
                  <Button bg={useColorModeValue("rgb(254, 244, 226)", "gray.600")} color={useColorModeValue("black", "white")}>
=======
                  <Button
                    bg={useColorModeValue("rgb(254, 244, 226)", "gray.600")}
                    color={useColorModeValue("black", "white")}
                  >
>>>>>>> f871e41 (test commit)
                    Register
                  </Button>
                </Link>
              </>
            )}
          </HStack>
          <DrawerBackdrop />
          <DrawerContent w={"max-content"} p={4}>
            <DrawerHeader>
              <DrawerTitle>Menu</DrawerTitle>
              <DrawerCloseTrigger asChild>
                <span>
                  <Button>Close</Button>
                </span>
              </DrawerCloseTrigger>
            </DrawerHeader>
            <DrawerBody>
              <VStack gap={3} align="center">
                {navItems}
                {authUser ? (
                  <VStack gap={2}>
                    <Link to="/profile">
<<<<<<< HEAD
                      <Button bg={useColorModeValue("rgb(254, 244, 226)", "gray.600")} color={useColorModeValue("black", "white")}>
                        {authUser.fullName.slice(0, 1).toUpperCase() + authUser.fullName.slice(authUser.fullName.length)}
                      </Button>
                    </Link>
                    <Button onClick={handleLogout} bg={useColorModeValue("rgb(254, 244, 226)", "gray.600")} color={useColorModeValue("black", "white")}>
=======
                      <Button
                        bg={useColorModeValue("rgb(254, 244, 226)", "gray.600")}
                        color={useColorModeValue("black", "white")}
                      >
                        {authUser.fullName.slice(0, 1).toUpperCase() +
                          authUser.fullName.slice(authUser.fullName.length)}
                      </Button>
                    </Link>
                    <Button
                      onClick={handleLogout}
                      bg={useColorModeValue("rgb(254, 244, 226)", "gray.600")}
                      color={useColorModeValue("black", "white")}
                    >
>>>>>>> f871e41 (test commit)
                      Logout
                    </Button>
                  </VStack>
                ) : null}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerRoot>
      ) : (
        <HStack justifyContent="space-between">
          <HStack gap={3}>{navItems}</HStack>
          <HStack gap={5}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
            </Button>
            {!authUser ? (
              <>
                <Link to="/login">
<<<<<<< HEAD
                  <Button bg={useColorModeValue("rgb(254, 244, 226)", "gray.600")} color={useColorModeValue("black", "white")}>
=======
                  <Button
                    bg={useColorModeValue("rgb(254, 244, 226)", "gray.600")}
                    color={useColorModeValue("black", "white")}
                  >
>>>>>>> f871e41 (test commit)
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
<<<<<<< HEAD
                  <Button bg={useColorModeValue("rgb(254, 244, 226)", "gray.600")} color={useColorModeValue("black", "white")}>
=======
                  <Button
                    bg={useColorModeValue("rgb(254, 244, 226)", "gray.600")}
                    color={useColorModeValue("black", "white")}
                  >
>>>>>>> f871e41 (test commit)
                    Register
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/profile">
<<<<<<< HEAD
                <Tooltip content="Profile">
                <Button bg={useColorModeValue("rgb(254, 244, 226)", "gray.600")} color={useColorModeValue("black", "white")} p={0} fontSize={"40px"} fontFamily={"sans-serif"} rounded={"full"} w={"40px"} h={"40px"}>
                    {authUser.fullName.slice(0, 1).toUpperCase() + authUser.fullName.slice(authUser.fullName.length)}
                  </Button>
                </Tooltip>

                </Link>
                <Button onClick={handleLogout} bg={useColorModeValue("rgb(254, 244, 226)", "gray.600")} color={useColorModeValue("black", "white")}>
=======
                  <Tooltip content="Profile">
                    <Button
                      bg={useColorModeValue("rgb(254, 244, 226)", "gray.600")}
                      color={useColorModeValue("black", "white")}
                      p={0}
                      fontSize={"40px"}
                      fontFamily={"sans-serif"}
                      rounded={"full"}
                      w={"40px"}
                      h={"40px"}
                    >
                      {authUser.fullName.slice(0, 1).toUpperCase() +
                        authUser.fullName.slice(authUser.fullName.length)}
                    </Button>
                  </Tooltip>
                </Link>
                <Button
                  onClick={handleLogout}
                  bg={useColorModeValue("rgb(254, 244, 226)", "gray.600")}
                  color={useColorModeValue("black", "white")}
                >
>>>>>>> f871e41 (test commit)
                  Logout
                </Button>
              </>
            )}
          </HStack>
        </HStack>
      )}
    </Box>
  );
};

<<<<<<< HEAD
export default NavBar;
=======
export default NavBar;
>>>>>>> f871e41 (test commit)
