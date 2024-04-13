import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context'
import { MdDelete } from "react-icons/md";

function FavouriteItem({item}) {
const {removeFromFavourites}=useContext(GlobalContext)
  return (
    <div  className='item w-[350px] h-[360px] sm:w-[300px]  rounded-lg sm:h-[260px] bg-white flex flex-col items-start justify-start gap-4 overflow-hidden' style={{boxShadow:"0 0 2px 1px black"}}>
    <img src={item.image_url} className='w-full h-2/4 object-cover'></img>
     <h3 className='text-black px-4'>{item.publisher}</h3>
     <h2 className=' w-3/4 px-4 truncate h-[30px] font-semibold text-xl flex justify-start items-center text-black text-ellipsis overflow-hidden whitespace-nowrap ' >
     {item.title}
   </h2>
   <div className='w-full h-[25%] flex justify-between items-center px-4' >
   <button className='w-[100px] h-[30px] flex justify-center items-center text-sm text-white bg-black rounded cursor-pointer'><Link to={`/details/${item.id}`}>View Recipe</Link></button>
   <button className='text-xl' onClick={()=>removeFromFavourites(item.id)}><MdDelete></MdDelete></button>
   </div>
 
     </div>
  )
}

export default FavouriteItem