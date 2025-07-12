import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardIcon from "../assets/DashboardIcon.svg";
import TransactionIcon from "../assets/TransactionsIcon.svg";
import Invoices from "../assets/Invoices.svg";
import WalletIcon from "../assets/MyWalletsIcon.svg";
import settingIcon from "../assets/SettingsIcon.svg";
import helpIcon from "../assets/HelpIcon.svg";
import logoutIcon from "../assets/LogoutIcon.svg";
import logo from "../assets/logo.svg";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const mainLinks = [
    { label: 'Dashboard', icon: DashboardIcon, path: '/dashboard' },
    { label: 'Transactions', icon: TransactionIcon, path: '/construction' },
    { label: 'Invoices', icon: Invoices, path: '/construction' },
    { label: 'My Wallets', icon: WalletIcon, path: '/construction' },
    { label: 'Settings', icon: settingIcon, path: '/construction' },
  ];

  const bottomLinks = [
    { label: 'Help', icon: helpIcon, path: '/construction' },
    { label: 'Logout', icon: logoutIcon, path: '/' },
  ];

  const renderLink = (link, isActive = false) => (
    <a
      key={link.label}
      href={link.path}
      onClick={(e) => {
        e.preventDefault();
        navigate(link.path);
        setIsOpen(false);
      }}
      className={`flex items-center py-2 px-4 text-gray-700 hover:bg-gray-200 transition duration-300 rounded ${
        isActive ? 'bg-green-500 text-white' : ''
      }`}
    >
      <img src={link.icon} alt={`${link.label} icon`} className="w-5 h-5 mr-3" />
      {link.label}
    </a>
  );

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-white/30 backdrop-blur-md bg-opacity-40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-64 z-50 bg-[#FAFAFA] shadow-md
          transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:flex
          flex flex-col justify-between
        `}
      >
        <div>
          {/* Logo */}
          <div className="mb-10 flex items-center gap-2 px-6 pt-8">
            <img src={logo} alt="Maglo Logo" className="h-6 w-6" />
            <span className="text-xl font-bold">Maglo.</span>
          </div>

          {/* Main Links */}
          <nav className="space-y-1 px-4 font-['Kumbh_Sans'] text-sm font-medium">
            {mainLinks.map((link) => renderLink(link, link.label === 'Dashboard'))}
          </nav>
        </div>

        {/* Bottom Links */}
        <div className="space-y-1 px-4 pb-6 font-['Kumbh_Sans'] text-sm font-medium">
          {bottomLinks.map((link) => renderLink(link))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
