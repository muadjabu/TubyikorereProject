import React from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">

        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          Create your account
        </h2>

        <form className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm
                         focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="John Doe"
            />
          </div>

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
              autoComplete="new-password"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm
                         focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Create a strong password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirm-password"
              name="confirmPassword"
              type="password"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm
                         focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Re-type your password"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent 
                       rounded-md shadow-sm text-white bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                       font-semibold text-lg"
          >
            Create Account
          </button>
        </form>

        {/* Already have account */}
        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Sign in
          </Link>
        </p>

        {/* Back to Home */}
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

export default RegisterForm;
