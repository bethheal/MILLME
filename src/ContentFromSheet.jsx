// import React, { useEffect, useState } from 'react';

// const SHEET_ID = '1UeqWgamC_0OwVB6zskdyVgytNwV_wSACKagUhqwuFrM';
// const API_KEY = 'AIzaSyBywKB3OIxViBDpv2UmQTR_n94l8Mrth5w';
// const SHEET_NAME = 'Sheet1';

// const ContentFromSheet = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchSheetData = async () => {
//       try {
//         const response = await fetch(
//           `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`
//         );
//         const result = await response.json();
//         const rows = result.values;

//         if (!rows || rows.length === 0) {
//           console.warn('No data found in sheet');
//           return;
//         }

//         const headers = rows[0];
//         const items = rows.slice(1).map((row) =>
//           Object.fromEntries(row.map((cell, i) => [headers[i], cell]))
//         );
//         setData(items);
//       } catch (error) {
//         console.error('Error fetching sheet data:', error);
//       }
//     };

//     fetchSheetData();
//   }, []);

//   return (
//     <div className="p-4 space-y-4">
//       {data.map((item, index) => (
//         <div key={index} className="border p-4 rounded shadow">
//           <h2 className="text-xl font-bold">{item.title}</h2>
//           <p>{item.description}</p>
//           {item.image_url && (
//             <img src={item.image_url} alt={item.title} className="w-48 mt-2" />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ContentFromSheet;
