// import './App.css';
import { useState } from "react";
import { HiChevronLeft,HiChevronDown } from "react-icons/hi";
import { AiFillProject,AiOutlineFundProjectionScreen,AiOutlineSetting } from "react-icons/ai";
import { BsSearch,BsCalendarEvent,BsBarChartLine } from "react-icons/bs"
import {LuLayoutDashboard,LuListTodo} from "react-icons/lu"
import { MdOutlineAccountCircle } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";



function App() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setsubmenuOpen] = useState(false);
  const Menus = [
    {title: "Dashboard"},
    {title: "Calender", icon: <BsCalendarEvent />},
    {title:"To-Do List",icon:<LuListTodo/> },
    {title: "Account", icon:<MdOutlineAccountCircle />, spacing: true},
    {
      title: "Projects",
      icon: <AiOutlineFundProjectionScreen />,
      submenu: true,
      submenuItem: [
        {title: "Submenu 1"},
        {title: "Submenu 2"},
      ],
    },
    {title: "Reports", icon: <BsBarChartLine />},
    {title: "Settings", icon: <AiOutlineSetting />, spacing: true},
    {title: "Logout", icon: <BiLogOut />}
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-blue h-screen p-5  pt-8 relative duration-300`}
      >
        <HiChevronLeft
          className={`bg-white text-dark-blue w-7 h-7 rounded-full absolute -right-3 top-9 border border-dark-blue cursor-pointer
          ${!open && "rotate-180"}`} // affect when closing or open the sidemenu
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <AiFillProject className=" text-4xl rounded cursor-pointer block float-left mr-2" />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-300 
            ${!open && "scale-0"}`}
          >
            TickTick
          </h1>
        </div>
        
        <div className={`flex items-center rounded-md bg-slate-300 mt-6 ${!open ? "px-2.5": "px-4"} py-2`}>
          <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`} />
          <input type={"search"} placeholder="Search" 
          className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`}/>
        </div>

        <ul className="pt-2">
          {Menus.map((menu, index) =>
            <>
              <li key={index} className={`text-gray-300 tex-sm flex item-center gap-x-4 cursor-pointer p-2 hover:bg-light-blue rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`} >
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <LuLayoutDashboard /> }
                </span>
                <span className={`text-base font-medium flex-1 duration-300 ${!open && "hidden"}`}>
                  {menu.title}
                </span>
                {menu.submenu && open && (
                  <HiChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={() => 
                  setsubmenuOpen(!submenuOpen)}/>
                )}
              </li>

              {menu.submenu && submenuOpen && open &&(
                <ul>
                  {menu.submenuItem.map((submenuItem, index)=> (
                    <li key={index} className={`text-gray-300 tex-sm flex item-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-blue rounded-md`}>
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </ul>

      </div>

      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </div>
    </div>
  );
}

export default App;
