export default function Input({movieName,setMovieName}){
    return(
    <div className='input-container'>
    <input type="text" value={movieName} placeholder='Search Movie' onChange={(e)=>setMovieName(e.target.value)} />
  </div>
    )
}