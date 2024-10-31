import { useState } from 'react';
import './Country.css'
const Country = ({country,handleclick2}) => {
   const {name,flags,area,population,cca3} = country;
    
   const [Visited,setVisited] = useState(false);
   const handleclick1=()=>{
    setVisited(!Visited);
   }
    return (
        <div className={`country ${Visited ? 'visited' : 'not_visited'}`}>
            <h3 style={{color: Visited ? 'purple' : 'red'}}>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <h3>Area:{area}</h3>
            <p><small>Code:{cca3}</small></p>
            <button onClick={()=>handleclick2(country)}>Mark as visited</button>
            <br />
            <button className='btn' onClick={handleclick1}>{Visited ? 'Visited' :'Going'}</button>
            {
                Visited ? 'I have visited these country':'I want to visit these country'
            }
        </div>
    );
};

export default Country;
