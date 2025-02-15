import { useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { APP_ID, SECRET } from "../config.js";
import { useAuthStore } from "../store/useAuthStore.js";

function RoomPage() {

  const {authUser} = useAuthStore();

  const { roomId } = useParams();
  const videoContainerRef = useRef();
  const myMeeting = () => {
    const appID = APP_ID
    const serverSecret = SECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      authUser.fullName,
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: videoContainerRef.current,

      sharedLinks: [
        {
          name: "Video link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            roomId,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };
  useEffect(() => {
    myMeeting();
  }, []);
  return <div ref={videoContainerRef} style={{ width: "100%", height: "90vh" }}></div>;
}
export default RoomPage;
