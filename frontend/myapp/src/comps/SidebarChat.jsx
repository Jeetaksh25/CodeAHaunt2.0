import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import React, { useEffect, useState } from "react";
import { useColorModeValue } from "../components/ui/color-mode";
import {
  Container,
  Text,
  VStack,
  Box,
  Heading,
  Button,
  HStack,
} from "@chakra-ui/react";
import Loader from "./Loader";
<<<<<<< HEAD
import { Switch } from "@/components/ui/switch"



const Users = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
=======
import { Switch } from "@/components/ui/switch";

const Users = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } =
    useChatStore();
>>>>>>> f871e41 (test commit)
  const { onlineUsers, isTherapist } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

<<<<<<< HEAD
  const filteredUsers = showOnlineOnly ? users.filter(user => onlineUsers.includes(user._id)) : users;

  const handleFilter = () => {
    setShowOnlineOnly(!showOnlineOnly);
  }
=======
  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  const handleFilter = () => {
    setShowOnlineOnly(!showOnlineOnly);
  };
>>>>>>> f871e41 (test commit)

  return (
    <Container
      h={"full"}
      w={"45%"}
      flexDir={"column"}
      p={4}
      bg={useColorModeValue("rgb(254, 244, 226)", "gray.800")}
      transition={"all 0.3s ease-in-out"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <VStack gap={4} h={"100%"}>
        <Box
          w={"full"}
          p={2}
          border={"1px solid black"}
          rounded={"md"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading textAlign={"center"} fontSize={"2xl"}>
<<<<<<< HEAD
          {isTherapist ? "Available Patients" : "Available Counselors"}
          </Heading>
          <Switch defaultChecked={showOnlineOnly} onChange={handleFilter} mt={4} bg={useColorModeValue("rgb(254, 244, 226)", "gray.800")}>
          {showOnlineOnly ? "Show All" : "Show Online Only"}
=======
            {isTherapist ? "Available Patients" : "Available Counselors"}
          </Heading>
          <Switch
            defaultChecked={showOnlineOnly}
            onChange={handleFilter}
            mt={4}
            bg={useColorModeValue("rgb(254, 244, 226)", "gray.800")}
          >
            {showOnlineOnly ? "Show All" : "Show Online Only"}
>>>>>>> f871e41 (test commit)
          </Switch>
        </Box>
        {!isUsersLoading ? (
          <Box
            w={"100%"}
            minH={"70vh"}
            h={"70vh"}
            rounded={"lg"}
            px={10}
            py={5}
            bg={useColorModeValue("rgb(253, 238, 211)", "gray.700")}
            overflow={"auto"}
          >
            {Array.isArray(users) && users.length > 0 ? (
              filteredUsers.map((user) => (
                <Button
                  key={user._id}
                  onClick={() => setSelectedUser(user)}
                  w={"100%"}
                  p={5}
                  alignContent={"center"}
                  justifyContent={"left"}
                  textAlign={"left"}
                  _hover={{ bg: "gray.200" }}
                  color={useColorModeValue("black", "white")}
<<<<<<< HEAD
                  bg={selectedUser?._id === user._id ? "gray.300" : "transparent"}
                  my={2}
                  bgColor={useColorModeValue("rgb(254, 244, 226)", "gray.800")}
                >
                  <HStack justifyContent={"space-between"} w={"100%"} h={"100%"}>
=======
                  bg={
                    selectedUser?._id === user._id ? "gray.300" : "transparent"
                  }
                  my={2}
                  bgColor={useColorModeValue("rgb(254, 244, 226)", "gray.800")}
                >
                  <HStack
                    justifyContent={"space-between"}
                    w={"100%"}
                    h={"100%"}
                  >
>>>>>>> f871e41 (test commit)
                    <Text>{user.fullName}</Text>
                    <Text>{onlineUsers.includes(user._id) ? "🟢" : "🔴"} </Text>
                  </HStack>
                </Button>
              ))
            ) : (
              <Text textAlign="center" p={4}>
<<<<<<< HEAD
                {isTherapist ? "No patients available" : "No counselors available"}
              </Text>
            )}
            {filteredUsers.length === 0 && <Text textAlign="center">{isTherapist ? "No patients available" : "No counselors available"}</Text>}
=======
                {isTherapist
                  ? "No patients available"
                  : "No counselors available"}
              </Text>
            )}
            {filteredUsers.length === 0 && (
              <Text textAlign="center">
                {isTherapist
                  ? "No patients available"
                  : "No counselors available"}
              </Text>
            )}
>>>>>>> f871e41 (test commit)
          </Box>
        ) : (
          <Loader minH={"65vh"} h={"65vh"} />
        )}
      </VStack>
    </Container>
  );
};

<<<<<<< HEAD
export default Users;
=======
export default Users;
>>>>>>> f871e41 (test commit)
