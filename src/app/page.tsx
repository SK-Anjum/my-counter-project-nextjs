'use client'
import { useState } from "react";

export default function home() {
const[ numValue, setNumValue]=useState(0)
const[textValue, setTextValue] = useState("")
function increasement (){
  if (numValue >=0) {
    setNumValue((num)=>num+1)
    setTextValue("Number is increasing by 1")
  }
}
function decreament (){ 
if (numValue >0){
  setNumValue((num)=>num-1)
  setTextValue("Number is decreasing by 1")
}
}
  return (
    <div className="bg-blue-200 px-5 flex justify-center items-center h-screen">
      <div className="bg-blue-800 space-y-5 px-2 py-5 rounded-md shadow-lg shadow-black w-[30%]">
        {/* div 1 number and text div*/}
        <div className=" space-y-4 text-center text-slate-100 8">
          <h1 className="text-4xl"> {numValue} </h1>
          <p className="h-5 text-xs sm:text-2xl ">{textValue}</p>
        </div>
        {/* div 2 button div */}
        <div className="flex  flex-col sm:flex-row gap-1 sm:gap-5 justify-center">
          <button 
          onClick={increasement}
          className="bg-green-600 px-5 py-2 rounded-lg text-white hover:bg-green-800">
            Increase
          </button>
          <button 
          onClick ={decreament}
          className="bg-red-600 px-5 py-2 rounded-lg text-white hover:bg-red-800">
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
}
