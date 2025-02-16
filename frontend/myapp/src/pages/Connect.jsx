import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  Text,
  VStack,
  Container,
  HStack,
} from "@chakra-ui/react";
import { useColorModeValue } from "../components/ui/color-mode";
import { useNavigate } from "react-router-dom";

function Connect() {
  const [roomId, setRoomID] = useState("");
  const navigate = useNavigate();

  const handleRoomIdGenerate = () => {
    const randomId = Math.random().toString(36).substring(2, 9);
    const timestamp = Date.now().toString().slice(-4);
    setRoomID(randomId + timestamp);
  };

  const handleOneAndOneCall = () => {
    if (!roomId) {
      alert("Please Generate Room Id First");
      return;
    }
    navigate(`room/${roomId}?type=one-on-one`);
  };

  const handleGroupCall = () => {
    if (!roomId) {
      alert("Please Generate Room Id First");
      return;
    }
    navigate(`room/${roomId}?type=group-call`);
  };

  return (
    <Container
      maxW={"3xl"}
      w={"full"}
      minH={"93vh"}
      h={"93vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
    >
      <Heading
        fontSize="4xl"
        color={useColorModeValue("black", "white")}
        textAlign={"center"}
        mb={5}
      >
        Welcome to Connect
      </Heading>
      <Box
        w={"full"}
        p={10}
        bg={useColorModeValue("rgb(254, 244, 226)", "gray.800")}
        shadow={"md"}
        rounded={"xl"}
        h={"40vh"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={10}
      >
        <Text fontSize="2xl" textAlign="center" color={useColorModeValue("black", "white")}>
          Start a video call with a therapist
        </Text>

        <HStack gap={6} width="80%">
          <Input
            placeholder="Generated Room ID"
            value={roomId}
            isReadOnly
            variant="filled"
            textAlign="center"
            fontSize={"lg"}
          />
          <Button colorScheme="blue" onClick={handleRoomIdGenerate} maxW="max-content">
            Generate Room ID
          </Button>
        </HStack>

        <HStack gap={4} width="80%" justifyContent={"space-around"}>
          <Button
            colorScheme="green"
            onClick={handleOneAndOneCall}
            isDisabled={!roomId}
            width="max-content"
          >
            One-on-One Call
          </Button>
          <Button
            colorScheme="teal"
            onClick={handleGroupCall}
            isDisabled={!roomId}
            width="max-content"
          >
            Group Call
          </Button>
        </HStack>
      </Box>
    </Container>
  );
}

export default Connect;
