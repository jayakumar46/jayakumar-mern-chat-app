import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import useConversation from "../../zustand/useConversation";

const Home = () => {
  const { selectedConversation } = useConversation();

  return (
    <div className="flex h-screen lg:max-w-[80%] w-full justify-between overflow-hidden bg-black/40 backdrop-blur-md bg-clip-padding bg-opacity-0">

      {/* Sidebar */}
      <div
        className={`w-full lg:w-auto ${selectedConversation ? "hidden lg:block" : "block"
          }`}
      >
        <Sidebar />
      </div>

      {/* Chat */}
      <div
        className={`flex-1 ${!selectedConversation ? "hidden lg:flex" : "flex"
          }`}
      >
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;




// import Sidebar from "../../components/sidebar/Sidebar";

// const Home = () => {
//   return (
//     <div className='flex sm:h-[450px]  md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//       <Sidebar />
//       {/* <MessageContainer /> */}
//     </div>
//   );
// };

// export default Home;
