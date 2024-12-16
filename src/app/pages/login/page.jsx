"use client"
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const {push} = useRouter()
  const [registerNo, setRegisterNo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)


  const handleForm = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const response = await axios.post("/api/login", {
        registerNo: registerNo.toString().toUpperCase(),
        password
      })
      if (response.data.status === 400) {
        setError('All fields required')
        setSuccess('')
        return
      }
      if (response.data.status === 404) {
        setError('user not found')
        setSuccess('')
        return
      }
      if (response.data.status === 401) {
        setError('Invalid password')
        setSuccess('')
        return
      }
      setRegisterNo('')
      setPassword('')
      setLoading(false)
      setSuccess('')
      setError('')
      if (response.data.status === 200) {
        setSuccess('Logged in successful')
        setError('')
        push("/")
        return
      }

    } catch (error) {
      console.error(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }

  }

  return (
    <div id='login' className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-700 to-blue-900">
      <form onSubmit={handleForm} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label
            htmlFor="regNo"
            className="block text-sm font-medium text-blue-900 mb-2">
            Register No
          </label>
          <input
            type="text"
            id="regNo"
            required
            value={registerNo}
            onChange={e => setRegisterNo(e.target.value)}
            className="w-full px-4 py-2 border border-blue-900 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-blue-900 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-blue-900 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300">
          {loading ? (
            <div className="flex items-center justify-center my-2 space-x-2">
              <div className="w-2 h-2 rounded-full animate-pulse dark:bg-white"></div>
              <div className="w-2 h-2 rounded-full animate-pulse dark:bg-white"></div>
              <div className="w-2 h-2 rounded-full animate-pulse dark:bg-white"></div>
            </div>
          ) : "Login"}
        </button>
        {error ? <p className='text-center text-red-700'>{error}</p> : ""}
        {success ? <p className='text-center text-green-700'>{success}</p> : ""}
      </form>
    </div>
  );
};

export default Login;