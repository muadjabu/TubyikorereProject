import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SignUpForm = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full m-10 max-w-lg bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#0d3547]">
            {t("Create your account")}
          </h2>

          <form className="space-y-6">
            {/* Personal Information Section */}
            <div className="space-y-4 border-b border-gray-200 pb-6">
              <h3 className="text-lg font-medium text-gray-900">
                {t("Personal Information")}
              </h3>
              
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  {t("Full Name")}
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm
                             focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  placeholder={t("Enter your full name")}
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                  {t("Phone Number")}
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  autoComplete="tel"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm
                             focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  placeholder={t("Enter your phone number")}
                />
              </div>
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
                  autoComplete="new-password"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm
                             focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  placeholder="••••••••"
                />
                <p className="mt-1 text-xs text-gray-500">
                  {t("Use 8 or more characters with a mix of letters, numbers & symbols")}
                </p>
              

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  {t("Confirm Password")}
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm
                             focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  placeholder="••••••••"
                />
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start pt-2">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-gray-700">
                    {t("I agree to the")}{" "}
                    <Link to="/terms" className="text-yellow-600 hover:text-yellow-800 font-medium">
                      {t("Terms and Conditions")}
                    </Link>
                  </label>
                </div>
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent 
                         rounded-md shadow-sm text-white bg-[#0d3547] hover:bg-yellow-500
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500
                         font-semibold text-lg transition-colors duration-300"
            >
              {t("Sign Up")}
            </button>
          </form>

          {/* Already have an account links */}
          <p className="mt-6 text-center text-gray-600">
            {t("Already have an account?")}{" "}
            <Link
              to="/login"
              className="text-yellow-600 hover:text-yellow-800 font-medium"
            >
              {t("Sign in")}
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
      </div>

      <Footer />
    </div>
  );
};

export default SignUpForm;