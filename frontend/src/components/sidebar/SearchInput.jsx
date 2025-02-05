import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
import useConversation from "../../zustand/useConversation";
const SearchInput = () => {
  const [search , setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!search) return;
    if(search.length <3){
      return toast.error('Search term must be least 3 charecter long')
    }

    const conversation = conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversation){
      setSelectedConversation(conversation);
      setSearch('');

    }
    else{
      toast.error('No Search User Found!')
    }
  }
  return (
    <form className="flex items-center gap-2 mt-2" onSubmit={handleSubmit}> 
        <input type="text" placeholder="Search..." className="input input-bordered rounded-full bg-black" 
        value={search}
        onChange={(e)=>setSearch(e.target.value)}

        />
        <button type="submit" className="btn btn-circle bg-sky-500 text-white"><IoSearchSharp className="w-6 h-6 outline-none" />
</button>
    </form>
  );
};


export default SearchInput;



// import { IoSearchSharp } from "react-icons/io5";
// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-2 mt-2"> 
//         <input type="text" placeholder="Search..." className="input input-bordered rounded-full bg-black" />
//         <button type="submit" className="btn btn-circle bg-sky-500 text-white"><IoSearchSharp className="w-6 h-6 outline-none" />
// </button>
//     </form>
//   );
// };


// export default SearchInput;