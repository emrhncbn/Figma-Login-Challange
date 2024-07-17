import { useState } from "react";
import Addfarm from "./Addfarm";
import Addcrop from "./Addcrop";
import { Link } from "react-router-dom";

const Farmanalytics = () => {
  const [showAddFarm, setShowAddFarm] = useState(false);
  const [showAddCrop, setShowAddCrop] = useState(false);

  // window nesnesini kullanarak tarayıcı özel özelliklere erişim sağlıyor
  const handleClickOutside = (e) => {
    if (e.target === window) {
      setShowAddFarm(false)
      setShowAddCrop(false)
    }
  }

  return (
    <div
      className="bg-[#36925afb] min-h-screen p-5 flex"
      onClick={handleClickOutside}
    >
      <div className="flex flex-col items-center w-1/5">
        <div className="flex flex-col items-center mb-5">
          <img
            src="https://s3-alpha-sig.figma.com/img/1d90/0509/2a4e267a9ee52665f57f25558251573f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DgYBEjddBvvGDBDni-zXe6pFtzggJ8VYXZaNz3003WlS2G6QudMR0b8W0mCP7JdTAu72sF7OANSr6Oh8luvaVZP9ES8yBV-tDezslj8QMQz3laF0PYGYbNyeb-IgWIbMoPCsTRgEGBHILIuXnTE1vphKI1voU~q1yKmUmCSdhKE6z5CP-irL3un6ZmnWalBYL-4MnfLuFFmB4VjExXuNMZuYfXHRbJeIWUARNYmRtWl6oz44VU956G~A8S3ok~Uecz0EVzhsWdT0maXVVDHNutaOny9rOrpwwLXmr5tI~rvQ7OSL-BgS5gwZK7Ur2BLhLhdQETO6FmNU87Gg42Zu9A__"
            alt="Profile Picture"
            className="w-[150px] h-[150px] rounded-full border-4 border-white mb-4"
          />
          <h3 className="text-white font-bold">Namık Korona</h3>
          <p className="text-white mb-5">Farm Owner</p>
        </div>
        <ul className="list-none p-0 mb-5 w-full">
            <Link to="/farmanalytics">
          <li className="text-white text-2xl font-bold w-full p-2 text-center cursor-pointer hover:bg-white hover:text-[#36925afb]">
            Farm Analytics
          </li>
            </Link>
            <Link to="/livestock">
          <li className="text-white text-2xl font-bold w-full p-2 text-center cursor-pointer hover:bg-white hover:text-[#36925afb]">
            Livestock
          </li>
            </Link>
            <Link to="/dashboard">
          <li className="text-white text-2xl font-bold w-full p-2 text-center cursor-pointer hover:bg-white hover:text-[#36925afb]">
            Dashboard
          </li>
            </Link>
        </ul>
        <button
          onClick={() => setShowAddFarm(true)}
          className="bg-white text-[#36925afb] w-[150px] h-[50px] text-xl rounded-md font-bold mt-40"
        >
          + Add Farm
        </button>
      </div>
      <div className="bg-white p-5 ml-5 w-4/5 rounded-lg relative">
        {showAddFarm && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <Addfarm onClose={() => setShowAddFarm(false)} />
          </div>
        )}
        {showAddCrop && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <Addcrop onClose={() => setShowAddCrop(false)} />
          </div>
        )}
        <div className="flex justify-between">
          <h2 className="text-[#36925afb] text-4xl font-bold">Farm 1</h2>
          <button
            onClick={() => setShowAddCrop(true)}
            className="bg-[#36925afb] text-white w-[150px] h-[50px] text-xl rounded-md font-bold"
          >
            + Add Crop
          </button>
        </div>
        <div className="flex justify-between p-2 mt-2 bg-white rounded-md">
          <p className="text-[#36925afb] text-xl font-bold p-2 shadow-lg w-[300px] h-[70px] relative">
            Nitrogen: <span className="text-black">20%</span>
            <span className="text-green-500 text-sm block mt-1 absolute border-2 rounded border-green-500">Good</span>
          </p>
          <p className="text-[#36925afb] text-xl font-bold p-2 shadow-lg w-[300px] h-[70px]">
            Phosphorus: <span className="text-black">8%</span>
            <span className="text-green-500 text-sm block mt-1 absolute border-2 rounded border-green-500">Good</span>
          </p>
          <p className="text-[#36925afb] text-xl font-bold p-2 shadow-lg w-[300px] h-[70px]">
            Potassium: <span className="text-black">13%</span>
            <span className="text-green-500 text-sm block mt-1 absolute border-2 rounded border-green-500">Good</span>
          </p>
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex flex-col w-1/3">
            <div className="p-2 bg-white rounded-md mt-20">
              <p className="text-[#36925afb] text-xl font-bold p-2 shadow-lg h-[100px]">
                Humidity: <span className="text-black">15%</span>
                <span className="text-green-500 text-sm block mt-1 absolute border-2 rounded border-green-500">Good</span>
              </p>
            </div>
            <div className="p-2 bg-white rounded-md mb-2">
              <p className="text-[#36925afb] text-xl font-bold shadow-lg p-2 h-[100px]">
                Soil Hydration: <span className="text-black">40%</span>
                <span className="text-red-500 text-sm block mt-1 absolute border-2 rounded border-red-500">High</span>
              </p>
            </div>
            <div className="p-2 bg-white rounded-md">
              <p className="text-[#36925afb] text-xl font-bold shadow-lg p-2 h-[100px]">
                PH Value: <span className="text-black">4</span>
                <span className="text-yellow-500 text-sm block mt-1 absolute border-2 rounded border-yellow-500">Low</span>
              </p>
            </div>
          </div>
          <div className="w-2/3 flex flex-col items-center relative">
            <div className="relative">
              <img
                src="https://s3-alpha-sig.figma.com/img/80a3/350d/d0a8c69c21079eb5fefa38dada9b96e2?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OooPTZHdmNqz0HXSsNL5JmZdppc8dVbNODjG14oymz~nPt8paMoBaj45QzyHHYngdDc9pD0mLjWeMo0l2c8MGza~pQmWkcucFTGy82yURfJ5OimmYiXTOIUXqkqNRDl7V5wmpC-5m2hBK4RoRJJjXPo-mROIA4~fJDOK0hilJemAeCEvPcrEbIUDPCn~dsZlgl-j6P~9AA4zWar1orFqPOjgrUN7mZs8hkiiXTAzYWVm6m~TwExjaUbz~80IkCwFVbIV9Fj8SMLkePDkGLrzx-1BExnV-5lfRyfD8lCsL~ZNQo7rbfNakTuHn~rlWLqWuB3IwlL~1~nMrzady8nmSg__"
                alt="Farm"
                className="w-[550px] h-[350px] mb-2 object-cover rounded-lg mt-2"
              />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-5 flex">
                <button className="mr-1 bg-white w-[30px] h-[30px] rounded-full flex items-center justify-center">-</button>
                <button className="ml-1 bg-white w-[30px] h-[30px] rounded-full flex items-center justify-center">+</button>
              </div>
            </div>
            <div className="text-center mt-5 flex justify-center rounded-md p-2">
              <p className="text-[#36925afb] text-2xl font-bold mr-5 border-2 border-[#36925afb] rounded-xl p-3">Crop: Wheat</p>
              <p className="text-[#36925afb] text-2xl font-bold border-2 border-[#36925afb] rounded-xl p-3">Area: 25 Acres</p>
            </div>
            <p className="text-[#36925afb] text-3xl font-bold border-2 border-[#36925afb] rounded-xl p-3 mt-2 w-full flex items-center justify-center">Efficacy Rating</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Farmanalytics
