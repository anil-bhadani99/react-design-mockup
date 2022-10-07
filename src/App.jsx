import React from "react";
import "./index.css";

const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="banner_container bg-orange-700 h-40 pt-6 pb-4 relative">
          <div className="flex flex-col justify-between h-full">
            <h1 className="text-white font-bold text-2xl text-center">Choose a survey to earn virual currency</h1>
            <div className="flex justify-between self-end w-full px-10">
              <button>
                <img src="../assets/images/back-arrow.svg" alt="demo" />
              </button>
              <button>
                <img src="../assets/images/action.svg" alt="demo" />
              </button>
            </div>
          </div>
          <div className="w-28 h-28 bg-white rounded-full absolute -bottom-14 left-2/4 p-2">
            <div className="w-24 h-24 bg-white rounded-full border border-black p-2">
              <div className="w-20 h-20 bg-white rounded-full border border-black flex items-center justify-center flex-col">
                <div className="text-xs uppercase">LEVEL</div>
                <div className=" text-xl font-bold leading-5 text-[#d45099]">12</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap pt-24 container px-10 overflow-y-auto listing_container">
          <div className="w-1/2 mb-12">
            <div className="flex">
              <div className="w-20 h-20 mr-3">
                <img src="../assets/images/Automobiles.png" className="w-full h-full" alt="demo" />
              </div>
              <div>
                <h3 className="font-bold text-base leading-4">Automobiles</h3>
                <div className="bg-[#d45099] text-white w-auto text-xs py-1 px-4 leading-4 rounded-sm mb-1 mt-0.5 max-w-max uppercase">new</div>
                <div className="flex items-center">
                  <span className="w-3 h-3 mr-2">
                    <img src="../assets/images/clock.png" className="w-full h-full" alt="demo" />
                  </span>
                  <p className="text-xs leading-4 font-medium">2 Minutes</p>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 mr-2">
                    <img src="../assets/images/Questionmark.png" className="w-full h-full" alt="demo" />
                  </span>
                  <p className="text-xs font-medium leading-4">3 Qualifications</p>
                </div>
              </div>
            </div>
            <button className="bg-[#d45099] text-white h-12 w-full min-w-xs max-w-xs rounded-lg mt-4 font-medium tracking-wider flex items-center justify-center">
              <div className="w-4 h-4 bg-gray-400 rounded-full border border-white flex items-center justify-center text-xs mr-2 text-gray-500">
                T
              </div>
              30000
            </button>
          </div>

          <div className="w-1/2 mb-12">
            <div className="flex">
              <div className="w-20 h-20 mr-3">
                <img src="../assets/images/Lifestyle.png" className="w-full h-full" alt="demo" />
              </div>
              <div>
                <h3 className="font-bold text-base leading-4">Lifestyle</h3>
                <div className="text-white w-auto text-xs py-1 px-4 leading-4 rounded-sm mb-1 mt-0.5 max-w-max bg-[#353534]">8 completes left</div>
                <div className="flex items-center">
                  <span className="w-3 h-3 mr-2">
                    <img src="../assets/images/clock.png" className="w-full h-full" alt="demo" />
                  </span>
                  <p className="text-xs leading-4 font-medium">2 Minutes</p>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 mr-2">
                    <img src="../assets/images/Questionmark.png" className="w-full h-full" alt="demo" />
                  </span>
                  <p className="text-xs font-medium leading-4">3 Qualifications</p>
                </div>
              </div>
            </div>
            <button className="bg-[#d45099] text-white h-12 w-full min-w-xs max-w-xs rounded-lg mt-4 font-medium tracking-wider flex items-center justify-center">
              <div className="w-4 h-4 bg-gray-400 rounded-full border border-white flex items-center justify-center text-xs mr-2 text-gray-500">
                T
              </div>
              30000
            </button>
          </div>

          <div className="w-1/2 mb-12">
            <div className="flex">
              <div className="w-20 h-20 mr-3">
                <img src="../assets/images/Food.png" className="w-full h-full" alt="demo" />
              </div>
              <div>
                <h3 className="font-bold text-base leading-4">Food</h3>
                <div className="bg-[#353534] text-white w-auto text-xs py-1 px-4 leading-4 rounded-sm mb-1 mt-0.5 max-w-max">8 completes left</div>
                <div className="flex items-center">
                  <span className="w-3 h-3 mr-2">
                    <img src="../assets/images/clock.png" className="w-full h-full" alt="demo" />
                  </span>
                  <p className="text-xs leading-4 font-medium">2 Minutes</p>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 mr-2">
                    <img src="../assets/images/Questionmark.png" className="w-full h-full" alt="demo" />
                  </span>
                  <p className="text-xs font-medium leading-4">3 Qualifications</p>
                </div>
              </div>
            </div>
            <button className="bg-[#d45099] text-white h-12 w-full min-w-xs max-w-xs rounded-lg mt-4 font-medium tracking-wider flex items-center justify-center">
              <div className="w-4 h-4 bg-gray-400 rounded-full border border-white flex items-center justify-center text-xs mr-2 text-gray-500">
                T
              </div>
              30000
            </button>
          </div>

          <div className="w-1/2 mb-12">
            <div className="flex">
              <div className="w-20 h-20 mr-3">
                <img src="../assets/images/Automobiles.png" className="w-full h-full" alt="demo" />
              </div>
              <div>
                <h3 className="font-bold text-base leading-4">Automobiles</h3>
                <div className="bg-[#353534] text-white w-auto text-xs py-1 px-4 leading-4 rounded-sm mb-1 mt-0.5 max-w-max">8 completes left</div>
                <div className="flex items-center">
                  <span className="w-3 h-3 mr-2">
                    <img src="../assets/images/clock.png" className="w-full h-full" alt="demo" />
                  </span>
                  <p className="text-xs leading-4 font-medium">2 Minutes</p>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 mr-2">
                    <img src="../assets/images/Questionmark.png" className="w-full h-full" alt="demo" />
                  </span>
                  <p className="text-xs font-medium leading-4">3 Qualifications</p>
                </div>
              </div>
            </div>
            <button className="bg-[#d45099] text-white h-12 w-full min-w-xs max-w-xs rounded-lg mt-4 font-medium tracking-wider flex items-center justify-center">
              <div className="w-4 h-4 bg-gray-400 rounded-full border border-white flex items-center justify-center text-xs mr-2 text-gray-500">
                T
              </div>
              30000
            </button>
          </div>

          <div className="w-1/2 mb-12">
            <div className="flex">
              <div className="w-20 h-20 mr-3">
                <img src="../assets/images/Technology.png" className="w-full h-full" alt="demo" />
              </div>
              <div>
                <h3 className="font-bold text-base leading-4">Technology</h3>
                <div className="bg-[#d45099] text-white w-auto text-xs py-1 px-4 leading-4 rounded-sm mb-1 mt-0.5 max-w-max uppercase">new</div>
                <div className="flex items-center">
                  <span className="w-3 h-3 mr-2">
                    <img src="../assets/images/clock.png" className="w-full h-full" alt="demo" />
                  </span>
                  <p className="text-xs leading-4 font-medium">2 Minutes</p>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 mr-2">
                    <img src="../assets/images/Questionmark.png" className="w-full h-full" alt="demo" />
                  </span>
                  <p className="text-xs font-medium leading-4">3 Qualifications</p>
                </div>
              </div>
            </div>
            <button className="bg-[#d45099] text-white h-12 w-full min-w-xs max-w-xs rounded-lg mt-4 font-medium tracking-wider flex items-center justify-center">
              <div className="w-4 h-4 bg-gray-400 rounded-full border border-white flex items-center justify-center text-xs mr-2 text-gray-500">
                T
              </div>
              30000
            </button>
          </div>

          <div className="w-1/2 mb-12">
            <div className="flex">
              <div className="w-20 h-20 mr-3">
                <img src="../assets/images/Food.png" className="w-full h-full" alt="demo" />
              </div>
              <div>
                <h3 className="font-bold text-base leading-4">Food</h3>
                <div className="bg-[#353534] text-white w-auto text-xs py-1 px-4 leading-4 rounded-sm mb-1 mt-0.5 max-w-max">8 completes left</div>
                <div className="flex items-center">
                  <span className="w-3 h-3 mr-2">
                    <img src="../assets/images/clock.png" className="w-full h-full" alt="demo" />
                  </span>
                  <p className="text-xs leading-4 font-medium">2 Minutes</p>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 mr-2">
                    <img src="../assets/images/Questionmark.png" className="w-full h-full" alt="demo" />
                  </span>
                  <p className="text-xs font-medium leading-4">3 Qualifications</p>
                </div>
              </div>
            </div>
            <button className="bg-[#d45099] text-white h-12 w-full min-w-xs max-w-xs rounded-lg mt-4 font-medium tracking-wider flex items-center justify-center">
              <div className="w-4 h-4 bg-gray-400 rounded-full border border-white flex items-center justify-center text-xs mr-2 text-gray-500">
                T
              </div>
              30000
            </button>
          </div>

          <div className="w-1/2 mb-12">
            <div className="flex">
              <div className="w-20 h-20 mr-3">
                <img src="../assets/images/Lifestyle.png" className="w-full h-full" alt="demo" />
              </div>
              <div>
                <h3 className="font-bold text-base leading-4">Lifestyle</h3>
                <div className="bg-[#353534] text-white w-auto text-xs py-1 px-4 leading-4 rounded-sm mb-1 mt-0.5 max-w-max">8 completes left</div>
                <div className="flex items-center">
                  <span className="w-3 h-3 mr-2">
                    <img src="../assets/images/clock.png" className="w-full h-full" alt="demo" />
                  </span>
                  <p className="text-xs leading-4 font-medium">2 Minutes</p>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 mr-2">
                    <img src="../assets/images/Questionmark.png" className="w-full h-full" alt="demo" />
                  </span>
                  <p className="text-xs font-medium leading-4">3 Qualifications</p>
                </div>
              </div>
            </div>
            <button className="bg-[#d45099] text-white h-12 w-full min-w-xs max-w-xs rounded-lg mt-4 font-medium tracking-wider flex items-center justify-center">
              <div className="w-4 h-4 bg-gray-400 rounded-full border border-white flex items-center justify-center text-xs mr-2 text-gray-500">
                T
              </div>
              30000
            </button>
          </div>

          <div className="w-1/2 mb-12">
            <div className="flex">
              <div className="w-20 h-20 mr-3">
                <img src="../assets/images/Technology.png" className="w-full h-full" alt="demo" />
              </div>
              <div>
                <h3 className="font-bold text-base leading-4">Technology</h3>
                <div className="bg-[#d45099] text-white w-auto text-xs py-1 px-4 leading-4 rounded-sm mb-1 mt-0.5 max-w-max uppercase">new</div>
                <div className="flex items-center">
                  <span className="w-3 h-3 mr-2">
                    <img src="../assets/images/clock.png" className="w-full h-full" alt="demo" />
                  </span>
                  <p className="text-xs leading-4 font-medium">2 Minutes</p>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 mr-2">
                    <img src="../assets/images/Questionmark.png" className="w-full h-full" alt="demo" />
                  </span>
                  <p className="text-xs font-medium leading-4">3 Qualifications</p>
                </div>
              </div>
            </div>
            <button className="bg-[#d45099] text-white h-12 w-full min-w-xs max-w-xs rounded-lg mt-4 font-medium tracking-wider flex items-center justify-center">
              <div className="w-4 h-4 bg-gray-400 rounded-full border border-white flex items-center justify-center text-xs mr-2 text-gray-500">
                T
              </div>
              30000
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
