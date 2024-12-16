"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Home = () => {
  const { push } = useRouter()
  return (
    <div id='main_container' className='px-16 bg-white h-full'>
      <div id='header' className='w-96 mt-40'>
        <div className='text-justify '>
          <h1 className='text-5xl font-bold inline'>Learn from our best Teachers </h1>
        </div>
        <button type='button' onClick={(e)=>push("/pages/courses")} className='bg-blue-800 px-5 py-2 rounded text-white font-bold' >Courses</button>
      </div>

      <div id="student_review">
        <h1>What Our Students Have to Say</h1>
        <div id="feedbacks" className='bg-gray-600 px-12 py-8 w-full h-96 overflow-auto grid grid-cols-3 gap-5'>
          
          <div className="bg-white p-6 rounded-lg shadow-lg h-60 w-full max-w-md mx-auto">
            <p className="text-justify text-gray-700 leading-relaxed">
              Click the edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="mt-6 flex gap-4 items-center">
              <img
                src="img.png"
                alt="Profile"
                className="w-16 h-16 object-cover bg-gray-300 rounded-full border-2 border-gray-200"
              />
              <div id="name_dept">
                <h1 className="font-semibold text-lg text-gray-800">Janarthanan</h1>
                <h3 className="text-sm text-gray-600">B.Sc Computer Science</h3>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default Home