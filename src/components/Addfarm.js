import { useState } from "react";

const Addfarm = ({ onClose }) => {
  const [farmName, setFarmName] = useState("")
  const [farmSize, setFarmSize] = useState("")
  const [cropType, setCropType] = useState("")
  const [image, setImage] = useState("")
  
  const handleSubmit = () => {
    onClose()
  }

  return (
    <div className="relative flex flex-col items-center justify-center space-y-4 w-[850px] h-[700px] bg-white">
      <button
        onClick={onClose}
        className="absolute top-4 left-4 bg-white text-[#36925afb] w-[100px] h-[40px] text-xl rounded-md font-bold border-2 border-[#36925afb]"
      >
        BACK
      </button>
      <h2 className="text-[#36925afb] text-4xl font-bold">FARM DETAILS</h2>
      <input
        className="w-[400px] h-[50px] p-2 border border-gray-300 rounded-md"
        type="text"
        placeholder="Farm Name"
        value={farmName}
        onChange={(e) => setFarmName(e.target.value)}
      />
      <input
        className="w-[400px] h-[50px] p-2 border border-gray-300 rounded-md"
        type="text"
        placeholder="Farm Size (in acres)"
        value={farmSize}
        onChange={(e) => setFarmSize(e.target.value)}
      />
      <input
        className="w-[400px] h-[50px] p-2 border border-gray-300 rounded-md"
        type="image"
        alt="Upload Photo"
        placeholder="Upload Photo"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <select
        className="w-[400px] h-[50px] p-2 border border-gray-300 rounded-md"
        value={cropType}
        onChange={(e) => setCropType(e.target.value)}
      >
        <option value="">Select Crop Type</option>
        <option value="crop type 1">Crop Type 1</option>
        <option value="crop type 2">Crop Type 2</option>
        <option value="crop type 3">Crop Type 3</option>
      </select>
      <button
        onClick={handleSubmit}
        className="bg-[#36925afb] text-white w-[200px] h-[50px] text-xl rounded-md font-bold"
      >
        SUBMIT
      </button>
    </div>
  )
}

export default Addfarm
