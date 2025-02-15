import React from "react";
import { Box, Text, VStack, HStack } from "@chakra-ui/react";
import { useColorModeValue } from "../components/ui/color-mode";

const Bubble = ({ message }) => {
  const isUserMessage = message.role === "user";

  return (
    <HStack
      spacing={4}
      my={4}
      justifyContent={isUserMessage ? "flex-end" : "flex-start"}
    >
      <VStack
        alignItems={isUserMessage ? "flex-end" : "flex-start"}
        gap={1}
        m={0}
        p={0}
      >
        <Box
          bg={
            isUserMessage
              ? useColorModeValue("rgb(226, 254, 226)", "gray.700")
              : useColorModeValue("rgb(254, 244, 226)", "gray.700")
          }
          color={
            isUserMessage
              ? useColorModeValue("black", "white")
              : useColorModeValue("black", "white")
          }
          p={5}
          borderRadius="md"
          w={"max-content"}
          roundedTopLeft={"2xl"}
          roundedTopRight={"2xl"}
          roundedBottomLeft={isUserMessage ? "2xl" : "none"}
          roundedBottomRight={isUserMessage ? "none" : "2xl"}
          maxW={"420px"}
        >
          <Text>{message.parts[0].text}</Text>
          {message.parts[1]?.inline_data && (
            <Text fontSize="sm" color="gray.300">
              File attached
            </Text>
          )}
        </Box>
      </VStack>
    </HStack>
  );
};

export default Bubble;
