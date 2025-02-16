import { useState, useEffect } from "react";
import { axiosInstance } from "./lib/axios.js";
import { useAuthStore } from "./store/useAuthStore.js";
import { Toaster } from "react-hot-toast";
import { Routes, Route, Navigate, useNavigate} from "react-router-dom";
import { Box, Text, VStack, Spinner, Container, Flex,Button, Heading } from "@chakra-ui/react";
import { useColorModeValue } from "./components/ui/color-mode.jsx";
import { TbRobotFace } from "react-icons/tb";

import NavBar from "./comps/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProfilePage from "./pages/Profile.jsx";
import Tasks from "./pages/Tasks.jsx";
import Test from "./pages/Test.jsx";
import Connect from "./pages/Connect.jsx";
import Footer from "./comps/Footer.jsx";
import Chat from "./pages/Chat.jsx";
import Chatbot from "./pages/ChatBot.jsx";
import RoomPage from "./pages/RoomPage.jsx";
import Loader from "./comps/Loader.jsx";

function App() {
  const { authUser, isCheckingAuth, checkAuth, onlineUsers } = useAuthStore();

  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser) {
    return (
      <Loader minH={"100vh"} h={"100%"} />
    );
  }

  return (
    <>
      <Container w={"100%"} minH={"100vh"} minW={"100%"} bg={useColorModeValue("rgb(254, 240, 216)", "gray.900")}>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route
            path="/signup"
            element={!authUser ? <SignUpPage/> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!authUser ? <LoginPage /> : <Navigate to="/" />}
          />
          <Route
            path="/profile"
            element={authUser ? <ProfilePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/tasks"
            element={authUser ? <Tasks /> : <Navigate to="/login" />}
          />
          <Route path="/test" element={<Test/>} />
          <Route
            path="/connect"
            element={authUser ? <Connect /> : <Navigate to="/login" />}
          />
          <Route path="/connect/room/:roomId" element={authUser ? <RoomPage/> : <Navigate to="/login"/> }/>
          <Route
            path="/chatbot"
            element={authUser ?
              (<Chatbot/>)
              : <Navigate to="/login" />
            }
          />
          <Route
            path="/freechat"
            element={authUser ? <Chat/> : <Navigate to="/login" />}
          />
        </Routes>
      </Container>

      <Box position={"fixed"} bottom={"20px"} right={"20px"} zIndex={"100"} alignItems={"center"} justifyItems={"center"}>
      <Text>Ask a Question</Text>
      <Button onClick={() => navigate("/chatbot")} m={2}><TbRobotFace/></Button>
      </Box>



      <Toaster />
      <Footer />
    </>
  );
}

export default App;
