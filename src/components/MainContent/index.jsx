import React, { useState } from "react";
import logo from '../../assets/manuscript.webp';
import FAQTab from "./tabs/FAQ.jsx";
import ResultsTab from "./tabs/Results.jsx";
import WordOfTheDayTab from "./tabs/WordOfTheDay.jsx";
import ProfileTab from './tabs/Profile.jsx';
import ContentTab from './tabs/Content.jsx';
import {
  BookIcon,
  HelpCircleIcon,
  StarIcon,
  HeartIcon,
  UserIcon,
  LogOutIcon,
} from "../icons/index.jsx";

export default function MainContent({ onLogout }) {
  return (
    <div
      className="min-h-screen animate-fade-in-slow pb-24"
      style={{
        background:
          "radial-gradient(at center top, rgb(24, 36, 88) 0%, rgb(11, 18, 60) 100%) fixed",
      }}
    >
      <Header onLogout={onLogout} />
      <NavTabs />
    </div>
  );
}

function Header({ onLogout }) {
  const email = "sasha.speransky@gmail.com"; // replace if dynamic
  return (
    <header className="bg-[#0b123c]/95 border-b border-[#ffcc42]/20 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-10 h-10">
              <img
                src={logo}
                alt="The Manuscript Logo"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <h1
              className="text-xl font-bold text-[#ffcc42] font-['Marcellus']"
              style={{ fontWeight: 600 }}
            >
              Manuscript of Miracles
            </h1>
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-[#e5e8f0] text-sm hidden sm:inline">
              {email}
            </span>
            <button
              onClick={onLogout}
              className="flex items-center space-x-1 sm:space-x-2 text-[#b0b5c8] hover:text-[#e5e8f0] transition-colors"
            >
              <LogOutIcon className="w-4 h-4" />
              <span className="text-sm hidden sm:inline text-[#e5e8f0]">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavTabs() {
  const tabs = [
    { label: "CONTENT", icon: BookIcon },
    { label: "FAQ", icon: HelpCircleIcon },
    { label: "RESULTS", icon: StarIcon },
    { label: "WORD OF THE DAY 🕊️", icon: HeartIcon },
    { label: "PROFILE", icon: UserIcon },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <nav className="bg-[#0b123c] border-b border-[#ffcc42]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-2 sm:space-x-8 overflow-x-auto">
            {tabs.map((tab, idx) => {
              const Icon = tab.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center space-x-1 sm:space-x-2 py-4 px-2 sm:px-3 transition-colors whitespace-nowrap ${
                    activeTab === idx
                      ? "text-[#ffcc42] border-b-2 border-[#ffcc42]"
                      : "text-[#ffffff] hover:opacity-80 border-b-2 border-transparent"
                  }`}
                >
                  <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="font-medium text-xs sm:text-sm text-[#ffffff]">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {activeTab === 0 && <ContentTab />}
        {activeTab === 1 && <FAQTab />}
        {activeTab === 2 && <ResultsTab />}
        {activeTab === 3 && <WordOfTheDayTab />}
        {activeTab === 4 && <ProfileTab />}
      </main>
    </>
  );
}
