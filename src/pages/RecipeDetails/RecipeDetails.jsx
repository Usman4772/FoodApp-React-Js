import React, { useContext, useEffect, useState } from 'react'
import {useParams, useSearchParams} from "react-router-dom"
import { GlobalContext } from '../../context'
import Details from '../../components/Details'
function RecipeDetails() {
    // const {recipeDetails,setRecipeDetails}=useContext(GlobalContext)
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState("")
    const [recipeDetails,setRecipeDetails]=useState({})
    const {id}=useParams()

    async function getDetails(){
      try{
        setLoading(true)
        const response=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
        const data=await response.json()
        if(data.status=="success"){
            // console.log("set")
            setRecipeDetails(data.data.recipe)
        }
        setLoading(false)
      }catch(e){
        setLoading(false)
        setError("Something went wrong plase try again !!!")
      }

    }     
useEffect( ()=>{
    // console.log("inside useEffect"+id)

getDetails()
   
},[])

  return (
<div>
{recipeDetails?<Details details={recipeDetails} loading={loading} error={error} ></Details>:<div className='w-screen h-[80vh] flex justify-center items-center font-semibold text-2xl' >No Details Available</div>}

</div>

  )
}

export default RecipeDetails