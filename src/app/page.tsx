"use client"

import { IoMdNotificationsOutline } from "react-icons/io"
import { useTheme } from 'next-themes'
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io"
import { useState } from "react";
import Nbar from './navbar';
import Mbnav from '@/MBnavbar';
import Button from './buttons';



export default function Home() {
  const [value, setvalue] = useState(false)
  const { theme, setTheme } = useTheme();
  console.log(setTheme)
  return (
    <>
      <nav className="flex justify-around items-center z-50 bg-gray-500 opacity-70 fixed top-0 left-0 right-0">

        <img src="/logo.svg" alt="Anas" width={110} height={105} className="select-none" />
        <div >
          <Nbar />
        </div>
        <div className="flex space-x-4">
          <a href="https://mail.google.com/mail/u/0" target={"_blank"}>
            <IoMdNotificationsOutline size={25} />
          </a>
          <div> | </div>

          <div>
            {theme === "light" ? (<MdDarkMode size={24} onClick={() => { setTheme("dark") }} />) : (<MdOutlineLightMode size={24} fill="Yellow" onClick={() => { setTheme("light") }} />)}
          </div>
        </div>

        <div className='flex sm:hidden '>
          {
            value ? (< IoMdClose onClick={() => { setvalue(!value) }} />)
              : (<GiHamburgerMenu onClick={() => { setvalue(!value) }} />)
          }
        </div>

        <Button item="Apply Now" />
      </nav>

      <div className={`${value ? "flex" : "hidden"}  `}>
        <Mbnav />
      </div>

      <div className="  absolute">
        <img src="/fpg.svg" alt="front " className="-z-50 inset-0 " />
      </div>

      <br />
      <br />

      <main className="flex w-full h-full p-4  relative text-white  items-center justify-between">

        <div className="w-[27rem] h-1/2 p-6  ">

          <p className="text-3xl font-extrabold p-4">Become <br />

            <span className="text-green-500 ">
              Certified Web 3.0
            </span> and <br />

            <span className="text-green-500 ">
              Metaverse Developer
            </span>

          </p>

          <p>
            Launch Your Dev Career With Web 3 and Metaverse Getting Ready for the Next Generation of the Internet</p>

          <div className="text-black mt-4">
            <Button item="Join Now" />
          </div>

        </div>

        <div className="w-1/2 h-1/2 ">
          <img src="/banner.svg" alt="baner" />
        </div>

      </main>

      <section className="relative p-8 w-full  flex items-center justify-center ">
        <div className="flex w-full h-full p-1 ">
          <div className=" w-[26rem] ">
            <img src="img.svg" alt="anas" />
          </div>
          <div className="relative flex  bottom-10">
            <div className="shadow-lg p-4 shadow-gray-500 w-[29rem] h-64 flex flex-col z-30 justify-center items-center ">
              <div className=" flex-col items-center flex">
                <p className="font-bold text-4xl text-green-500"> The Pogram in a Nutshell </p>
                <p className="mt-4 font-bold text-3xl text-green-400 underline">Earn While You Learn</p>
                <p className="mt-4 text-justify">Lopsum dolor sit amet consectetur adipisicing elit. Nulla omnis sapiente autem cupiditate. Saepe amet consequuntur tempora consequatur, fugiat hic fuga architecto blanditiis libero velit dolor odit praesentium.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="flex text-black items-start justify-around  h-full w-full mt-24 p-10 bg-gray-200">
        <div className=" flex flex-col   w-1/2">
          <h1 className="text-5xl text-center  font-extrabold text-teal-500 leading-8">
            Why to join
          </h1>
          <div className="text-left list-disc flex justify-center items-center  text-xl   font-semibold tracking-widest leading-7   flex-col  w-full h-full  mt-4 ">
            <li className="mt-2 ">
              Own product (Full-Stack App Templates AR and VR Experience, andAPIs).
            </li>
            <li className="mt-2 ">
              Offer a service at a rate of 50$ per hour ($96,000 per year).
            </li>
            <li className="mt-2 ">
              Fantastic opportunity  to better their financial situation.
            </li>
            <li className="mt-2 ">
              Boost economy by expanding software export.
            </li>
          </div>
          <div className="mt-7">
            <Button item="Join Now" />
          </div>
        </div>
        <div className=" w-1/2   ">
          <div className=" text-2xl font-bold">
            <div className="grid grid-cols-2">
              <div className="relative bottom-4 border-4 flex flex-col items-center  justify-center w-52  h-40 shadow-lg shadow-gray-400 rounded-xl m-4 bg-gray-100 text-center p-4 ">
                <p> Product Owner</p>
                <img src="icon.svg" alt="pro" />
              </div>

              <div className="relative top-4 border-4 flex flex-col items-center justify-center w-52  h-40 shadow-lg shadow-gray-400 rounded-xl m-4 bg-gray-100 text-center p-4 ">
                <p>  Freelance </p>
                <img src="icon (1).svg" alt="conse" />

              </div>
            </div>
            <div className="grid grid-cols-2 ">

              <div className="relative bottom-7 border-4 flex flex-col items-center justify-center w-52  h-40  shadow-lg shadow-gray-400 rounded-xl m-4 bg-gray-100 text-center p-4">
                <p> Access to Global Market</p>
                <img src="icon (3).svg" alt="pic" />

              </div>

              <div className="relative top-2 border-4 flex flex-col items-center justify-center w-52  h-40 shadow-lg shadow-gray-400 rounded-xl m-4 bg-gray-100 text-center p-4">
                <p> Booost Economy </p>
                <img src="icon (2).svg" alt="mol" />

              </div>
            </div>
          </div>
        </div>
      </main>

      <main className="mt-8 w-full h-full">
        <div className="text-5xl font-extrabold text-center text-teal-500">
          <p>Our Partners</p>
        </div>
        <div className="flex justify-evenly items-center m-2 mt-6
         shadow-md shadow-teal-400">
          <img src="partner (5).svg" alt="part" />
          <img src="partner (4).svg" alt="part" />
          <img src="partner (2).svg" alt="part" />
          <img src="partner (3).svg" alt="part" />
          <img src="partner (6).svg" alt="part" />
          <img src="partner (7).svg" alt="part" />
          <img src="partner (1).svg" alt="part" />
        </div>
      </main>

      <main className="mt-24">
        <div className="border-4 border-red-400 ">
          <h2 className=" text-teal-500 text-center">Student Feedback</h2>
          <div className=" border-4 border-amber-300">rem ipsum dolor sit amet consectetur adipisicing elit. Architecto inve
            <p className="my-16 border-4 h-52 w-[30rem]   ">Lontore maiores nemo molestiae odio, adipisci recusandae. Eaque distinctio laborum, laboriosam, exercitationem atque porro nesciunt praesentium, in dolorum ipsum tempore temporibus. Distinctio molestias repudiandae dolores, dolorem corrupti voluptas error quibusdam, sed modi vel esse perferendis culpa.</p>
          </div>
        </div>
        <div></div>
      </main>
    </>
  )
}