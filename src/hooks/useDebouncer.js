import {useState, useEffect} from 'react'

export const useDebouncer = (userInp, delay=300) => {
    const [debouncedValue, setDebouncedValue] = useState(userInp)
    useEffect(() => {
     const timer = setTimeout(() => {
        setDebouncedValue(userInp)
     },delay)
     return(() => {
        clearTimeout(timer)
     })
    }, [userInp,delay])
    return debouncedValue
    
} 