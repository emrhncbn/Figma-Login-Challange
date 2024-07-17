import { useState } from "react"

const Addcrop = ({onClose}) => {
    const [cropName, setCropName] = useState("")
    const [soilType, setSoilStype] = useState("")
    const [image, setImage] = useState("")

    const handleSubmit = () =>{
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
      <h2 className="text-[#36925afb] text-4xl font-bold">CROP DETAILS</h2>
      <select
        className="w-[400px] h-[50px] p-2 border border-gray-300 rounded-md"
        value={cropName}
        onChange={(e) => setCropName(e.target.value)}
      >
        <option value="">Crop Name</option>
        <option value="crop name 1">Crop Name 1</option>
        <option value="crop name 2">Crop Name 2</option>
        <option value="crop name 3">Crop Name 3</option>
      </select>
      <input
        className="w-[400px] h-[50px] p-2 border border-gray-300 rounded-md"
        type="text"
        placeholder="Soil Type"
        value={soilType}
        onChange={(e) => setSoilStype(e.target.value)}
      />
      <div className="flex">

      <input
        className="w-[200px] h-[50px] p-2 border border-gray-300 rounded-md"
        type="text"
        alt="Add Image URL"
        placeholder="Add Image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        />
        </div>
      <button
        onClick={handleSubmit}
        className="bg-[#36925afb] text-white w-[200px] h-[50px] text-xl rounded-md font-bold"
      >
        SUBMIT
      </button>
    </div>
  )
}
export default Addcrop