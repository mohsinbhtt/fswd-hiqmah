import React, { useState } from "react";

export default function Stars() {
    const [rating, setRating] = useState(0)
  return (
    <div className="stars">
      {Array.from({ length: 5 }).map((_, index) => {
        const starNumber = index + 1;
    return <span key={index} onClick={()=>{setRating(starNumber)}}>
        <i className={starNumber <= rating ? "fa-solid fa-star" : "fa-regular fa-star"}></i></span>;
      })}
    </div>
  );
}
  