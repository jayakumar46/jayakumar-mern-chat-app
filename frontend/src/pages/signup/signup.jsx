import GenderCheckBox from "./GenderCheckBox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-56 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500">ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base lebel-text text-white">FullName</span>
            </label>
            <input type="text" placeholder="Enter your Name" className="w-full input input-bordered h-10 bg-black text-white" />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base lebel-text text-white">UserName</span>
            </label>
            <input type="password" placeholder="Enter Your Username" className="w-full input input-bordered h-10 bg-black text-white" />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base lebel-text text-white">Password</span>
            </label>
            <input type="password" placeholder="Enter Your Psssword" className="w-full input input-bordered h-10 bg-black text-white" />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base lebel-text text-white">ConfirmPassword</span>
            </label>
            <input type="text" placeholder="Enter Your COnfirmPassword" className="w-full input input-bordered h-10 bg-black text-white" />
          </div>

          {/* gender */}
          <GenderCheckBox />



          <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-1 inline-block text-white">
            Already have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700 bg-black text-white hover:text-black">SignUp</button>
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