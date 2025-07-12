import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import OverviewCards from '../components/OverviewCards';
import TransactionsTable from '../components/TransactionTable';
import ScheduledTransfers from '../components/SheduledTransfer';
import WalletSection from '../components/WalletSection';
import WorkingCapitalChart from '../components/WorkingCapitalChart';
import DashboardHeader from '../components/DashboardHeader';

const financialSummary = {
  totalBalance: 5240.21,
  totalSpending: 250.80,
  totalSaved: 550.25,
};



const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main content wrapper */}
      <div className="flex-1 flex flex-col h-full">
        {/* Mobile Top Bar */}
        <header className="max-sm:flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 bg-white hidden ">
          {/* Sidebar toggle button - only on small screens */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden text-gray-700 text-2xl focus:outline-none"
            aria-label="Toggle Sidebar"
          >
            ☰
          </button>

          {/* Page Title - always visible */}
          <h1 className="text-xl sm:text-2xl font-bold text-[#1B212D] font-['Kumbh_Sans']">
            Dashboard
          </h1>

         
          
        </header>


        {/* Header */}


        {/* Main content area */}
        <main className="flex-1 overflow-y-auto px-4 sm:px-6 pb-10 mt-4">
          <DashboardHeader />
          <div className="flex flex-col lg:flex-row gap-9">
            <div className="flex-2 w-full">
              <OverviewCards financialSummary={financialSummary} />
              <WorkingCapitalChart />
              <TransactionsTable />
            </div>

            <div className="flex-1 w-full">
              <WalletSection />
              <ScheduledTransfers />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
