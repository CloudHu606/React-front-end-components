import { useState } from "react";
import "../../../css/cinemark.css";

import seatsData from "../../../data/seats.json";

const Cinemark = () => {
  // inital Json seats
  const inital = seatsData.seats;
  const [seats, setSeats] = useState(inital);

  // inital 2d seats - To be continue
  // const row = 10;
  // const col = 10;

  const selectSeat = (row, col, selected) => {
    seats[row][col].selected = !selected;
    const newCopy = [...seats];
    setSeats(newCopy);
  };

  const cleanBtn = () => {
    let unselectedAll = seats.map((rows) => {
      rows.map((col) => {
        if (col.selected !== false) {
          col.selected = false;
          return col;
        }
        return col;
      });
      return rows;
    });

    setSeats(unselectedAll);
  };

  const bookBtn = () => {
    let bookAll = seats.map((rows) => {
      rows.map((col) => {
        if (col.selected !== false) {
          col.booked = true;
          col.selected = false;
          return col;
        }
        return col;
      });
      return rows;
    });
    setSeats(bookAll);
  };

  const resetBtn = () => {
    let resetAll = seats.map((rows) => {
      rows.map((col) => {
        col.booked = false;
        return col;
      });
      return rows;
    });

    setSeats(resetAll);
  };

  return (
    <>
      <h1> Movie Seating</h1>
      <div>
        <div className="des">
          <div>Booked - Disabled</div>
          <div>Selected - Orange</div>
          <div>Clean - clear all selected seats</div>
          <div>Reset - clear all booked seats</div>
        </div>
        <div className="btns">
          <button onClick={() => cleanBtn()}>Clean</button>
          <button onClick={() => bookBtn()}>Book</button>
          <button onClick={() => resetBtn()}>Reset</button>
        </div>
        <h2>
          Stage 1 - <span className="st">(JSON data) </span>{" "}
        </h2>
        {seats.length > 0 ? (
          <div className="stage">
            {seats.map((rows, rIndex) =>
              rows.map((col, cIndex) => (
                <div className="row" key={rIndex + cIndex}>
                  <button
                    key={col.id}
                    disabled={col.booked}
                    className={
                      col.selected ? "seat selected" : "seat not-selected"
                    }
                    onClick={() => {
                      selectSeat(rIndex, cIndex, col.selected);
                    }}
                  >
                    {col.id}
                  </button>
                </div>
              ))
            )}
          </div>
        ) : (
          <>No data</>
        )}

        <h2>
          Stage 2 - <span className="st">(2d array data)</span>{" "}
        </h2>
      </div>
    </>
  );
};

export default Cinemark;
