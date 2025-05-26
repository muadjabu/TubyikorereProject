import React from "react";
import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">

        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          Sign in to your account
        </h2>

        <form className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm
                         focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm
                         focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="••••••••"
            />
          </div>

          {/* Forgot password link */}
          <div className="flex justify-end">
           <Link
  to="/forgot-password"
  className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
>
  Forgot password?
</Link>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent 
                       rounded-md shadow-sm text-white bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                       font-semibold text-lg"
          >
            Sign In
          </button>
        </form>

        {/* Create account links */}
        <p className="mt-6 text-center text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Create one
          </Link>
        </p>

        {/* Back to Home button */}
        <div className="mt-4 text-center">
          <a
            href="/home"
            className="text-sm text-black-500 hover:text-gray-700 "
          >
            ← Back to Home
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default LoginForm;
