import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

// react icons
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";

const ResponsiveNavbar = () => {
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        if (savedToken) {
            setToken(savedToken);
        }
    }, []);

    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    return (
        <div>
            <div className="py-2"></div>
            <div className="flex justify-center">
                <nav
                    className="flex items-center justify-between w-1/2 relative bg-[#F8C8D9] bg-opacity-70 boxShadow rounded-full px-[10px] py-[8px]"
                >
                    <Avatar className="w-[50px]">
                        <AvatarImage src={logo} alt="asd" />
                        <AvatarFallback>alt</AvatarFallback>
                    </Avatar>
                    <ul className="items-center gap-[20px] text-[1rem] text-[#3C2A47] lg:flex hidden">
                        <Link to="/">
                            <li className="before:w-0 hover:before:w-full before:bg-[#F3A7C0] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#F3A7C0] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                                home
                            </li>
                        </Link>
                        <Link to="/about">
                            <li className="before:w-0 hover:before:w-full before:bg-[#F3A7C0] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#F3A7C0] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                                about
                            </li>
                        </Link>
                        <Link to="/faq">
                            <li className="before:w-0 hover:before:w-full before:bg-[#F3A7C0] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#F3A7C0] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                                FAQ
                            </li>
                        </Link>
                    </ul>

                    <div className="items-center gap-[10px] flex">
                        {!token ? (
                            <>
                                <Link
                                    to="/signin"
                                    className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize hover:text-[#F3A7C0] transition-all duration-300 sm:flex hidden"
                                >
                                    Sign in
                                </Link>
                                <Link
                                    to="/signup"
                                    className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-[#F3A7C0] text-white hover:bg-[#F28E98] transition-all duration-300 sm:flex hidden"
                                >
                                    Sign up
                                </Link>
                            </>
                        ) : (
                            <button
                                onClick={() => {
                                    localStorage.removeItem("token");
                                    setToken(null);
                                    navigate("/");
                                }}
                                className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-red-400 text-white hover:bg-red-500 transition-all duration-300"
                            >
                                Sign out
                            </button>
                        )}

                        <CiMenuFries
                            className="text-[1.8rem] mr-1 text-[#3C2A47] cursor-pointer lg:hidden flex"
                            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                        />
                    </div>

                    <aside
                        className={`${
                            mobileSidebarOpen
                                ? "translate-x-0 opacity-100 z-20"
                                : "translate-x-[200px] opacity-0 z-[-1]"
                        } lg:hidden bg-white bg-opacity-80 boxShadow p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300`}
                    >
                        <div className="relative mb-5">
                            <input
                                className="py-1.5 pr-4 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-[#F3A7C0]"
                                placeholder="Search..."
                            />
                            <IoIosSearch className="absolute top-[8px] left-3 text-gray-500 text-[1.3rem]" />
                        </div>
                        <ul className="items-center gap-[20px] text-[1rem] text-[#3C2A47] flex flex-col">
                            <li className="hover:border-b-[#F3A7C0] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">
                                home
                            </li>
                            <li className="hover:border-b-[#F3A7C0] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">
                                Features
                            </li>
                            <li className="hover:border-b-[#F3A7C0] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">
                                Blogs
                            </li>
                            <li className="hover:border-b-[#F3A7C0] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">
                                Shop
                            </li>
                        </ul>
                    </aside>
                </nav>
            </div>
        </div>
    );
};

export default ResponsiveNavbar;