import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context";
import { TiThMenuOutline } from "react-icons/ti";
import { useRef } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import useOutsideClick from "../custom-hooks/useOutsideClick";
import { MdCancel } from "react-icons/md";
function Nav() {
  const [showMenu,setShowMenu]=useState(false)
  const menuRef=useRef(null)
useOutsideClick(menuRef,()=>setShowMenu(false))
    const {search,setSearch,handleSubmit}=useContext(GlobalContext)
    function handleShowMenu(){
      const target=menuRef.current
      target.classList.toggle("show")
    }
  return (
    <div className="w-screen h-24 flex justify-between items-center px-4 md:px-8" >
      <NavLink  to={"/"} className=" hidden font-bold text-2xl cursor-pointer sm:block w-[150px] h-[85px] "><img className="w-full h-full object-contain" src="https://th.bing.com/th/id/R.af81e2e74a04e07ec186cc2a8f7a5b9d?rik=BxVcjgYTmwnjsg&pid=ImgRaw&r=0"></img></NavLink>
      <form className=" flex relative justify-center md:justify-start gap-0 md:gap-2" onSubmit={handleSubmit}>
      <input className="w-52 md:w-96 h-10 rounded px-4 font-semibold border border-black shadow-md opacity-100 shadow-[#cfcfcf]" type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search here..."></input>
      <button className="px-3 hidden md:block py-1 text-sm md:px-4 md:py-2 bg-black border-none outline-none cursor-pointer rounded text-white" type="submit">Search</button>
      <button type="submit"><FaMagnifyingGlass className="px-3 md:hidden   cursor-pointer bg-black text-[2.5rem] rounded text-white"></FaMagnifyingGlass></button>
      </form>

{showMenu?<div className="menu-list md:hidden  w-[15rem] rounded-lg h-[20rem] fixed top-[10%] right-0 bg-[#90d1e5] text-black justify-center items-center flex-col gap-4 py-4" ref={menuRef}>
    <MdCancel className="absolute top-4 right-4 text-2xl" onClick={()=>setShowMenu(false)}></MdCancel>
      <li className="font-semibold list-none"><NavLink to={"/"}>Home</NavLink></li>
        <li className="font-semibold list-none"><NavLink to={"/favourite"}>Favourites</NavLink></li>
      </div>:null}
 <TiThMenuOutline className="block ms-4 md:hidden" onClick={()=>{
      setShowMenu(true)
    }} ></TiThMenuOutline>
      <ul className=" hidden md:flex md:ms-4 justify-center items-center gap-4 ">
        <li className="tab_home font-semibold"><NavLink to={"/"}>Home</NavLink></li>
        <li className="tab_fav font-semibold"><NavLink to={"/favourite"}>Favourites</NavLink></li>
      </ul>
    </div>
  );
}

export default Nav;
