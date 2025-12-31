import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from 'react-icons/ti'
import { useAuthContext } from "../../context/AuthContext";
import { useSocketContext } from "../../context/SocketContext";
import useLastSeenStore from "../../zustand/useLastSeenStore";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { socket } = useSocketContext();

  useEffect(() => {
    if (!socket) return;

    const handleLastSeen = ({ userId, lastSeen }) => {
      setLastSeen(userId, lastSeen);
    };

    socket.on("lastSeenUpdate", handleLastSeen);

    return () => {
      socket.off("lastSeenUpdate", handleLastSeen);
    };
  }, [socket, setLastSeen]);


  const { onlineUsers } = useSocketContext();
  console.log(onlineUsers);

  const isSelectedUserOnline = selectedConversation && onlineUsers.includes(selectedConversation._id);
  console.log(isSelectedUserOnline);




  useEffect(() => {

    //cleanup function unmounts
    return () => setSelectedConversation(null);
  }, [setSelectedConversation])

  return (
    <div className=" w-full flex flex-col lg:border-l border-slate-500 ">

      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>

          {/* <Header /> */}

          <div className="sticky top-0 z-10 bg-[#1f2937] px-4 py-3 flex items-center gap-3 shadow">

            {/* Mobile back button */}
            <button
              className="lg:hidden text-2xl font-bold text-white"
              onClick={() => setSelectedConversation(null)}
            >
              ←
            </button>

            <img
              src={selectedConversation?.profilePic}
              className="w-9 h-9 rounded-full"
            />

            <div>
              <p className="text-white font-semibold leading-4">
                {selectedConversation.fullName}
              </p>
              <span className={`text-xs ${isSelectedUserOnline ? "text-green-400" : "text-gray-500"} `}>{isSelectedUserOnline ? "Online" : "Last seen recently"}</span>
            </div>

          </div>
          <Messages />
          <MessageInput />
        </>
      )
      }
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (

    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome👋 {authUser.fullName}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>

  );
};




// import MessageInput from "./MessageInput";
// import Messages from "./Messages";

// const MessageContainer = () => {
//   return (
//     <div className="md:min-w-[450px] pl-4 flex flex-col">
//       <>
//         {/* <Header /> */}

//         <div className="bg-slate-500 px-4 py-2 mb-2">
//           <span className="label-text">To:</span>{" "}
//           <span className="text-gray-900 font-bold">John Doe</span>
//         </div>

//         <Messages />
//         <MessageInput />
//       </>
//     </div>
//   );
// };

// export default MessageContainer;
