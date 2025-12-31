import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className=" lg:min-w-[500px] w-full border-slate-500 p-4 flex flex-col">
        <SearchInput />
        <div className='divider px-3'></div>
        <Conversations />
        <LogoutButton />
    </div>
  );
};

export default Sidebar;




// import SearchInput from "./SearchInput";
// import Conversations from "./Conversations";

// const Sidebar = () => {
//   return (
//     <div>
//         <SearchInput />
//         <div className='divider px-3 mt-0'></div>
//         <Conversations />
//         {/* <LogoutButton /> */}
//     </div>
//   );
// };

// export default Sidebar;