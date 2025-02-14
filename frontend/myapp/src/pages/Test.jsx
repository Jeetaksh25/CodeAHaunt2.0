import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";
import { toast } from "react-hot-toast";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useColorModeValue, useColorMode } from "../components/ui/color-mode";

const Test = () => {


  return (
    <Container
      w={"full"}
      minH={"80vh"}
      h={"max-content"}
      alignItems={"center"}
      justifyContent={"center"}
      alignContent={"center"}
    >

    </Container>
  );
};
export default Test;
