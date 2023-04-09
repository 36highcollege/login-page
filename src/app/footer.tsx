import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiMessengerLine } from "react-icons/ri";


export default function Footer() {
    return (
        <>
            <footer className=" bg-gray-900  ">
                <div className=" h-10 bg-gray-900"></div>
                <div className="container mx-auto py-2">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="mb-4 w-full px-4 md:w-1/2 lg:w-1/3">
                            <h2 className="mb-4 text-2xl font-bold text-white">Company Name</h2>
                            <p className="mb-4 text-gray-400">Anas developers and Coding Accadmy</p>
                            <div className="flex items-center">
                                <a href="#" className="mr-4 text-gray-400 hover:text-white"><i className=""></i></a>
                                <a href="#" className="mr-4 text-gray-400 hover:text-white"><i className=""></i></a>
                                <a href="#" className="mr-4 text-gray-400 hover:text-white"><i className=""></i></a>
                                <a href="#" className="text-gray-400 hover:text-white"><i className=""></i></a>
                            </div>
                        </div>
                        <div className="mb-4 w-full px-4 md:w-1/4 lg:w-1/6">
                            <h3 className="mb-4 text-lg font-bold text-white">Cources</h3>
                            <ul className="text-gray-400">
                                <li><a href="#" className="hover:text-white">Metaverse </a></li>
                                <li><a href="#" className="hover:text-white">Web 3.0</a></li>
                                <li><a href="#" className="hover:text-white">Blockchain </a></li>
                                <li><a href="#" className="hover:text-white">Cloudnative</a></li>
                            </ul>
                        </div>
                        <div className="mb-4 w-full px-4 md:w-1/4 lg:w-1/6">
                            <h3 className="mb-4 text-lg font-bold text-white">Support</h3>
                            <ul className="text-gray-400">
                                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                                <li><a href="#" className="hover:text-white">FAQ</a></li>
                                <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
                                <li><a href="#" className="hover:text-white">Track Order</a></li>
                            </ul>
                        </div>
                        <div className=" flex space-x-3 justify-evenly m-2">
                            <a href="https://www.facebook.com/profile.php?id=100086995852777" target={"_blank"}>
                                <FaFacebook fill="#e696e8" size={25} />
                            </a>
                            <a href="https://mail.google.com/mail/u/0" target={"_blank"}>
                                <IoMdNotificationsOutline fill="red" size={25} />
                            </a>
                            <a href="https://www.youtube.com/" target={"_blank"}>
                                <FiYoutube fill="red" size={25} />
                            </a>
                            <a href="https://github.com/36highcollege/Anas" target={"_blank"} >
                                <BsGithub fill="blue" size={25} />
                                {/* https://github.com/basitgggg */}
                            </a>
                            <a href="https://www.instagram.com/" target={"_blank"}>
                                <GrInstagram fill="pink" size={25} />
                            </a>
                            <a href="https://www.linkedin.com/" target={"_blank"}>
                                <AiFillLinkedin fill="purple" size={25} />
                            </a>
                            <a href="https://www.messenger.com/" target={"_blank"}>
                                <RiMessengerLine fill="#00fffa" size={25} />
                            </a>
                        </div>
                        <div className="mb-4 w-full px-4 ">
                            <h3 className="mb-4 text-lg font-bold text-white">Newsletter</h3>
                            <p className="mb-4 text-gray-400">Subscribe to our newsletter to receive updates on our latest products and promotions.</p>
                            <form className="flex ">
                                <div className="w-64 px-2 ">
                                    <input type="email" name="email" required className="  w-56  rounded-xl bg-red-200 border-4  px-4 py-2 text-gray-400 " placeholder="Enter your email address" />
                                    <div className="   items-center ">
                                    </div>
                                </div>
                                <div className="mt-4 w-full px-2 md:mt-0 md:w-1/4 lg:w-1/6">
                                    <button type="submit" className=" rounded-full bg-gray-800 py-2 px-4 text-white">Subscribe</button>
                                </div>
                            </form>
                        </div>
                        <div className="bg-slate-500 bg-opacity-80 rounded-lg  text-center w-full p-2  ml-8 ">
                            <p><a href="@page">&copy; </a> 2023  Anas developers . All rights reserved.</p>
                        </div>
                    </div>

                </div>
            </footer>


            {/* <p>copy youtube</p> */}

            <nav className="bg-gray-900 py-4">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center">
                        <a href="#" className="text-white font-bold text-xl">YouTube</a>
                        <input type="text" placeholder="Search" className="ml-4 py-1 px-2 rounded-md"></input>
                    </div>
                    <div className="flex items-center">
                        <a href="#" className="text-white mr-4">Upload</a>
                        <button className="bg-red-600 text-white py-1 px-4 rounded-md">Sign In</button>
                    </div>
                </div>
            </nav>


            <div className="container mx-auto mt-4">
                <div className="flex">
                    <div className="w-1/4 pr-4">
                        <h2 className="text-lg font-bold mb-2">Recommended Videos</h2>
                        <ul>
                            <li className="py-2">
                                <div className="flex items-center">
                                    <img src="https://source.unsplash.com/random/50x50" alt="" className="rounded-full mr-2"></img>
                                    <div>
                                        <h3 className="text-sm font-bold">Video Title</h3>
                                        <p className="text-gray-600">Channel Name</p>
                                    </div>
                                </div>
                            </li>
                            <li className="py-2">
                                <div className="flex items-center">
                                    <img src="https://source.unsplash.com/random/50x50" alt="fg" className="rounded-full mr-2"></img>
                                    <div>
                                        <h3 className="text-sm font-bold">Video Title</h3>
                                        <p className="text-gray-600">Channel Name</p>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div className="w-3/4">
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe width="834" height="480" src="https://www.youtube.com/embed/W2OGmBfA93k" title="My Channel" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <h1 className="text-2xl font-bold mt-4">Video Title</h1>
                        <div className="flex items-center text-gray-600 mt-2">
                            <p>1,234,567 views • 1 year ago</p>
                            <div className="mx-2 h-2 w-2 rounded-full bg-gray-600"></div>
                            <p>Channel Name</p>
                        </div>
                        <p className="text-gray-800 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>



        </>




    )
}