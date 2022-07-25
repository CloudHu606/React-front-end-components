// import "../../../css/cinemark.css";

// const Seat = (data, fuc) => {
//   const { seats } = data.data;

//   console.log(seats);

//   console.log(fuc);

//   const selectSeat = (row, col, selected) => {
//     fuc((seats[row][col].selected = !selected));

//     console.log(seats);
//   };

//   return (
//     <div className="stage">
//       {seats.map((rows, rIndex) =>
//         rows.map((col, cIndex) => (
//           <div className="row">
//             <span
//               key={col.id}
//               className="seat"
//               // id={}
//               onClick={() => {
//                 selectSeat(rIndex, cIndex, seats[rIndex][cIndex].selected);
//               }}
//             >
//               {col.id}
//             </span>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Seat;
