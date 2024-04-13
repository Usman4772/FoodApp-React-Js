import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context'
import { BiAddToQueue } from "react-icons/bi";
function Recipe({item,id}) {
  // const [isAdded,setIsAdded]=useState(false)
const {isAdded,setIsAdded}=useContext(GlobalContext)
const {addToFavourite}=useContext(GlobalContext)


useEffect(()=>{
  function hideIsAdded(){
    if(isAdded){
      setTimeout(()=>{
        setIsAdded(false)
      },1000)
    }
  }
  hideIsAdded()
})

  return (
    <Link className='item w-[350px] h-[360px] sm:w-[300px]  rounded-lg sm:h-[260px] bg-white flex flex-col items-start justify-start gap-4 overflow-hidden' style={{boxShadow:"0 0 2px 1px black"}} to={`/details/${id}`}>

    <div className={isAdded?"added-toast w-[20rem] absolute top-[20%] right-4 bg-gray-200 rounded py-4 px-4 flex justify-start items-center font-semibold text-xl":"hidden"}>Added successfully</div>
   <img src={item.image_url} className='w-full h-2/4 object-cover'></img>
    <h3 className='text-black px-4'>{item.publisher}</h3>
    <h2 className=' w-3/4 px-4 truncate h-[30px] font-semibold text-xl flex justify-start items-center text-black text-ellipsis overflow-hidden whitespace-nowrap ' >
    {item.title}
  </h2>
  <div className='w-full h-[15%] flex justify-between px-4 items-center py-2' >
  <button className='py-[6px] px-4 flex justify-center items-center text-sm text-white bg-black rounded cursor-pointer'><Link to={`/details/${id}`}>View Recipe</Link></button>
  <button className='text-xl' onClick={()=>{
    addToFavourite(item) 
  }}><BiAddToQueue></BiAddToQueue></button>
  </div>
    </Link>
  )
}

export default Recipe