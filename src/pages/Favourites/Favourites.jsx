import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import FavouriteItem from '../../components/FavouriteItem'
import NoFavourite from '../../components/NoFavourite'

function Favourites() {
  const {favouritesList}=useContext(GlobalContext)
  return (
    <div  className='w-screen min-h-[80vh] flex justify-center items-center py-2 flex-wrap gap-6'>
    {
        favouritesList && favouritesList.length>0?
        favouritesList.map((item,i)=>{
          return <FavouriteItem key={i} item={item}></FavouriteItem>
        })
        :<NoFavourite></NoFavourite>
      }
    </div>
  )
}

export default Favourites