import React from "react";
import { CheckIcon } from "../../icons/index.jsx";

function WelcomePopup() {
  return (
    <div className="fixed top-4 right-4 z-[10000] animate-fade-in">
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-green-400/30 backdrop-blur-sm">
        <CheckIcon className="lucide lucide-check-circle w-5 h-5" />
        <span className="font-medium">
          Welcome back! Your spiritual materials are safely loaded.
        </span>
      </div>
    </div>
  );
}

export default WelcomePopup;
