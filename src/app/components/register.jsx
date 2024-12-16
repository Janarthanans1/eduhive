"use client"
import axios from 'axios';
import React, { useState } from 'react';

const Register = () => {
    const [name, setName] = useState('');
    const [registerNo, setRegisterNo] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error,setError] = useState('')
    const [success,setSuccess] = useState('')
    const [loading,setLoading] = useState(false)

    const handleForm = async(e)=>{
        e.preventDefault()
        setLoading(true)
        if(name===""||name===null){
            setError('Enter name Properly')
            setSuccess('')
            return
        }
        if(registerNo===""||registerNo===null){
            setError('Enter  Register Number Properly')
            setSuccess('')
            return
        }
        if(password===""||password.length<6){
            setError('Please enter a password with at least 6 characters')
            setSuccess('')
            return
        }
        if(role===""||role===null){
            setError('Enter your role')
            setSuccess('')
            return
        }
        try {
            const response = await axios.post("/api/register",{
                name,
                registerNo:registerNo.toString().toUpperCase(),
                password,
                role
            })
            if(response.data.status===404){
                setError('All fields required')
                setSuccess('')
                return
            }
            if(response.data.status===403){
                setError('User already exist')
                setSuccess("")
                return
            }
            setName('')
            setRegisterNo('')
            setPassword('')
            setRole('')
            setError('')
            setSuccess('')
            setLoading(false)
            if(response.data.status===201){
                setSuccess('user created successfully')
                setError('')
                return
            }
            
        } catch (error) {
            console.error(error)
            setLoading(false)
        }finally{
            setLoading(false)
        }
        
    }

    return (
        <div id="register" className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-700 to-blue-900">
            <form onSubmit={handleForm} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg">
                <h1 className="text-2xl font-bold text-blue-900 mb-6 text-center">Register</h1>

                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-blue-900 mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-blue-900 rounded focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>

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

                <div className="mb-6">
                    <label
                        htmlFor="role"
                        className="block text-sm font-medium text-blue-900 mb-2">
                        Role
                    </label>
                    <select
                        name="role"
                        id="role"
                        value={role}
                        onChange={e => setRole(e.target.value)}
                        className="w-full px-4 py-2 border border-blue-900 rounded focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        <option value="">--select Role--</option>
                        <option value="viewer">Viewer</option>
                        <option value="tutor">Tutor</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300">
                    {loading?(
                        <div className="flex items-center justify-center my-2 space-x-2">
                        <div className="w-2 h-2 rounded-full animate-pulse dark:bg-white"></div>
                        <div className="w-2 h-2 rounded-full animate-pulse dark:bg-white"></div>
                        <div className="w-2 h-2 rounded-full animate-pulse dark:bg-white"></div>
                    </div>
                    ):"Register"}
                </button>
                {error?<p className='text-center text-red-700'>{error}</p>:""}
                {success?<p className='text-center text-green-700'>{success}</p>:""}
            </form>
        </div>
    );
};

export default Register;
