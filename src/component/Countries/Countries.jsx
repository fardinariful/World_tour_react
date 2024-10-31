import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries,setcountries] = useState([]);
      
    const [visitedCountries,setvisitedCountries]=useState([]);
    useEffect(()=>
        {
            fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data=>setcountries(data))
        },[])

        const handleclick2=country=>{
            console.log("Add these on your visited Country");
           // console.log(country);
           const newvisitedCountries=[...visitedCountries,country];
           setvisitedCountries(newvisitedCountries);

        }
    return (
        <div >
            <div>
            <h3>Countries:{countries.length}</h3>
            </div>
            <div>
                <h5>Visited Countries:{visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country=> <li key={country.cca3}>
                            {country.name.common}
                        </li>)
                    }
                </ul>
            </div>
            <div className="countries_container">
            {
                countries.map(country=><Country key={country.cca3} handleclick2={handleclick2} country={country}></Country>)
            }
            </div>
            
        </div>
    );
};

export default Countries;