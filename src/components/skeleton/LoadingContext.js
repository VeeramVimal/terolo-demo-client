import { useState } from "react"
import { createContext } from "react"
import { useContext } from "react"

const LoadingContext = createContext({
    loading:false,
    setloading:null
  })
  export const LoadingProvider=({children})=>{
    const [loading, setloading] = useState(false)
    const value = {loading,setloading};
    return(
        <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
    )
  }
  export const useLoading =()=>{
    const context = useContext(LoadingContext)
    if(!context){
      throw new Error("use within loading")
    }
    return context
  }