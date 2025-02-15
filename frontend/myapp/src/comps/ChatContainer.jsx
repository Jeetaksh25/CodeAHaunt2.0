import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import React, { useEffect, useRef } from "react";
import { useColorModeValue } from "../components/ui/color-mode";
import { Container, Text, VStack, Box, Heading } from "@chakra-ui/react";
import Loader from "./Loader";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import ChatBubble from "./ChatBubble";

const ChatContainer = () => {
<<<<<<< HEAD
  const { getMessages, messages, isMessagesLoading, selectedUser, listenMessages, unlistenMessages } =
    useChatStore();
=======
  const {
    getMessages,
    messages,
    isMessagesLoading,
    selectedUser,
    listenMessages,
    unlistenMessages,
  } = useChatStore();
>>>>>>> f871e41 (test commit)

  const messagesContainerRef = useRef(null);

  useEffect(() => {
    getMessages(selectedUser._id);

    const cleanup = listenMessages(selectedUser._id);

<<<<<<< HEAD
    return()=>{
      if(cleanup) cleanup();

      unlistenMessages();
    };

=======
    return () => {
      if (cleanup) cleanup();

      unlistenMessages();
    };
>>>>>>> f871e41 (test commit)
  }, [selectedUser._id, getMessages, listenMessages, unlistenMessages]);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isMessagesLoading]);

  return (
    <>
      {messages.length !== 0 ? (
        <Container
          w={"full"}
          h={"100%"}
          minH={"100vh"}
          alignItems={"center"}
          justifyContent={"center"}
          p={3}
        >
          <ChatHeader />
          {!isMessagesLoading ? (
            <Box
              ref={messagesContainerRef}
              w={"full"}
              h={"60vh"}
              minH={"64vh"}
              bg={useColorModeValue("rgb(255, 255, 255)", "gray.800")}
              overflow={"auto"}
              rounded={"lg"}
              py={1}
              px={4}
              rowGap={3}
            >
              {messages.map((message) => (
                <ChatBubble
                  key={message._id}
                  message={message}
                  selectedUser={selectedUser}
                />
              ))}
            </Box>
          ) : (
            <Loader minH={"65vh"} h={"65vh"} />
          )}
          <MessageInput messagesContainerRef={messagesContainerRef} />
        </Container>
      ) : (
        <Container
          w={"full"}
          h={"60vh"}
          minH={"max-content"}
          alignItems={"center"}
          justifyContent={"center"}
          p={3}
        >
          <ChatHeader />
          {!isMessagesLoading ? (
            <Box
              ref={messagesContainerRef}
              w={"full"}
              h={"full"}
              minH={"64vh"}
              bg={useColorModeValue("rgb(255, 255, 255)", "gray.800")}
              overflow={"auto"}
              rounded={"lg"}
              py={1}
              px={4}
              rowGap={3}
            >
<<<<<<< HEAD
                <Box
                  w={"full"}
                  h={"full"}
                  display={"flex"}
                  flexDir={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  rowGap={2}
                >
                  <Heading>Chat with {selectedUser.fullName}</Heading>
                  <Text fontSize={"xl"}>Start Conversation Now</Text>
                </Box>
=======
              <Box
                w={"full"}
                h={"full"}
                display={"flex"}
                flexDir={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                rowGap={2}
              >
                <Heading>Chat with {selectedUser.fullName}</Heading>
                <Text fontSize={"xl"}>Start Conversation Now</Text>
              </Box>
>>>>>>> f871e41 (test commit)
            </Box>
          ) : (
            <Loader minH={"65vh"} h={"65vh"} />
          )}
          <MessageInput messagesContainerRef={messagesContainerRef} />
        </Container>
      )}
    </>
  );
};

export default ChatContainer;
