/** @type {import('tailwindcss').Config} */
export default {
  content:["./index.html","./src/**/*.(js,ts,jsx,tsx)"],
  theme:{
    extend:{},
  },
  plugins:[require("daisyui")],
}









// /** @type {import('tailwindcss').Config} */
// export const content = ["./src/**/*.{html,js}"];
// export const theme = {
//   extend: {},
// };
// export const plugins = [require("daisyui")];