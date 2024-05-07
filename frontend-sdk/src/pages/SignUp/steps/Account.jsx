import { useContext,useState} from "react";
import { StepperContext } from "../contexts/StepperContext";
import Inputfield from "../../../components/TextInput";

export default function Account() {
  // create input field for company address, company full name, instagram link, facebook , maps
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyFullName, setCompanyFullName] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [mapsLink, setMapsLink] = useState("");
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col">
      <p className="mb-6">
        Create your account. It's a three step process and will only take a
        minute!
      </p>
      <div className="mt-5">
        <Inputfield
          type="text"
          placeholder="Company Name"
          valueState={[companyFullName, setCompanyFullName]}
          className="border-gray-300 py-1 px-2 rounded"
        />
        <Inputfield
          type="text"
          placeholder="Company Address"
          valueState={[companyAddress, setCompanyAddress]}
          className="border-gray-300 py-1 px-2 rounded"
        />
        <Inputfield
          type="text"
          placeholder="Instagram Link"
          valueState={[instagramLink, setInstagramLink]}
          className="border-gray-300 py-1 px-2 rounded"
        />
        <Inputfield
          type="text"
          placeholder="Facebook Link"
          valueState={[facebookLink, setFacebookLink]}
          className="border-gray-300 py-1 px-2 rounded"
        />
        <Inputfield
          type="text"
          placeholder="Maps Link"
          valueState={[mapsLink, setMapsLink]}
          className="border-gray-300 py-1 px-2 rounded"
        />
      </div>
      </div>
  );
}
