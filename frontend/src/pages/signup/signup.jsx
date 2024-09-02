import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {

  const [inputs,setInputs] = useState({
    fullName:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender:''
  });

const { loading , signup } = useSignUp()

const handleCheckBoxChanage = (gender) =>{
    setInputs({...inputs,gender});
}


  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputs);
    await signup(inputs)
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-56 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base lebel-text text-white">FullName</span>
            </label>
            <input type="text" placeholder="Enter your Name" className="w-full input input-bordered h-10 bg-black text-white" 
            value={inputs.fullName}
            onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base lebel-text text-white">UserName</span>
            </label>
            <input type="text" placeholder="Enter Your Username" className="w-full input input-bordered h-10 bg-black text-white" 
            value={inputs.username}
            onChange={(e)=>setInputs({...inputs,username:e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base lebel-text text-white">Password</span>
            </label>
            <input type="password" placeholder="Enter Your Psssword" className="w-full input input-bordered h-10 bg-black text-white" 
            value={inputs.password}
            onChange={(e)=>setInputs({...inputs,password:e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base lebel-text text-white">ConfirmPassword</span>
            </label>
            <input type="text" placeholder="Enter Your ConfirmPassword" className="w-full input input-bordered h-10 bg-black text-white" 
            value={inputs.confirmPassword}
            onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
            />
          </div>

          {/* gender */}
          <GenderCheckBox onCheckboxChange={handleCheckBoxChanage} selectedGender={inputs.gender}/>



          <Link to={"/login"} className="text-sm hover:underline hover:text-blue-600 mt-1 inline-block text-white">
            Already have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700 bg-black text-white hover:text-black" 
            disabled={loading}
            >
              {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
            </button>
          </div>
        </form>

      </div>

    </div>
  )
}

export default SignUp;


// SARTER CODE FOR SIGNUP COMPONENT
// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-56 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Sign Up <span className="text-blue-500">ChatApp</span>
//         </h1>

//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base lebel-text text-white">FullName</span>
//             </label>
//             <input type="text" placeholder="Enter your Name" className="w-full input input-bordered h-10 bg-black text-white" />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base lebel-text text-white">UserName</span>
//             </label>
//             <input type="password" placeholder="Enter Your Username" className="w-full input input-bordered h-10 bg-black text-white" />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base lebel-text text-white">Password</span>
//             </label>
//             <input type="password" placeholder="Enter Your Psssword" className="w-full input input-bordered h-10 bg-black text-white" />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base lebel-text text-white">ConfirmPassword</span>
//             </label>
//             <input type="text" placeholder="Enter Your COnfirmPassword" className="w-full input input-bordered h-10 bg-black text-white" />
//           </div>

//           {/* gender */}
//           <GenderCheckBox />



//           <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-1 inline-block text-white">
//             Already have an account?
//           </a>

//           <div>
//             <button className="btn btn-block btn-sm mt-2 border border-slate-700 bg-black text-white hover:text-black">SignUp</button>
//           </div>
//         </form>

//       </div>

//     </div>
//   )
// }

// export default SignUp;