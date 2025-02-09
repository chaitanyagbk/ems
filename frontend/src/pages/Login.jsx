import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {email,password});
      if (response.data.success) {
        alert("Successfully logged in");
      }
    } catch (error) {
      if(error.response && !error.response.data.success) {
        setError(error.response.data.error);
        console.log(error);
      }
      else {
        setError("Server Error");
      }
    }
  }
  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-b from-cyan-600 from-50%
    to-gray-100 to-50% space-y-6">
      <h2 className='font-calibri text-3xl text-white'>Recruitment Management System</h2>
      <div className='border shadow p-6 w-80 bg-white'>
        <h2 className='text-2xl font-bold mb-4'>Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password" 
              id="password"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-cyan-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700 transition-colors duration-300"
            >
              Login
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Login
