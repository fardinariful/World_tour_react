import './Country.css'
const Country = ({country}) => {
   const {name,flags,area,population} = country;
    return (
        <div className='country'>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <h3>Area:{area}</h3>
        </div>
    );
};

export default Country;
