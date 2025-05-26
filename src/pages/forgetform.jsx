import React from "react";
import { Link } from "react-router-dom";

const ForgotPasswordForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">

        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          Forgot your password?
        </h2>

        <p className="text-center text-gray-600 mb-6">
          Enter your email and we'll send you a link to reset your password.
        </p>

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

          {/* Submit button */}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent 
                       rounded-md shadow-sm text-white bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                       font-semibold text-lg"
          >
            Send Reset Link
          </button>
        </form>

        {/* Back to login */}
        <p className="mt-6 text-center text-gray-600">
          Remembered your password?{" "}
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
            className="text-sm text-black-500 hover:text-gray-700"
          >
            ← Back to Home
          </a>
        </div>

      </div>
    </div>
  );
};

export default ForgotPasswordForm;
