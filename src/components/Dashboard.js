import { Link } from "react-router-dom";
import Addfarm from "./Addfarm";
import { useState } from "react";

const Dashboard = () => {
  const [showAddFarm, setShowAddFarm] = useState(false)

  const handleAddFarmClick = () => {
    setShowAddFarm(true)
  }

  return (
    <div className="bg-[#36925afb] min-h-screen p-5 flex">
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
        <button onClick={handleAddFarmClick} className="bg-white text-[#36925afb] w-[150px] h-[50px] text-xl rounded-md font-bold mt-40">
          + Add Farm
        </button>
      </div>
      <div className="bg-white p-5 ml-5 w-4/5 rounded-lg relative">
        {showAddFarm && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <Addfarm onClose={() => setShowAddFarm(false)} />
          </div>
        )}
        <div className="flex justify-between items-start">
          <h2 className="text-[#36925afb] text-4xl font-bold">Manage Livestock</h2>
          <div className="flex flex-col items-end space-y-4">
            <div className="flex space-x-4">
              <button className="bg-[#36925afb] text-white w-[150px] h-[50px] text-xl rounded-md flex justify-center items-center font-bold">
                View Live
              </button>
            </div>
          </div>
        </div>
        <p className="text-[#36925afb] text-xl font-bold p-5 mt-10">Farms:</p>
        <p className="text-[#36925afb] text-xl font-bold p-5">Area:</p>
        <p className="text-[#36925afb] text-xl font-bold p-5">Expected Date of Harvest:</p>
        <div className="flex">
          <div className="relative">
            <img
              className="w-[600px] h-[700px]"
              src="https://s3-alpha-sig.figma.com/img/c9cf/8bb1/46f0b7d75265d76ad84a090505c61998?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hrIoPNUS2EM0A0qhia949nZ1UWLv6WINFy8DD1fxIYO5RFD7rR6nxWpM9ekLaNINA-FrnRWgmKVI9ysF0~682pMIzLlho7bttIWQME9R6ePqmoAdWEX9MbFCcYVxJP2raTWY6Hb1l1FLb6cr59K6ceLAGgbDnNpVRQl5zQVy6fi-wMwCYQUx6Hb19yJ-UMQmIa6astQqjPn22CgFzKqHKZxezG2AlBoKf44xRVINmT8hfVVbXjMjmQ9fHSSW3Wpqm~g~tJWO4C9uX6aFVGxyvmVSmXQHYckMRi8HaVLto0rQP~M9vEFBCYVg5D6mm-bAggQHVHIYZnMdh1J0gYXSwA__"
              alt="Farm Fields"
            />
            <p className="bg-white absolute bottom-0 right-0 p-2 mr-2 mb-1 rounded-lg">🚩Locate</p>
          </div>
          <div className="shadow-lg w-[600px] h-[700px] rounded-md relative p-5 ml-5">
            <p className="text-[#36925afb] text-4xl font-bold mb-5 text-center">Crops Distribution</p>
            <svg width="250" height="380" className="mx-auto">
              <defs id="_ABSTRACT_RENDERER_ID_12"></defs>
              <rect x="0" y="0" width="250" height="380" stroke="none" strokeWidth="0" fill="#ffffff"></rect>
              <g>
                <rect x="38" y="36" width="124" height="10" stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
              </g>
              <g>
                <g column-id="Wheat">
                  <text textAnchor="start" x="145" y="70.5" fontFamily="Arial" fontSize="14" stroke="none" strokeWidth="0" fill="#222222">Wheat</text>
                  <circle cx="136" cy="67" r="7" stroke="none" strokeWidth="0" fill="#ff9494"></circle>
                </g>
                <g column-id="Corn">
                  <text textAnchor="start" x="145" y="86.5" fontFamily="Arial" fontSize="14" stroke="none" strokeWidth="0" fill="#222222">Corn</text>
                  <circle cx="136" cy="83" r="7" stroke="none" strokeWidth="0" fill="#0066c5"></circle>
                </g>
                <g column-id="Barley">
                  <text textAnchor="start" x="145" y="102.5" fontFamily="Arial" fontSize="14" stroke="none" strokeWidth="0" fill="#222222">Barley</text>
                  <circle cx="136" cy="99" r="7" stroke="none" strokeWidth="0" fill="#ff0000"></circle>
                </g>
                <g column-id="Paddy">
                  <text textAnchor="start" x="145" y="118.5" fontFamily="Arial" fontSize="14" stroke="none" strokeWidth="0" fill="#222222">Paddy</text>
                  <circle cx="136" cy="115" r="7" stroke="none" strokeWidth="0" fill="#60a662"></circle>
                </g>
              </g>
              <path d="M58.104083988002806,166.98604080208543L39.20816797600561,168.97208160417085A38,38,0,0,1,77,127L77,146A19,19,0,0,0,58.104083988002806,166.98604080208543" stroke="#ffffff" strokeWidth="1" fill="#60a662"
              transform="scale(2) translate(0, -30)"></path>
              <path d="M58.233921528692385,167.97225483576437L39.46784305738477,170.94450967152878A38,38,0,0,1,39.20816797600561,168.97208160417085L58.104083988002806,166.98604080208543A19,19,0,0,0,58.233921528692385,167.97225483576437" stroke="#ffffff" strokeWidth="1" fill="#ff0000"
              transform="scale(2) translate(0, -30)"></path>
              <path d="M61.06525920903694,175.3481416652855L45.13051841807388,185.69628333057102A38,38,0,0,1,39.46784305738477,170.94450967152878L58.233921528692385,167.97225483576437A19,19,0,0,0,61.06525920903694,175.3481416652855" stroke="#ffffff" strokeWidth="1" fill="#0066c5"
              transform="scale(2) translate(0, -30)"></path>
              <path d="M77,146L77,127A38,38,0,1,1,45.13051841807388,185.69628333057102L61.06525920903694,175.3481416652855A19,19,0,1,0,77,146" stroke="#ffffff" strokeWidth="1" fill="#ff9494"
              transform="scale(2) translate(0, -30)"></path>
              <text x="153" y="275" textAnchor="middle" dominantBaseline="middle" fontFamily="Arial" fontSize="18" stroke="none" strokeWidth="0" fill="#222222" fontWeight="bold">23 Acres</text>
            </svg>
            <hr />
            <div className="space-y-3">
              <div className="flex items-center">
                <circle cx="136" cy="67" r="5" fill="#ff9494" />
                <span className="text-[#222222] ml-2 text-lg">Wheat: <span className="text-[#ff9494]">%60</span></span>
              </div>
              <div className="flex items-center">
                <circle cx="136" cy="83" r="5" fill="#0066c5" />
                <span className="text-[#222222] ml-2 text-lg">Corn: <span className="text-[#0066c5]">%10</span></span>
              </div>
              <div className="flex items-center">
                <circle cx="136" cy="99" r="5" fill="#ff0000" />
                <span className="text-[#222222] ml-2 text-lg">Barley: <span className="text-[#ff0000]">%5</span></span>
              </div>
              <div className="flex items-center">
                <circle cx="136" cy="115" r="5" fill="#60a662" />
                <span className="text-[#222222] ml-2 text-lg">Paddy: <span className="text-[#60a662]">%25</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
