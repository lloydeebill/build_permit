// components/LoginForm.js
import { useState } from 'react';
import { UserCircleIcon, LockClosedIcon } from "@heroicons/react/24/solid";

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    let hasErrors = false;

    // Example validation
    if (!username.trim()) {
      setErrors((errs) => ({ ...errs, username: 'Username cannot be blank.' }));
      hasErrors = true;
    } else {
      setErrors((errs) => ({ ...errs, username: '' }));
    }

    if (!password) {
      setErrors((errs) => ({ ...errs, password: 'Password is required.' }));
      hasErrors = true;
    } else {
      setErrors((errs) => ({ ...errs, password: '' }));
    }

    if (!hasErrors) {
      // Implement login logic here
      console.log('Logging in with:', username, password);
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

            <div className="mt-1">
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`w-full px-3 py-2 border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm`}
                placeholder="Username"
              />
            </div>
            {errors.username && <p className="mt-1 text-xs text-red-600">{errors.username}</p>}
          </div>
          <div>
          <div className="flex items-center mb-2">
              <LockClosedIcon className="h-4 w-4 relative mr-1" />
              <label htmlFor="password" className="text-sm font-semibold mb-0 mr-2 text-[#C41818]">Password:</label>
            </div>
            <div className="mt-1">
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm`}
                placeholder="Password"
              />
            </div>
            {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password}</p>}
          </div>
          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
            <a href="/regpermit" className="text-sm text-black hover:underline">Create Account</a>
          </div>
          <div className="flex justify-center mt-4">
            <button type="button" className="bg-[#C41818] hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">Login</button>
          </div>
        </form>
    </div>
  );
}
