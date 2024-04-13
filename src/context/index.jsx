import { createContext, useReducer, useState } from "react";

export const GlobalContext=createContext(null)

export default function GlobalContextWrapper({children}){
   const [search,setSearch]=useState("") 
   const [result,setResult]=useState([])
   const [loading,setLoading]=useState(false)
   const [error,setError]=useState("")
  const [recipeListData,setRecipeListData]=useState(null)
  const [favouritesList,setFavouritesList]=useState([])
  const [isAdded,setIsAdded]=useState(false)

   function addToFavourite(currentItem){
    let isPresent=false
 if(favouritesList.length>0){
  favouritesList.map(items=>{
    if(items.id===currentItem.id){
 isPresent=true
    }
  })
 }
 if(isPresent){
  setFavouritesList(prev=>{return[...prev]})
  alert("Already Present")
  setIsAdded(false)
 }else{
  setFavouritesList(prev=>{
    return [
      ...prev,
      currentItem
    ]
  })
  setIsAdded(true)
 }
  }

  function removeFromFavourites(id){
setFavouritesList(prev=>prev.filter(item=>item.id!==id))
  }
  async function handleSubmit(e){
    e.preventDefault();
    try{
        setLoading(true)
const res=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`)
const data=await res.json()
setResult(data.data.recipes)
setLoading(false)

    }catch(e){
        setLoading(false)
        setError("Error Fetching Data")
    }
   }


 return <GlobalContext.Provider value={{search , setSearch,handleSubmit,loading,result,recipeListData ,setRecipeListData,addToFavourite,favouritesList,removeFromFavourites,isAdded,setIsAdded}}>{children}</GlobalContext.Provider>
}


