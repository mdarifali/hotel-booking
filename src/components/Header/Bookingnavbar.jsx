import { BiBed } from "react-icons/bi";
import { IoAirplaneOutline } from "react-icons/io5";
import { RiCarLine } from "react-icons/ri";
import { MdOutlineAttractions } from "react-icons/md";
import { LiaTaxiSolid } from "react-icons/lia";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdMan2 } from "react-icons/md";
import { FiMinus, FiPlus } from "react-icons/fi";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { useState } from "react";
import { format } from "date-fns";



const Bookingnavbar = () => {

    const [openDate, setOpenDate] = useState(false);

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [options, setOptions] = useState({

        audlts: 1,
        children: 0,
        room: 1,
    });

    const handleOptions = (name, opration) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: opration === "i" ? options[name] + 1 : options[name] - 1,
            };

        });
    };

    return (
        <div className=" bg-black">
            <div className="w-full navbar px-4 lg:px-0">
                <ul className="menu menu-horizontal container mx-auto xl:px-60">
                    <li>
                        <a href=""><BiBed size={25} className="text-white" />Stays</a>
                    </li>
                    <li>
                        <a href=""><IoAirplaneOutline size={25} className="text-white" />Flisghts</a>
                    </li>
                    <li>
                        <a href=""><RiCarLine size={25} className="text-white" />Car Rentals</a>
                    </li>
                    <li>
                        <a href=""><MdOutlineAttractions size={25} className="text-white" />Attractions</a>
                    </li>
                    <li>
                        <a href=""><LiaTaxiSolid size={25} className="text-white" />Airport Taxis</a>
                    </li>
                </ul>
            </div>
            <div className="container mx-auto xl:px-60 text-white relative p-10 xl:p-20">
                <div>
                    <h1 className="text-6xl font-bold">Find your next stay</h1>
                    <p className="text-2xl font-semibold mt-5">Search deals on hotels, homes, and much more...</p>
                </div>

                <div className="lg:absolute -bottom-8 bg-yellow-500 rounded-lg lg:p-0 p-2 mt-5">
                    <div className="lg:h-16 lg:grid grid-cols-4 gap-4 justify-center items-center">
                        <div className="bg-white p-3 rounded-lg mb-2 lg:mb-0 lg:mx-2">
                            <div className="flex gap-2">
                                <BiBed size={25} className="text-gray-600" />
                                <input type="text" placeholder="Where are you going?" className="bg-transparent w-full outline-none text-black" />
                            </div>
                        </div>
                        <div className="bg-white relative p-3 mb-2 lg:mb-0 rounded-lg">
                            <div className="flex gap-2">
                                <FaRegCalendarAlt size={20} className="text-gray-600" />
                                <span className="text-gray-400" onClick={() => setOpenDate(!openDate)}>
                                    {`${format(date[0].startDate, "MM/dd/yyyy")} _
                                    ${format(date[0].endDate, "MM/dd/yyyy")}`}
                                </span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className="absolute top-14 z-50"
                                />}
                            </div>
                        </div>
                        <div className="bg-white p-3 mb-2 lg:mb-0 rounded-lg">
                            <div className="flex gap-2">
                                <MdMan2 size={25} className="text-gray-600" />
                                <div className="dropdown">
                                    <span className="text-gray-400" tabIndex={0} role="button">{`${options.audlts} audlts . ${options.children} children . ${options.room} room `}</span>
                                    <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-80 p-2 shadow text-base-100 top-9">
                                        <div className="bg-white p-4">
                                            <div className="flex justify-between items-center mb-4">
                                                <span>Adults</span>
                                                <div className="flex justify-between items-center gap-4 border border-gray-600 rounded p-2">
                                                    <button
                                                        className="btn btn-sm btn-circle bg-black"
                                                        disabled={options.audlts <= 0}
                                                        onClick={() => handleOptions("audlts", "d")} ><FiMinus />
                                                    </button>
                                                    <span className="text-gray-600">{options.audlts}</span>
                                                    <button
                                                        className="btn btn-sm btn-circle bg-black"
                                                        onClick={() => handleOptions("audlts", "i")} ><FiPlus />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center mb-4">
                                                <span>Children</span>
                                                <div className="flex justify-between items-center gap-4 border border-gray-600 rounded p-2">
                                                    <button
                                                        className="btn btn-sm btn-circle bg-black"
                                                        disabled={options.children <= 0}
                                                        onClick={() => handleOptions("children", "d")} ><FiMinus />
                                                    </button>
                                                    <span className="text-gray-600">{options.children}</span>
                                                    <button
                                                        className="btn btn-sm btn-circle bg-black"
                                                        onClick={() => handleOptions("children", "i")} ><FiPlus />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span>Rooms</span>
                                                <div className="flex justify-between items-center gap-4 border border-gray-600 rounded p-2">
                                                    <button
                                                        className="btn btn-sm btn-circle bg-black"
                                                        disabled={options.room <= 0}
                                                        onClick={() => handleOptions("room", "d")} ><FiMinus/>
                                                    </button>
                                                    <span className="text-gray-600">{options.room}</span>
                                                    <button className="btn btn-sm btn-circle bg-black" onClick={() => handleOptions("room", "i")} ><FiPlus /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:mx-2 text-center">
                            <button type="button" className="btn btn-block text-black bg-white border-0 hover:bg-black hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                <span className="font-normal">SEARCH</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bookingnavbar;