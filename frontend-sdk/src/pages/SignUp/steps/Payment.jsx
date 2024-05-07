import { useContext, useState } from "react";
import { StepperContext } from "../contexts/StepperContext";
import {AiOutlineDelete} from "react-icons/ai";

export default function Payment() {
  // create a good input field for adding signature dishes
  const [signatureDishes, setSignatureDishes] = useState([]);
  const [newDish, setNewDish] = useState('');

  const handleAddDish = () => {
    setSignatureDishes([...signatureDishes, newDish]);
    setNewDish('');
  };

  const handleDeleteDish = (index)=>{
    const newDishes = signatureDishes.filter((dish,i)=>i!==index);
    setSignatureDishes(newDishes);
  }
  const { userData, setUserData } = useContext(StepperContext);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddDish();
    }
  };
  return (
    <div className="flex flex-col h-fit">
      <p className="mb-6">
        Create your account. It's a three step process and will only take a
        minute!
      </p>
      <div className="w-full bg-gray-100 flex flex-col py-4 px-4 mb-10">
        <p className="text-xl font-semibold text-red-600 mb-4">Signature Dishes</p>
        {signatureDishes.length === 0 && <p className="text-gray-500 ">No signature dishes added yet</p>}
        <div className="grid grid-cols-5 gap-y-3 gap-x-3 ">
        {signatureDishes.map((dish, index) => (
          <div key={index} className="flex justify-start bg-slate-700 text-slate-100 w-fit px-2 py-1">
          <p>{dish}</p>
          <button onClick={()=>{handleDeleteDish(index)}} className="ml-2"><AiOutlineDelete size="14"/></button>
          </div>
        ))}
        </div>
      </div>

      <div className="input flex flex-col w-full justify-start space-y-4 h-fit">
        <label htmlFor="newDish"
        className="text-lg font-semibold">Enter a signature dish </label>
        <input 
          onKeyDown={handleKeyDown}
          type="text" 
          id="newDish" 
          value={newDish} 
          onChange={(e) => setNewDish(e.target.value)} 
          className="border-2 border-gray-300 border-solid py-1 px-2 rounded focus:outline-none focus:border-cloud-500"
        />
        <div className="w-full">
        <button autoFocus onClick={handleAddDish} className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-orange-300 hover:text-black transition ease-in">Add</button>
        </div>
      </div>
      
    </div>
  );
}
