import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import picture from '../assets/signPicture.svg';
import logo from '../assets/logo.svg';
import googleIcon from '../assets/Google.svg';

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const validateForm = () => {
    const newErrors = {
      fullName: '',
      email: '',
      password: '',
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const validationErrors = validateForm();
  setErrors(validationErrors);

  const hasError = Object.values(validationErrors).some((msg) => msg !== '');
  
  if (hasError) {
    return; // Just stop here — no alert needed!
  }

  // If valid, proceed
  navigate('/dashboard');
};

  return (
    <div className="flex flex-col md:flex-row h-screen ">
      {/* Left Side: Form */}
      <div className="bg-white flex-1 p-8 md:p-16 flex items-center justify-center h-full">
        <div className="max-w-md w-full">
          {/* Logo */}
          <div className="flex items-center mb-28">
            <img src={logo} alt="Maglo Logo" className="h-6 w-6 mr-2" />
            <span className="text-xl font-bold">Maglo.</span>
          </div>

          {/* Form */}
          <form noValidate onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4">Create new account</h2>
            <p className="text-gray-600 mb-6">Welcome back! Please enter your details</p>

            {/* Full Name */}
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 ${errors.fullName ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`}
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 ${errors.password ? 'focus:ring-red-500' : 'focus:ring-blue-500'}`}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors"
            >
              Create Account
            </button>
          </form>

          {/* Google Sign Up */}
          <div className="mt-4">
            <button
              type="button"
              className="w-full py-2 px-4 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <img src={googleIcon} alt="Google Logo" className="h-5 w-5 mr-2" />
              Sign up with Google
            </button>
          </div>

          {/* Link to Sign In */}
          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{' '}
            <a href="/sign-in" className="text-green-500 hover:underline">Sign in</a>
          </p>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="hidden sm:flex bg-gray-100 flex-1 items-center justify-center relative">
        <img src={picture} alt="Signup illustration" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-gray-200"></div>
      </div>
    </div>
  );
};

export default SignUp;
