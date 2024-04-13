import React from 'react'
import { GlobalContext } from '../../context'
import { useContext } from 'react'
import Recipe from '../../components/Recipe'
import NoData from '../../components/NoData'
function Home() {
    const {loading,error,result,search}=useContext(GlobalContext)
    
  return (
    <div className='w-screen min-h-[80vh] flex justify-center items-center py-2 flex-wrap gap-6'>
    {
        result && result.length>0?
        result.map((item,i)=>{
          return <Recipe key={i} item={item} id={item.id}></Recipe>
        })
        :<NoData></NoData>
      }
    </div>
  )
}

export default Home