
import React from 'react'

const UserProfile = () => {
  return (
    <div className='flex items-center'>
      <div id="img">
        <img src="\img.png" alt="img" className='w-56 rounded-2xl'/>
      </div>

      <div id="user_data">
        <table className='table-auto'>
          <tbody>
          <tr >
            <th className='text-left'>Name</th>
            <td>Arun</td>
          </tr>
          <tr>
            <th>Register No</th>
            <td>C2S31227</td>
          </tr>
          <tr>
            <th>Department</th>
            <td>Computer Science</td>
          </tr>
          </tbody>
         
        </table>
      </div>
    </div>
  )
}

export default UserProfile