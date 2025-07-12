import React from 'react';
import WalletIcon from "../assets/DashWalletIcon.svg";
import TotalSave from "../assets/TotalSaveIcon.svg";
import totalSpending from "../assets/totalSpendingIcon.svg"

const OverviewCards = ({ financialSummary }) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 grid-rows-3 xl:grid-rows-1 gap-6 mb-8">
      {/* Total Balance */}
      <div className="bg-gray-800 text-white p-4 rounded-lg flex items-center gap-4 min-w-0">
        <img src={WalletIcon} alt="Wallet Icon" className="w-10 h-10 shrink-0" />
        <div className="flex flex-col truncate">
          <span className="font-semibold text-sm sm:text-base whitespace-nowrap truncate">
            Total balance
          </span>
          <h2 className="text-xl sm:text-2xl font-bold truncate">
            ${financialSummary.totalBalance.toFixed(2)}
          </h2>
        </div>
      </div>

      {/* Total Spending */}
      <div className="bg-[#F8F8F8] p-4 rounded-lg flex items-center gap-4 min-w-0">
        <img src={totalSpending} alt="Spending Icon" className="w-10 h-10 shrink-0" />
        <div className="flex flex-col truncate">
          <span className="font-semibold text-sm sm:text-base whitespace-nowrap truncate">
            Total spending
          </span>
          <h2 className="text-xl sm:text-2xl font-bold truncate">
            ${financialSummary.totalSpending.toFixed(2)}
          </h2>
        </div>
      </div>

      {/* Total Saved */}
      <div className="bg-[#F8F8F8] p-4 rounded-lg flex items-center gap-4 min-w-0">
        <img src={TotalSave} alt="Saved Icon" className="w-10 h-10 shrink-0" />
        <div className="flex flex-col truncate">
          <span className="font-semibold text-sm sm:text-base whitespace-nowrap truncate">
            Total saved
          </span>
          <h2 className="text-xl sm:text-2xl font-bold truncate">
            ${financialSummary.totalSaved.toFixed(2)}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default OverviewCards;
