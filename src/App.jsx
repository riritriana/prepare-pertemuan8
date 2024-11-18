import Hotel from "./components/Hotel";

export default function App(){
    const hotels = [
    { id: 1, name: 'Golden Sands Resort' , price:20000000},
    { id: 2, name: 'Sunset Beach Hotel' , price:20000000 },
    { id: 3, name: 'Mountain View Lodge' , price:20000000}
  ];

  return(
    <div>
      <Hotel hotelProps={hotels}/>
    </div>
  )
}








// // import { useState } from "react";


// export default function App(){
//   // const numbers = [1, 2, 3, 4, 5, 6];
//   // const evenNumbers = numbers.filter((number)=> {
//   //   return number % 2 === 0; // Kondisi: hanya ambil angka genap
//   // });
//   const hotels = [
//     { id: 1, name: 'Golden Sands Resort' },
//     { id: 2, name: 'Sunset Beach Hotel' },
//     { id: 3, name: 'Mountain View Lodge' }
//   ];
//   // State untuk menyimpan input pencarian
//   // const [searchTerm, setSearchTerm] = useState('');
//   // const filteredHotels  = hotels.filter( (hotel )=>
//   //   hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
//   // );

//   return(
// <div>
//   {/* {evenNumbers} */}
//       {/* Input pencarian */}
//       {/* <input
//         type="text"
//         placeholder="Cari hotel..."
//         value={searchTerm} //menetapkan value dari input sebagai state searchterm
//         onChange={(e) => setSearchTerm(e.target.value)}
//       /> */}
      
//       {/* Menampilkan daftar hotel yang sudah difilter */}
//       {/* <ul>
//         {filteredHotels.map(hotel => (
//           <li key={hotel.id}>{hotel.name}</li>
//         ))}
//       </ul> */}
//       <Hotel hotelProps={hotels}/>
//     </div>
 
//   )
// }