import React from 'react';
import { scheduledTransfers } from '../data/ScheduleData';

const ScheduledTransfers = () => {
  return (
    <div className="bg-white p-4 rounded-lg mb-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-y-2">
        <h3 className="text-lg font-semibold text-[#1B212D]">Scheduled Transfers</h3>
        <button
          type="button"
          onClick={() => {
            // Örnek yönlendirme veya işlem
            // window.location.href = '#';
          }}
          className="text-sm text-green-600 hover:text-green-400"
        >
          View All &gt;
        </button>
      </div>

      {/* Transfer List */}
      <ul className="space-y-2">
        {scheduledTransfers.map((transfer) => (
          <li
            key={transfer.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-2 border-b-2 last:border-b-0 border-[#FAFAFA]"
          >
            <div className="flex items-center gap-2">
              <img
                src={transfer.avatar}
                alt={transfer.name}
                className="h-8 w-8 rounded-full"
              />
              <div>
                <span className="font-medium text-sm sm:text-base">{transfer.name}</span>
                <div className="text-xs text-gray-500">{transfer.date}</div>
              </div>
            </div>
            <span className="text-black text-sm sm:text-base font-bold text-right sm:text-left">
              - ${Math.abs(transfer.amount).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduledTransfers;
