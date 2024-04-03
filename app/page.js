import { BsStopwatch } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import { GoTrophy } from "react-icons/go";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { IoPlayCircleOutline } from "react-icons/io5";
import { BiDownArrowAlt } from "react-icons/bi";
import { MdDoNotDisturbAlt } from "react-icons/md";
import Image from "next/image";
import watch from "../app/assest/watch.png";
import Bnb from "../app/assest/bnb.png";
export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-t from-slate-400 to-slate-300 ">
        {/* nav bar start */}
        <div className="flex justify-between items-center p-5">
          {/*nav bar */}
          <div className="relative bg-white flex p-1  justify-between items-center  shadow-xl rounded-full">
            <div className="absolute top-0 left-0">
              <Image src={Bnb} width={50} height={80} />
            </div>
            <div className="flex items-center pl-16 ">
              <p className="font-bold text-lg">BNBUSD</p>
              <p className="text-[0.8rem] pl-1">$228.5332</p>
            </div>
          </div>

          <div className="relative w-[8rem] bg-white flex p-1 py-2  justify-between items-center  shadow-lg rounded-full">
            <div className="">
              <FaArrowLeft className="text-teal-400" />
            </div>
            <div className="absolute -top-1 left-0 right-0 translate-x-8 -translate-y-2">
              <Image
                src="https://assets.coingecko.com/coins/images/18076/standard/android-icon-192x192_%282%29.png?1696517583"
                width={60}
                height={30}
              />
            </div>
            <div className="">
              <FaArrowRight className="text-teal-400" />
            </div>
          </div>
          <div className="flex justify-between items-center ">
            <div className="relative mx-2">
              <div className="bg-white flex py-3 pl-2 pr-16  justify-center items-center  shadow-lg rounded-full">
                <p className="text-purple-700 text-lg font-bold">00:03</p>
                <p className="text-[.8rem] pl-1">5m</p>
              </div>
              <div className="absolute -top-7 -right-2">
                <Image src={watch} alt="image" width={70} height={45} />
              </div>
            </div>
            <div className="bg-slate-400 mx-1 p-2 text-white rounded-lg">
              <HiOutlineQuestionMarkCircle size={20} />
            </div>
            <div className="bg-slate-400 p-2 text-white rounded-lg">
              <GoTrophy size={20} />
            </div>
            <div className="bg-gray-200 p-2 mx-1 text-white rounded-lg">
              <BsStopwatch size={20} />
            </div>
          </div>
        </div>
        {/* nav bar end */}

        <div className="flex  justify-center items-center h-screen space-x-2 overflow-x-hidden">
          <div className=" relative py-5 flex justify-center">
            <div className="flex flex-col justify-center items-center py-3">
              <div className="expired bg-white rounded-3xl w-[20rem] border border-b-[4px] border-gray-200">
                <div className="flex justify-between items-center p-3 text-gray-500">
                  <div className="flex items-center font-semibold ">
                    <MdDoNotDisturbAlt size={20} />
                    <p>Expired</p>
                  </div>
                  <p>#248483</p>
                </div>

                {/*  <div className="hexagon"></div> */}
                <div className="relative p-3">
                  <div className="flex flex-col justify-center items-center py-3">
                    <p className="text-emerald-500 font-bold text-xl">UP</p>
                    <p className="text-slate-300 flex space-x-2">
                      <span className="text-slate-500 font-bold px-1">
                        1.94x
                      </span>
                      Payout
                    </p>
                  </div>
                  <div className="border-pink-500 border-4 rounded-lg p-3 ">
                    <div>
                      <p className="font-semibold text-sm text-slate-400">
                        CLOSE PRICE
                      </p>
                      <div className="flex justify-between items-center">
                        <p className="font-bold text-pink-500 text-lg border-slate-400 border-b-4 leading-[1rem] border-dotted">
                          $228.8431
                        </p>
                        <div className="bg-pink-500 text-white rounded p-1 flex items-center">
                          <BiDownArrowAlt />
                          <p className="pl-2">$-0.5294</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <div>
                        <p>Lock price:</p>
                        <p className="font-bold">Prize pool:</p>
                      </div>
                      <div>
                        <p className="text-end">$229.5492</p>
                        <p className="font-bold">5.1435 BNB</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center py-3">
                    <p className="text-slate-300 flex space-x-2">
                      <span className="text-slate-500 font-bold px-1">
                        2.06x
                      </span>
                      Payout
                    </p>
                    <p className="text-pink-500 font-bold text-xl">Down</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" relative py-5 flex justify-center">
            <div className="expired bg-white rounded-3xl w-[20rem] border border-b-[4px] border-gray-200">
              <div className="flex justify-between items-center p-3 text-gray-500">
                <div className="flex items-center font-semibold ">
                  <MdDoNotDisturbAlt size={20} />
                  <p>Expired</p>
                </div>
                <p>#248484</p>
              </div>

              {/*  <div className="hexagon"></div> */}
              <div className="relative p-3">
                <div className="flex flex-col justify-center items-center py-3">
                  <p className="text-emerald-500 font-bold text-xl">UP</p>
                  <p className="text-slate-300 flex space-x-2">
                    <span className="text-slate-500 font-bold px-1">1.76x</span>
                    Payout
                  </p>
                </div>

                <div className="border-pink-500 border-4 rounded-lg p-3 ">
                  <div>
                    <p className="font-semibold text-sm text-slate-400">
                      CLOSE PRICE
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-pink-500 text-lg border-slate-400 border-b-4 leading-[1rem] border-dotted">
                        $228.9473
                      </p>
                      <div className="bg-pink-500 text-white rounded p-1 flex items-center">
                        <BiDownArrowAlt />
                        <p className="pl-2">$-0.5791</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <p>Lock price:</p>
                      <p className="font-bold">Prize pool:</p>
                    </div>
                    <div>
                      <p className="text-end">$229.5492</p>
                      <p className="font-bold">5.2427 BNB</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center py-3">
                  <p className="text-slate-300 flex space-x-2">
                    <span className="text-slate-500 font-bold px-1">3.26x</span>
                    Payout
                  </p>
                  <p className="text-pink-500 font-bold text-xl">Down</p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle card */}
          <div className=" relative py-5 flex justify-center">
            <div className="bg-white rounded-3xl w-[20rem] border border-b-[4px] border-purple-500 ">
              <div className="flex justify-between items-center p-3 text-purple-800">
                <div className="flex items-center font-semibold ">
                  <IoPlayCircleOutline size={20} />
                  <p>Live</p>
                </div>
                <p>#218486</p>
              </div>
              <div className="w-full h-2 my-2 bg-gray-200 ">
                <div
                  className="bg-purple-700 h-full "
                  style={{ width: "70%" }}
                ></div>
              </div>
              <div className="relative p-3">
                <div className="flex flex-col justify-center items-center py-3">
                  <p className="text-emerald-500 font-bold text-xl">UP</p>
                  <p className="text-slate-300 flex space-x-2">
                    <span className="text-slate-500 font-bold px-1">2.15x</span>
                    Payout
                  </p>
                </div>
                <div className="border-pink-500 border-4 rounded-lg p-3 ">
                  <div>
                    <p className="font-semibold text-sm text-slate-400">
                      LAST PRICE
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-pink-500 text-lg border-slate-400 border-b-4 leading-[1rem] border-dotted">
                        $228.5332
                      </p>
                      <div className="bg-pink-500 text-white rounded p-1 flex items-center">
                        <BiDownArrowAlt />
                        <p className="pl-2">$-0.4141</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <p>Lock price:</p>
                      <p className="font-bold">Prize pool:</p>
                    </div>
                    <div>
                      <p className="text-end">$228.9473</p>
                      <p className="font-bold">8.5143 BNB</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center py-3">
                  <p className="text-slate-300 flex space-x-2">
                    <span className="text-slate-500 font-bold px-1">1.87x</span>
                    Payout
                  </p>
                  <p className="text-pink-500 font-bold text-xl">Down</p>
                </div>
              </div>
            </div>
          </div>

          {/* second card */}
          <div className=" relative py-5 flex justify-center ">
            <div className="bg-white rounded-3xl w-[20rem] border border-b-[4px] border-gray-200 ">
              <div className="flex justify-between items-center p-3  rounded-t-3xl text-white bg-purple-800">
                <div className="flex items-center font-semibold ">
                  <IoPlayCircleOutline size={20} />
                  <p>Next</p>
                </div>
                <p>#218486</p>
              </div>

              {/*  <div className="hexagon"></div> */}
              <div className="relative p-3">
                <div className="flex flex-col justify-center items-center py-3">
                  <p className="text-emerald-500 font-bold text-xl">UP</p>
                  <p className="text-slate-300 flex space-x-2">
                    <span className="text-slate-500 font-bold px-1">1.35x</span>
                    Payout
                  </p>
                </div>
                <div className="rounded-xl w-full bg-gradient-to-r p-[5px] from-[#7928ca] to-[#ff0080]">

                
                <div className="bg-white   rounded-lg p-3 ">
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <p className="font-bold">Prize pool:</p>
                    </div>
                    <div>
                      <p className="font-bold">2.3670 BNB</p>
                    </div>
                  </div>
                  <div className="text-white">
                    <div className="bg-emerald-400  border-b-[3px] border-emerald-700 flex justify-center rounded-lg my-1 py-2">
                      Enter Up
                    </div>
                    <div className="bg-pink-400 shadow-md  border-b-[3px] border-pink-500 flex justify-center rounded-lg my-1 py-2 ">
                      Enter Down
                    </div>
                  </div>
                </div>
                </div>
                <div className="flex flex-col justify-center items-center py-3">
                  <p className="text-slate-300 flex space-x-2">
                    <span className="text-slate-500 font-bold px-1">3.84x</span>
                    Payout
                  </p>
                  <p className="text-pink-500 font-bold text-xl">Down</p>
                </div>
              </div>
            </div>
          </div>

          {/* third card */}
          <div className=" relative py-5 flex justify-center">
            <div className="bg-white rounded-3xl w-[20rem] border border-b-[4px] border-gray-200">
              <div className="flex justify-between items-center p-3  rounded-t-3xl text-white bg-gray-300">
                <div className="flex items-center font-semibold ">
                  <MdOutlineWatchLater size={20} />
                  <p className="pl-2">Later</p>
                </div>
                <p>#218486</p>
              </div>

              <div className="relative p-3">
                <div className="flex flex-col justify-center items-center py-3">
                  <p className="text-slate-500 font-bold text-xl">UP</p>
                </div>
                <div className="border-gray-400 border-4 rounded-lg p-3 ">
                  <div className="text-purple-900 font-semibold">
                    <div className=" flex justify-center ">Enter starts</div>
                    <div className=" flex justify-center  ">~00:38</div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center py-3">
                  <p className="text-slate-500 font-bold text-xl">Down</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
