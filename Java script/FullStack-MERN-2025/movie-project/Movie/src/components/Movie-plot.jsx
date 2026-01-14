import { useState, useEffect } from "react";
import Stars from "./stars"

export default function MoviePlot({movie}){
    const[readMore, setReadMore] = useState(false)
    function toggleReadMore(){
     setReadMore( !readMore)
    }
    return(
      <>
        <div className={`movie-plot ${readMore? "expand-plot":""}`}>
        {readMore ? movie.plot : `${movie.plot.slice(0,70)}...`}
        </div>
        <button className="read-more" onClick={toggleReadMore}>  {readMore ? "Read Less": "Read More" }</button>
        </>
    )
}