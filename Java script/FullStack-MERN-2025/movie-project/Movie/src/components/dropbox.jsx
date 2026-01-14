import { useState, useEffect } from "react"

export default function Dropbox({movies, }){
    const [year,setYear]= useState('')
    const moviesByYear = (year)=>{
        if (year === 'nineties'){
           return  movies.filter((movie)=>movie.startYear>=1990 && movie.startYear<=2000)
        }
        else if (year === 'first-decade'){
            return  movies.filter((movie)=>movie.startYear>=2001 && movie.startYear<=2010)
        }
        else if (year === 'second-decade'){
            return movies.filter((movie)=>movie.startYear>=2011 && movie.startYear<=2020)
        }
        else if (year === 'last-fiveYears'){
            return  movies.filter((movie)=>movie.startYear>=2021 && movie.startYear<=2025)
        }
        else {
            return {movies}
        } 
    }
    const filtered = moviesByYear(year)
        console.log(filtered)
    return(
        <>
         <label for="movies" className='w-fit text-blue-400 text-lg flex justify-self-end'>Select by Year:
    <select  className='p-1.5  text-amber-400  ' id="movies" name="movies" onChange={e=> setYear(e.target.value)}>
    <option value="nineties" onClick={filtered}>1990 - 2000</option>
    <option value="first-decade">2001 - 2010</option>
    <option value="second-decade">2011 - 2020</option>
    <option value="last-fiveYears">2021 -2025</option>
    </select>
    </label>
    </>
    )
}