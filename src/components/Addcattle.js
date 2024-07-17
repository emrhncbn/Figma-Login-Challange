import { useState } from "react";

const Addcattle = ({ onClose }) => {
  const [cattleType, setCattleType] = useState("")
  const [breed, setBreed] = useState("")
  const [count, setCount] = useState("")
  const [image, setImage] = useState("")
  const [gender, setGender] = useState("")

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
      <h2 className="text-[#36925afb] text-4xl font-bold">CATTLE DETAILS</h2>
      <input
        className="w-[400px] h-[50px] p-2 border border-gray-300 rounded-md"
        type="text"
        placeholder="Enter the Cattle Type"
        value={cattleType}
        onChange={(e) => setCattleType(e.target.value)}
      />
      <input
        className="w-[400px] h-[50px] p-2 border border-gray-300 rounded-md"
        type="text"
        placeholder="Enter the Breed"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />
      <input
        className="w-[400px] h-[50px] p-2 border border-gray-300 rounded-md"
        type="text"
        placeholder="Count"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <input
        className="w-[400px] h-[50px] p-2 border border-gray-300 rounded-md"
        type="text"
        placeholder="Add Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <select
        className="w-[400px] h-[50px] p-2 border border-gray-300 rounded-md"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="">Male/Female</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
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

export default Addcattle
