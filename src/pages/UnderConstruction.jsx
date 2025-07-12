import React from 'react';
import { FaTools, FaEnvelope, FaClock } from 'react-icons/fa';

const UnderConstruction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-indigo-600 p-6 text-center">
          <div className="inline-flex items-center justify-center bg-white/20 p-4 rounded-full">
            <FaTools className="text-white text-4xl" />
          </div>
          <h1 className="mt-4 text-3xl font-bold text-white">Under Construction</h1>
        </div>

        {/* Content */}
        <div className="p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="animate-bounce">
              <FaClock className="text-indigo-600 text-5xl" />
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            We're working hard to bring you something amazing!
          </h2>
          
          <p className="text-gray-600 mb-6">
            Our website is currently undergoing scheduled maintenance. 
            We'll be back soon with an improved experience.
          </p>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-indigo-600 h-2.5 rounded-full animate-pulse" 
                style={{ width: '65%' }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">65% complete</p>
          </div>

          {/* Contact Info */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center gap-2 text-blue-700">
              <FaEnvelope />
              <span>contact@yourdomain.com</span>
            </div>
          </div>

          {/* Countdown (optional) */}
          <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto mb-8">
            {[
              { value: '12', label: 'Days' },
              { value: '23', label: 'Hours' },
              { value: '45', label: 'Minutes' },
              { value: '30', label: 'Seconds' },
            ].map((item) => (
              <div key={item.label} className="bg-indigo-100 rounded-lg p-2">
                <div className="text-2xl font-bold text-indigo-700">{item.value}</div>
                <div className="text-xs text-indigo-500">{item.label}</div>
              </div>
            ))}
          </div>

          <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
            Notify Me When Ready
          </button>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;