import React, { useContext } from 'react'
import { GlobalContext } from '../context'
import Loading from './Loading'

function Details({details,loading,error}) {
    if(loading)return <Loading></Loading>
    if(error) return  <div className='w-screen h-[80vh] flex justify-center items-center font-semibold text-2xl'>{error}</div>
  return (
    <div className='w-screen min-h-[84vh] flex justify-center items-center md:items-start py-8 gap-4 px-4 bg-gray-400 flex-col md:flex-row'>
    <img className='rounded-lg w-40%' src={details.image_url}></img>
    <div className='w-full md:w-[60%] min-h-[100%] flex justify-start items-start py-8 px-8 flex-col bg-white rounded-lg gap-1'>
    <h3 className='text-blue-400'>{details.publisher}</h3>
    <h2 className="text-2xl font-bold capitalize">{details.title}</h2>
    <h3>Cooking time : {details.cooking_time}</h3>
    <h3 className='text-xl font-semibold'>Ingredients:</h3>
    {details.ingredients && details.ingredients.length>0?details.ingredients.map((item,i)=>{
        return <li className='list-none' key={i}>{`${i+1})`} {item.description}</li>
    }):<div>No Ingredients to Show</div>}
    </div>
    </div>
  )
}

export default Details