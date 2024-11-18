/* eslint-disable react/prop-types */
import { useState } from "react";
export default function Hotel({hotelProps}){

    const [searchTerm, setSearchTerm] = useState('');
    const filterData = hotelProps.filter((hotel)=>(
      hotel.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    ));
    
    return(
        <div>
            <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
           {filterData.map((hotel)=>(
           <div key={hotel.id}>
           <h1>{hotel.name}</h1>
            <p>{hotel.price}</p>
           </div>
           ))}
        </div>
    )
}