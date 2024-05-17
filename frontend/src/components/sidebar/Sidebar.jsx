import SearchInput from "./SearchInput";
import Conversations from "./Conversations";

const Sidebar = () => {
  return (
    <div className="border-[#ccc] border-e-2">
        <SearchInput />
        <div className='divider px-3 mt-0'></div>
        <Conversations />
        {/* <LogoutButton /> */}
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