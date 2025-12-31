import { useState } from "react";
import { BsSend } from "react-icons/bs"
import useSendMessage from "../../hooks/useSendMessage";
const MessageInput = () => {
  const [message , setMessage] = useState("")
  const {loading , sendMessage} = useSendMessage();


  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  }


  return (
    <form className="sticky bottom-0 bg-[#1f2937] px-3 py-2 flex items-center gap-2" onSubmit={handleSubmit}>
        <div className="w-full relative">
            <input type="text" className="w-full flex-1 rounded-full px-4 py-2 bg-[#2a2a2a] text-white outline-none" placeholder="Type a message..."
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            />
            <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3 text-white">
                {loading ? <span className="loading loading-spinner"></span> : <BsSend />}
            </button>
        </div>
    </form>
  );
};

export default MessageInput;


// import { BsSend } from "react-icons/bs"
// const MessageInput = () => {
//   return (
//     <form className="px-4 my-3">
//         <div className="w-full">
//             <input type="text" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-700 text-white" placeholder="sent a message"/>
//             <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
//                 <BsSend />
//             </button>
//         </div>
//     </form>
//   );
// };

// export default MessageInput;