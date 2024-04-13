import { useContext } from "react"
import Nav from "./components/Nav"
import { GlobalContext } from "./context"
import Recipe from "./components/Recipe"
import {Routes ,Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Favourites from "./pages/Favourites/Favourites"
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails"
import LandingPage from "./components/LandingPage"
import Loading from "./components/Loading"
function App() {
const {loading,error,result}=useContext(GlobalContext)
if(loading) return <Loading/>
if(error) return <div className="w-screen h-screen font-bold flex justify-center items-center">{error}</div>
  return (
<div className="">
<Nav></Nav>
<Routes>
<Route path="/" element={<Home></Home>}></Route>
<Route path="/landing" element={<LandingPage></LandingPage>}></Route>
<Route path="/favourite" element={<Favourites></Favourites>}></Route>
<Route path="/details/:id" element={<RecipeDetails></RecipeDetails>}></Route>
</Routes>
</div>
  )
}

export default App
