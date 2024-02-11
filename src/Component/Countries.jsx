import React from 'react'
import Country from './Country'
import uuid4 from "uuid4";


function Countries(props) {
  return (
    <section>
        {props.countries.map((country)=>{
            const countryNew = {country, id:uuid4()}
            return <Country {...countryNew} key= {countryNew.id} />
        })}
    </section>
  )
}

export default Countries
