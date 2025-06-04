import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LoginForm = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-grow flex flex-col lg:flex-row items-center justify-center px-4 py-12 gap-8">
        {/* Login Form Section - now with matching height */}
        <div className="w-full m-15 lg:w-1/2 max-w-lg bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#0d3547]">
            {t("Sign in to your account")}
          </h2>

          <form className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {t("Phone Number")}
              </label>
              <input
                id="PhoneNumber"
                name="PhoneNumber"
                type="text"
                autoComplete="current-PhoneNumber"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm
                           focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                placeholder="Enter Your Phone Number"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                {t("Password")}
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm
                           focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                placeholder="••••••••"
              />
            </div>

            {/* Remember me & Forgot password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  {t("Remember me")}
                </label>
              </div>

              <Link
                to="/forgot-password"
                className="text-sm text-yellow-600 hover:text-yellow-800 font-medium"
              >
                {t("Forgot password?")}
              </Link>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent 
                         rounded-md shadow-sm text-white bg-[#0d3547] hover:bg-yellow-500
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500
                         font-semibold text-lg transition-colors duration-300"
            >
              {t("Sign In")}
            </button>
          </form>
          {/* Create account links */}
          <p className="mt-6 text-center text-gray-600">
            {t("Don't have an account?")}{" "}
            <Link
              to="/register"
              className="text-yellow-600 hover:text-yellow-800 font-medium"
            >
              {t("Create one")}
            </Link>
          </p>

          {/* Back to Home button */}
          <div className="mt-4 text-center">
            <Link
              to="/"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              ← {t("Back to Home")}
            </Link>
          </div>
        </div>

        {/* Guidelines Aside Section - now with matching height */}
        <aside className="w-full lg:w-1/2 max-w-lg bg-white p-8 rounded-lg shadow-lg h-120 border border-gray-200">
          <div className="space-y-6 h-full flex flex-col">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">
                {t("Login Guidelines")}
              </h3>
            </div>
            
            <div className="space-y-4 flex-grow">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-yellow-500 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-sm text-gray-700">
                  {t("Use your registered Phone Number")}
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-yellow-500 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-sm text-gray-700">
                  {t("Password is case sensitive")}
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-yellow-500 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-sm text-gray-700">
                  {t("Check 'Remember me' to stay logged in on this device")}
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-yellow-500 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-3 text-sm text-gray-700">
                  {t("Use password managers for better security")}
                </p>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    {t("Never share your login credentials with anyone. Our team will never ask for your password.")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
};

export default LoginForm;