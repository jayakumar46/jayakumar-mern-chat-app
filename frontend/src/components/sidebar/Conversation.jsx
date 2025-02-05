import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx }) => {
 const {selectedConversation,setSelectedConversation}  = useConversation();
 const {onlineUsers} = useSocketContext();

 const isSelected = selectedConversation?._id === conversation._id;
 const isOnline = onlineUsers.includes(conversation._id);
  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
      ${isSelected ? "bg-sky-500" : ""}
      ` }
      onClick={()=>setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? 'online' :''}`}>
          <div className="w-12 rounded-full ">
            <img src={conversation.profilePic} alt="person-avtor" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200 ">{conversation.fullName}</p>
            {/* <span className="text-xl">{emoji}</span> */}
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;

// const Conversation = () => {
//   return (
//     <>
//     <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//         <div className="avatar online">
//             <div className="w-12 rounded-full ">
//                 <img src="data:image/jpeg;base64,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" alt="person-avtor" />
//             </div>
//         </div>
//         <div className="flex flex-col flex-1">
//             <div className="flex gap-3 justify-between" >
//                 <p className="font-bold text-gray-200 ">John Doe</p>
//                 <span className="text-xl"></span>
//             </div>
//         </div>
//     </div>
//     <div className="divider my-0 py-0 h-1" />

//     </>
//   )
// }

// export default Conversation;
