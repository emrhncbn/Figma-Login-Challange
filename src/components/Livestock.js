import { Link } from "react-router-dom";
import Addfarm from "./Addfarm";
import Addcattle from "./Addcattle";
import { useState } from "react";

const Livestock = () => {
  const [showAddFarm, setShowAddFarm] = useState(false);
  const [showAddCattle, setShowAddCattle] = useState(false);

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
        {showAddCattle && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <Addcattle onClose={() => setShowAddCattle(false)} />
          </div>
        )}
        <div className="flex justify-between items-start">
          <h2 className="text-[#36925afb] text-4xl font-bold">Manage Livestock</h2>
          <div className="flex flex-col items-end space-y-4">
            <div className="flex space-x-4">
              <button className="bg-[#36925afb] text-white w-[150px] h-[50px] text-xl rounded-md font-bold">
                View Live
              </button>
              <button
                onClick={() => setShowAddCattle(true)}
                className="bg-[#36925afb] text-white w-[150px] h-[50px] text-xl rounded-md font-bold"
              >
                + Add Cattle
              </button>
            </div>
            <div className="flex space-x-4">
              <p className="bg-[#36925afb] text-white w-[150px] h-[60px] text-xl rounded-md flex justify-center items-center font-bold">
                Total: 63
              </p>
              <p className="bg-[#36925afb] text-white w-[200px] h-[60px] text-xl rounded-md flex justify-center items-center font-bold">
                Area: 25 Acres
              </p>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 mt-20">
          <div className="relative p-2 bg-white rounded-md shadow-lg">
            <p className="text-[#36925afb] text-3xl font-bold mb-5">Goat:</p>
            <p className="text-[#36925afb] text-xl font-bold p-2 mb-5">Count:</p>
            <p className="text-[#36925afb] text-xl font-bold p-2 mb-5">Breed:</p>
            <p className="text-[#36925afb] text-xl font-bold p-2 mb-5">Males:</p>
            <p className="text-[#36925afb] text-xl font-bold p-2 mb-5">Females:</p>
            <img
              className="w-[400px] h-[250px] opacity-40"
              src="https://s3-alpha-sig.figma.com/img/9c5d/dc68/6886d97e2247994b98077963ada8dd5c?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KYm1ON3pdPkrzH0wm4WbtsT2PvsoLzrDn7go2mpFnVYQ2CB54ftoPOlK3qZWz3ABHt41kSqLsdG6jAiLvfPt72FOdRw44lwFYIvMVVv5jCLXX-6l6itgEJbNOfTKlC8PWF4LGoMWRUuNJsExPaJvtH794j05VrgOGcurZMkcrEXHibwonLTfxA5hzIdyMArvc3UgzGfVL5UiYMgT~Bc7kBnK9671lMFen8x0pM2mf0JerkojqPZyD26Xb3KTt9Bj5lrPr1Vmj8wzLE6LY6rp5T91VfZ7EW0BBU4qNYPPFhFeumQloob6qrY7bMcgL2-b-RH0ZRlVK5QTTZayd1alzg__"
              alt="Goats"
            />
            <div className="absolute inset-0 flex justify-center items-center mt-[300px] mr-5">
              <p className="text-white text-6xl font-bold">+5</p>
            </div>
          </div>
          <div className="relative p-2 bg-white rounded-md shadow-lg">
            <p className="text-[#36925afb] text-3xl font-bold mb-5">Cow:</p>
            <p className="text-[#36925afb] text-xl font-bold p-2 mb-5">Count:</p>
            <p className="text-[#36925afb] text-xl font-bold p-2 mb-5">Breed:</p>
            <p className="text-[#36925afb] text-xl font-bold p-2 mb-5">Males:</p>
            <p className="text-[#36925afb] text-xl font-bold p-2 mb-5">Females:</p>
            <img
              className="w-[400px] h-[250px] opacity-40"
              src="https://s3-alpha-sig.figma.com/img/0aa2/3c8a/4d5ed94eec94d74c9c9b40dfffafa0d0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R1mAA5FCx0QFRnwgGQPEBVDSCQ4SegYLu1jJ4o6nEVj2nShjHwClEavUxDd9lSX~Ak2-OVk9~9KcHtVq8n8uhgqZN9vcH0bZEbJ4IaddcvkWaeccybgYaWrsfNGmmKN2lSuKJhvflzn3QpPckW6O7gClHEksHeEizOwLao0tmonQydwHoRl9YV8eQIULGzvAZkCXYVBE0NXmheLX46iq~J7BJM3IjMYOTMYIowX0vCBa~WEvzwaoTULAkcLwdBr0TNtecxf4JQl0Zd9TEtu7TNXjjhqYj1ZW4i1sl4bQIQIpPGgbht~PzZriSLilYi8ipoEXRAb6oclJblYPVgRT~g__"
              alt="Cows"
            />
            <div className="absolute inset-0 flex justify-center items-center mt-[300px] mr-5">
              <p className="text-white text-6xl font-bold">+2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Livestock;
