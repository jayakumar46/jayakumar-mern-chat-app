import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";
import { getMessageDateLabel } from "../../../utls/getMessageDateLabel";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();

  const lastMessageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  // ✅ GROUP MESSAGES BY DATE
  const groupedMessages = messages.reduce((acc, message) => {
    const label = getMessageDateLabel(message.createdAt);

    if (!acc[label]) {
      acc[label] = [];
    }

    acc[label].push(message);
    return acc;
  }, {});

  return (
    <div className="px-3 py-2 flex-1 overflow-y-auto space-y-4">

      {!loading && Object.keys(groupedMessages).length > 0 &&
        Object.entries(groupedMessages).map(([date, msgs]) => (
          <div key={date}>
            
            {/* DATE LABEL */}
            <div className="flex justify-center my-3">
              <span className="text-xs px-3 py-1 rounded-full bg-gray-700 text-gray-200">
                {date}
              </span>
            </div>

            {/* MESSAGES */}
            {msgs.map((message, index) => (
              <div
                key={message._id}
                ref={index === msgs.length - 1 ? lastMessageRef : null}
              >
                <Message message={message} />
              </div>
            ))}
          </div>
        ))}

      {loading &&
        [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className="text-center text-gray-400">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
};

export default Messages;


// import Message from "./Message";

// const Messages = () => {
//   return (
//     <div className="px-4 flex-1 overflow-auto">
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//     </div>
//   );
// };

// export default Messages;
