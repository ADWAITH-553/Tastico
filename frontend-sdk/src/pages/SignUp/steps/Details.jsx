import {useContext,useState} from "react";
import { StepperContext } from "../contexts/StepperContext";
import Inputfield from "../../../components/TextInput";

export default function Details(){
    const{userData,setUserData} =useContext(StepperContext);
const handleChange = (e) =>{
    const{name,value} = e.target;
    setUserData({...userData,[name]: value});

};
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [phone,setPhone] = useState("");
const [username,setUsername] = useState("");

return <div className="flex flex-col">

        <p className="mb-6">
            Create your account. It's a three step process and will only take a minute!
        </p>
        {/* Input fields for 1. username name email password phone*/}
        <Inputfield
            type="text"
            placeholder="UserName"
            valueState={[username,setUsername]}
            className="border-gray-300 py-1 px-2 rounded"
        ></Inputfield>
        <Inputfield
            type="text"
            placeholder="Caterer Admin Name"
            valueState={[name,setName]}
            className="border-gray-300 py-1 px-2 rounded"
        ></Inputfield>
        <Inputfield
            type="text"
            placeholder="Caterer Admin Email"
            valueState={[email,setEmail]}
            className="border-gray-300 py-1 px-2 rounded"
        ></Inputfield>
        <Inputfield
            type="password"
            placeholder="Caterer Admin Password"
            valueState={[password,setPassword]}
            className="border-gray-300 py-1 px-2 rounded"
        ></Inputfield>
        <Inputfield
            type="text"
            placeholder="Caterer Admin Phone"
            valueState={[phone,setPhone]}
            className="border-gray-300 py-1 px-2 rounded"
        ></Inputfield>
</div>
}