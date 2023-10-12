import Image from 'next/image'
import { PiHeartDuotone } from 'react-icons/pi'
import { GoPerson } from 'react-icons/go'
import { AiOutlineWifi } from 'react-icons/ai'
import { LiaBedSolid, LiaBathSolid, LiaDoorOpenSolid } from 'react-icons/lia'
import { LuCigaretteOff } from 'react-icons/lu'
import Orders from './orders'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="px-[60px] py-8 border border-gray-200 rounded-2xl">
        <div className="flex flex-col space-y-8">
          {/* Header */}
          <div className="space-y-8">
            <h1 className="text-gray-900 text-[32px] font-medium leading-8 tracking-wide text-left">
              Order history
            </h1>
            <div className="border-b border-gray-100" />
          </div>

          {/* Main Div */}
          <div className="grid grid-cols-3 border border-gray-200 rounded-2xl">
            <div className="relative w-full">
              <Image
                src="/images/main-image.png"
                width={300}
                height={300}
                className="rounded-tl-xl rounded-bl-xl object-cover"
                alt=""
              />

              <div className="absolute flex justify-between inset-0 m-3">
                <div className="bg-red-700 rounded-full py-1 px-3 w-[106px] h-[24px]">
                  <p className="text-red-50 text-xs">-10% discount</p>
                </div>
                <div>
                  <PiHeartDuotone className="text-gray-200 w-[30px] h-[28.6px]" />
                </div>
              </div>
            </div>

            <div className="grid grid-rows-3 col-span-2 px-7 pt-4">
              <div className="flex flex-col justify-center space-y-4">
                <div>
                  <p className="text-gray-500 text-sm leading-5 font-normal tracking-wide font-poppins">
                    Hotel room in Tokyo, Japan
                  </p>
                  <h1 className="text-gray-800 text-[24px] font-medium leading-7 tracking-wide text-left ">
                    The Lounge & Bar
                  </h1>
                </div>
                <div className="border-b border-gray-100 w-[56px]" />
              </div>

              <div className="flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex flex-row space-x-12 text-gray-500 font-poppins text-xs font-light leading-3 tracking-tight text-left">
                    <div className="flex flex-col space-y-4">
                      <div className="flex flex-row space-x-3 items-center">
                        <GoPerson className="w-5 h-5" />
                        <p>6 guest</p>
                      </div>
                      <div className="flex flex-row space-x-3 items-center">
                        <LiaBedSolid className="w-5 h-5" />
                        <p>3 beds</p>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                      <div className="flex flex-row space-x-3 items-center">
                        <LiaBathSolid className="w-5 h-5" />
                        <p>3 baths</p>
                      </div>
                      <div className="flex flex-row space-x-3 items-center">
                        <LuCigaretteOff className="w-5 h-5" />
                        <p>No smoking</p>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                      <div className="flex flex-row space-x-3 items-center">
                        <LiaDoorOpenSolid className="w-5 h-5" />
                        <p>3 bedrooms</p>
                      </div>
                      <div className="flex flex-row space-x-3 items-center">
                        <AiOutlineWifi className="w-5 h-5" />
                        <p>Wi-Fi</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-b border-gray-100 w-[56px]" />
                </div>
              </div>

              <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center space-x-1">
                  <img src="/images/rating-icon.svg" alt="" />
                  <p className="font-vietnam text-sm font-medium             leading-5 tracking-tight text-left text-gray-800">
                    4.9
                  </p>
                  <p className="font-poppins text-sm font-normal leading-5 tracking-tight text-left text-gray-500">
                    {'(122)'}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-textCyan text-lg font-bold leading-6 tracking-tight text-left">
                    2 320 €
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Orders */}
          <div className="border border-gray-200 rounded-md">
            <div className="grid grid-cols-2 bg-gray-50 justify-between py-2 px-4 text-gray-500 text-xs leading-4 tracking-wider text-left uppercase font-medium">
              <div>
                <p>Order Details</p>
              </div>
              <div className='grid grid-cols-2 pl-20 mr-6'>
                <p>Date</p>
                <p>Status</p>
              </div>
            </div>

            <div>
                <Orders />
            </div>
          </div>

          {/* Bottom Div */}
          <div className="flex items-center justify-center pb-8">
            <button className="border border-gray-200 rounded-full py-[13px] px-[25px]">
              <p className="font-poppins text-sm leading-6 font-medium text-left text-gray-700">
                View more orders
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
