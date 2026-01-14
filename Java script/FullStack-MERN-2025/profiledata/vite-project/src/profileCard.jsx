import {data} from './data'
export function profileCard() {
    (
      <div className='contProfile'>
      {data.map((emp) => (
        <div className='container'key={emp.name}>
          
          <img className='employee-img' src={emp.img}  />.
          <h1>Employee Details</h1>
          <div className="">
          
            <div
              
              className=""
            >
              <h2 className="">{emp.name}</h2>
              <p className="">
                <strong>Address:</strong> {emp.address}
              </p>
              <p className="">
                <strong>Phone:</strong> {emp.phone}
              </p>
            </div>
          
          </div>
        </div>
      ))}
      </div>
    )
    return 
   }