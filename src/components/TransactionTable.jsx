import React from 'react';
import { recentTransactions } from '../data/TransactionData';

const RecentTransactions = () => {
  return (
    <div className="bg-white p-4 rounded-lg border border-[#F5F5F5] mb-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg  text-[#1B212D] font-semibold">Recent Transaction</h3>
        <button
          type="button"
          onClick={() => {
            // window.location.href = '#';
          }}
          className="text-sm text-green-600 hover:text-green-400"
        >
          View All &gt;
        </button>
      </div>

      {/* Table for larger screens */}
      <div className="hidden sm:block overflow-x-auto text-[#929EAE]">
        <table className="w-full text-sm">
          <thead className="text-xs font-semibold">
            <tr>
              <th className="text-left p-2">NAME/BUSINESS</th>
              <th className="text-left p-2">TYPE</th>
              <th className="text-right p-2">AMOUNT</th>
              <th className="text-right p-2">DATE</th>
            </tr>
          </thead>
          <tbody>
            {recentTransactions.map((tx) => (
              <tr key={tx.id} className="border-b-2 border-[#F5F5F5]">
                <td className="p-2 flex items-center">
                  <img src={tx.icon} alt={tx.name} className="h-6 w-6 mr-3.5" />
                  <div className="flex flex-col">
                    <span className="font-medium text-[#1B212D]">{tx.name}</span>
                    <span className="text-xs">{tx.business}</span>
                  </div>
                </td>
                <td className="p-2  font-medium">{tx.type}</td>
                <td className="p-2 text-right text-[#1B212D] font-semibold">${tx.amount.toFixed(2)}</td>
                <td className="p-2 text-right">{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards for smaller screens */}
      <div className="sm:hidden flex flex-col gap-4">
        {recentTransactions.map((tx) => (
          <div
            key={tx.id}
            className="border border-[#F5F5F5] rounded-md p-3 flex flex-col text-[#929EAE]"
          >
            <div className="flex items-center mb-2">
              <img src={tx.icon} alt={tx.name} className="h-6 w-6 mr-3.5" />
              <div className="flex flex-col">
                <span className="font-medium text-[#1B212D]">{tx.name}</span>
                <span className="text-xs text-gray-500">{tx.business}</span>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Type:</span>
              <span>{tx.type}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Amount:</span>
              <span className="font-semibold text-[#1B212D]">${tx.amount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Date:</span>
              <span>{tx.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
