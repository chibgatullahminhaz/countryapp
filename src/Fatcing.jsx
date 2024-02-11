import { useEffect, useState } from "react"
import React  from 'react'
import Countries from "./Component/Countries";

const url = "https://restcountries.com/v3.1/all"
function Fatcing() {
const [isloading , setIsloading] = useState(true);
const [error , setError] = useState(null);
const [ countries, setCountries] = useState([]);



const factData = async(url) => {
    setIsloading(true);
    try {
        const response = await fetch(url);
        const data = await response.json();
        setCountries(data);
        setIsloading(false);
        setError(null)
    } catch (error){
        setIsloading(false);
        setError(error)
    }
}



useEffect(() => {
factData(url)
},[])


  return (
    <>
    <h1>Country App</h1>
    {isloading && <h1>Loading....</h1>}
    {error &&  <h2>{error.message}</h2> }
    {countries && <Countries countries= {countries} />  }
    </>
  )
}

export default Fatcing
