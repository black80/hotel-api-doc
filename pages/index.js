import { useState } from "react";
import "tailwindcss/tailwind.css";
import logo from "../assets/logo/meta.svg";
export default function Home() {
  const [response, setresponse] = useState([]);
  const [active, setactive] = useState("")
  const getCountries = async (endPoint) => {
    await fetch(`https://my-json-server.typicode.com/black80/hotel/${endPoint}`, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).
      then(async res => {
        const data = await res.json();
        setresponse(data)
      })
  }
  return (
    <div className="flex flex-row h-screen">
     
      {/* Start of Side Bar */}
      <div className="space-y-6 flex flex-col w-1/6 shadow-md">
        <div id="logo" className="flex p-6 justify-center">
          <img src={logo} className="w-1/2" />
        </div>
        <div className="flex flex-col w-3/4 space-y-3 justify-between self-center">
          <p className="text-sm font-bold text-gray-400">Welcome</p>
          <p className="text-gray-500 font-extrabold text-lg">Introduction</p>
        </div>
        <div className="flex flex-col w-3/4 space-y-3 justify-between self-center">
          <p className="text-sm font-bold text-gray-400">Reference</p>

          <p className={active != "con" ? "text-gray-500 font-extrabold text-lg p2" : "text-gray-500 font-extrabold text-lg border-l-4 border-blue-custom p-2"}><a onClick={()=>setactive("con")} href="#countries">Countries</a></p>
          <p className={active != "room" ? "text-gray-500 font-extrabold text-lg p2" : "text-gray-500 font-extrabold text-lg border-l-4 border-blue-custom p-2"}><a onClick={()=>setactive("room")} href="#roomType">Room Type</a> </p>
          <p className={active != "extra" ? "text-gray-500 font-extrabold text-lg p2" : "text-gray-500 font-extrabold text-lg border-l-4 border-blue-custom p-2"}><a onClick={()=>setactive("extra")} href="#extra">Extra Service</a> </p>
          <p className={active != "gests" ? "text-gray-500 font-extrabold text-lg p2" : "text-gray-500 font-extrabold text-lg border-l-4 border-blue-custom p-2"}><a onClick={()=>setactive("gests")} href="#guests">Check In Form</a>  </p>

        </div>
      </div>
      {/* End of Side Bar */}
      <div className="flex-1 overflow-auto">
        {/* Start of Row Header */}
        <div className="flex flex-row md:h-16 ">
          <div className="flex flex-row w-full justify-around bg-gray-light p-3">
            <select className="bg-gray-dark border rounded-md w-min justify-around md:w-24 text-blue-custom font-bold shadow-sm">
              <option>
                JS
              </option>
            </select>
            <button className="bg-blue-custom border rounded-md w-1/6 justify-around text-white">
              <a href="https://github.com/black80/hotel-mockup">Clone Api</a>
          </button>
          </div>
        </div>
        {/* End Of Row Header */}
        <div className="flex flex-col p-20 justify-between space-y-14 h-screen mb-5">
          {/* Countries */}
          <div id="countries" className="space-y-3">
            <div className="text-playground font-bold text-2xl">Countries & Cities</div>
            <div className="text-xs text-gray-500 italic">GET Request</div>
            <div className=" border-double border border-gray-500"></div>
            {/* Start Of Grid */}
            <div className="grid grid-rows-3 grid-flow-col gap-4">
              <div className="row-span-3 font-semibold">response Name</div>
              <div className="col-span space-y-3">
                <div className="w-full bg-playground rounded-md p-2 text-class-pink">
                  http://localhost:3000/countries
                </div>
                <div className="text-aurora text-sm italic">
                  string
                </div>
              </div>
              <div className="row-span-2 col-span-2 space-y-3">
                <input type="text" className="w-3/4 border border-gray-200 rounded-md h-1/4" />
                <div>
                  <button onClick={() => getCountries("countries")} className="bg-blue-custom border rounded-md w-1/4 h-full text-white text-md">TRY IT OUT</button>
                </div>
              </div>
            </div>
            {/* End OF GRID */}
          </div>

          {/* RoomType */}
          <div id="roomType" className="space-y-3">
            <div className="text-playground font-bold text-2xl">ٌRoom Type</div>
            <div className="text-xs text-gray-500 italic">GET Request</div>
            <div className=" border-double border border-gray-500"></div>
            {/* Start Of Grid */}
            <div className="grid grid-rows-3 grid-flow-col gap-4">
              <div className="row-span-3 font-semibold">Room Type Name</div>
              <div className="col-span space-y-3">
                <div className="w-full bg-playground rounded-md p-2 text-class-pink">
                  http://localhost:3000/room-type
                </div>
                <div className="text-aurora text-sm italic">
                  string
                </div>
              </div>
              <div className="row-span-2 col-span-2 space-y-3">
                <input type="text" className="w-3/4 border border-gray-200 rounded-md h-1/4" />
                <div>
                  <button onClick={() => getCountries("room-type")} className="bg-blue-custom border rounded-md w-1/4 h-full text-white text-md">TRY IT OUT</button>
                </div>
              </div>
            </div>
            {/* End OF GRID */}
          </div>

          {/* Extra Services */}
          <div id="extra" className="space-y-3">
            <div className="text-playground font-bold text-2xl">Extra Services</div>
            <div className="text-xs text-gray-500 italic">GET Request</div>
            <div className=" border-double border border-gray-500"></div>
            {/* Start Of Grid */}
            <div className="grid grid-rows-3 grid-flow-col gap-4">
              <div className="row-span-3 font-semibold">Service Name</div>
              <div className="col-span space-y-3">
                <div className="w-full bg-playground rounded-md p-2 text-class-pink">
                  http://localhost:3000/extra-service
                </div>
                <div className="text-aurora text-sm italic">
                  string
                </div>
              </div>
              <div className="row-span-2 col-span-2 space-y-3">
                <input type="text" className="w-3/4 border border-gray-200 rounded-md h-1/4" />
                <div>
                  <button onClick={() => getCountries("extra-service")} className="bg-blue-custom border rounded-md w-1/4 h-full text-white text-md">TRY IT OUT</button>
                </div>
              </div>
            </div>
            {/* End OF GRID */}
          </div>

          {/* Check In Form */}
          <div id="guests" className="space-y-3">
            <div className="text-playground font-bold text-2xl">Checked In Guests</div>
            <div className="text-xs text-gray-500 italic">GET Request</div>
            <div className=" border-double border border-gray-500"></div>
            {/* Start Of Grid */}
            <div className="grid grid-rows-3 grid-flow-col gap-4">
              <div className="row-span-3 font-semibold">Guest First Name</div>
              <div className="col-span space-y-3">
                <div className="w-full bg-playground rounded-md p-2 text-class-pink">
                  http://localhost:3000/guests
                </div>
                <div className="text-aurora text-sm italic">
                  string
                </div>
              </div>
              <div className="row-span-2 col-span-2 space-y-3">
                <input type="text" className="w-3/4 border border-gray-200 rounded-md h-1/4" />
                <div>
                  <button onClick={() => getCountries("guests")} className="bg-blue-custom border rounded-md w-1/4 h-full text-white text-md">TRY IT OUT</button>
                </div>
              </div>
            </div>
            {/* End OF GRID */}
          </div>
        </div>


      </div>
      <div className="bg-playground flex-1 overflow-auto">
        <div className="p-6 text-white">
          <code>
            {
              JSON.stringify(response)
            }
          </code>

        </div>

      </div>
    </div>
  )
}
