import React from 'react';
import chipIcon from "../assets/chipIcon.svg";
import wifiIcon from "../assets/wifi-Icon.svg";
import VisaIcon from "../assets/VisaIcon.svg";
import treedot from "../assets/3dot.svg"

const WalletSection = () => {
  return (
    <div className="bg-white p-4 rounded-lg mb-6">
      {/* Header */}
      <div className="flex flex-row justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Wallet</h3>
        <button>
          <img src={treedot} alt="dot" />
        </button>
      </div>

      {/* First Card */}
      <div className="flex flex-col justify-between bg-gradient-to-b from-[#4A4A49] to-[#20201F] text-white p-4 rounded-[15px] relative overflow-hidden">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-bold">Maglo.</h1>
            <div className="h-5 w-px bg-[#626261]" />
            <p className="text-xs font-medium text-[#A0A0A0]">Universal Bank</p>
          </div>
        </div>

        <div>
          <div className="flex justify-between mt-10 px-1">
            <img src={chipIcon} alt="chip Icon" className="w-10 sm:w-12" />
            <img src={wifiIcon} alt="wifi Icon" className="w-5 sm:w-6" />
          </div>

          <div className="mt-5 flex gap-4 text-lg sm:text-xl tracking-wider">
            <span>5495</span>
            <span>7381</span>
            <span>3759</span>
            <span>2321</span>
          </div>
        </div>

        <div className="pt-3 flex justify-end">
          {/* VISA LOGO */}
          <svg
            width="47"
            height="36"
            viewBox="0 0 47 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 sm:w-12"
          >
            {/* ...SVG pathları aynı kalır... */}
          </svg>
        </div>
      </div>

      {/* Second Card */}
      <div className="flex flex-col bg-gradient-to-b from-[#959595]/40 to-[#959595]/10 border border-white/50 backdrop-blur-md text-white p-4 -mt-12 sm:-mt-14 mx-2 sm:mx-4 rounded-[15px] relative">
        <div className="flex items-center gap-2">
          <h1 className="font-bold text-white">Maglo.</h1>
          <p className="text-sm text-[#A0A0A0]">| Commercial Bank</p>
        </div>

        <div className="flex justify-between mt-10 px-1">
          <img src={chipIcon} alt="chip Icon" className="w-10 sm:w-12" />
          <img src={wifiIcon} alt="wifi Icon" className="w-5 sm:w-6" />
        </div>

        <div className="mt-5 flex gap-4 tracking-wider text-[#1B212D] text-base sm:text-lg font-bold">
          <span>8595</span>
          <span>2548</span>
          <span>****</span>
          <span>****</span>
        </div>

        <div className="mt-2 flex justify-between text-[#929EAE] text-xs">
          <span>09/25</span>
          <img src={VisaIcon} alt="Visa Logo" className="w-10 sm:w-12" />
        </div>
      </div>
    </div>
  );
};

export default WalletSection;
