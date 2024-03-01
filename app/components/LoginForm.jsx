import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { UserCircleIcon, LockClosedIcon } from "@heroicons/react/24/solid";

function LoginForm({ navigate }) { // Receive navigate as a prop
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    setError('');

    const hardcodedUsername = 'testuser';
    const hardcodedPassword = 'testpass';

    // Replace with actual authentication logic
    if (username === hardcodedUsername && password === hardcodedPassword) {
      navigate('/buildpermit'); // Use navigate to redirect
    } else {
      setError('Invalid username or password.');
      return; // Prevent navigation on invalid credentials
    }
  };

  return (
    <div className="bg-slate-100 rounded-lg shadow-lg mx-0 sm:mx-auto my-4 p-2 sm:p-6 lg:p-8 max-w-xl w-full relative overflow-auto max-h-[80vh]">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <div className="flex items-center mb-2">
            <UserCircleIcon className="h-4 w-4 relative mr-1" />
            <label htmlFor="username" className="text-sm font-semibold mb-0 mr-2 text-[#C41818]">Username:</label>
          </div>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Username"
            aria-required="true"
          />
        </div>
        <div>
          <div className="flex items-center mb-2">
            <LockClosedIcon className="h-4 w-4 relative mr-1" />
            <label htmlFor="password" className="text-sm font-semibold mb-0 mr-2 text-[#C41818]">Password:</label>
          </div>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Password"
            aria-required="true"
          />
        </div>
        {error && <p className="mt-1 text-xs text-red-600" aria-live="assertive">{error}</p>}
        <div className="flex items-center justify-between">
          <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
          <a href="/regpermit" className="text-sm text-black hover:underline">Create Account</a>
        </div>
        <div className="flex justify-center mt-4">
          <button type="submit" className="bg-[#C41818] hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
