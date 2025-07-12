import React from 'react';
import searchIcon from "../assets/searchIcon.svg";
import notificationIcon from "../assets/notificationIcon.svg";
import { currentUser } from "../data/UserData";

const DashboardHeader = () => {
  return (
    <header className="w-full bg-white px-4 sm:px-6 lg:px-10 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:mb-7">
      
      {/* Page Title */}
      <h1 className="text-2xl text-[#1B212D] font-semibold font-['Kumbh_Sans'] hidden sm:flex">
        Dashboard
      </h1>

      {/* Right section: icons + user */}
      <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 w-full sm:w-auto">
        
        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="hover:scale-105 transition">
            <img src={searchIcon} alt="Search" className="w-5 h-5" />
          </button>
          <button className="hover:scale-105 transition">
            <img src={notificationIcon} alt="Notifications" className="w-5 h-5" />
          </button>
        </div>

        {/* User Profile */}
        <div className="flex items-center bg-[#FAFAFA] rounded-full pl-2 pr-4 py-1.5">
          <img
            src={currentUser.avatar || '/default-avatar.png'}
            alt={`${currentUser.name}'s Avatar`}
            className="h-8 w-8 rounded-full mr-2"
          />
          <span className="text-sm font-medium truncate max-w-[100px]">{currentUser.name}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-4 w-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-6 6-6-6" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
