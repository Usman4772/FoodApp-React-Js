import { useEffect } from "react";

export default function useOutsideClick(ref,handler){
  useEffect(()=>{
function listener(event){
if(!ref.current  || ref.current.contains(event.target)){
    return
}
handler()
}
window.addEventListener("mousedown",listener)
window.addEventListener("touchmove",listener)
return ()=>{
    window.removeEventListener("mousedown",listener)
    window.removeEventListener("touchmove",listener)  
}
  },[ref,handler])
}