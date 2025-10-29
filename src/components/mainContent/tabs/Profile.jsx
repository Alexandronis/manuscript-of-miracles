import React, { useEffect, useState } from "react";
import SupportModal from "../modals/SupportModal.jsx";
import { fileToDownloadUrl, profileData } from "../../../data/profileData.js";
import { modules } from "../../../data/contentData.js";

function ProfileTab({ email }) {
  const storageKey = `watchedSteps_${email}`;
  const [watchedCount, setWatchedCount] = useState(0);
  const totalSteps = modules.reduce((sum, mod) => sum + mod.steps.length, 0);
  const percentage = Math.floor((watchedCount / totalSteps) * 100);

  const [showSupportModal, setShowSupportModal] = useState(false);
  const handleOpenSupport = () => setShowSupportModal(true);
  const handleCloseSupport = () => setShowSupportModal(false);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const watchedSteps = JSON.parse(saved);
      let count = 0;
      Object.values(watchedSteps).forEach((mod) => {
        count += Object.keys(mod).length;
      });
      setWatchedCount(count);
    }
  }, [storageKey]);

  const handleDownloadManuscript = () => {
    const link = document.createElement("a");
    link.href = fileToDownloadUrl;
    link.download = "Manuscript.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
            Your Spiritual Profile
          </h2>
          <p className="text-slate-300 text-lg">Track your transformation journey</p>
        </div>

        <div className="space-y-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Journey Progress</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Contents accessed</span>
                <span className="text-yellow-400 font-semibold">{watchedCount} / {totalSteps}</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <p className="text-slate-400 text-sm">
                ✨ You have completed {percentage}% of your spiritual journey.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Spiritual Messages</h3>
            <div className="space-y-4">
              {profileData.map((msg, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-4 bg-slate-700/50 rounded-lg">
                  <span className="text-2xl">{msg.emoji}</span>
                  <p className="text-slate-300">{msg.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[16px] px-8 py-6 border border-[rgba(255,204,66,0.4)] bg-[rgb(16,26,72)] shadow-[0_4px_25px_rgba(0,0,0,0.35)]">
            <button
              id="contact-support-profile"
              className="w-full bg-[var(--profile-button-background)] text-[var(--profile-button-text)] py-3 px-4 rounded-lg hover:bg-[var(--profile-button-background-hover)] transition-all duration-200 shadow-md"
              onClick={handleOpenSupport}
              style={{ fontWeight: 600 }}
            >
              Contact Support
            </button>
            <button
              className="w-full bg-[var(--profile-button-background)] text-[var(--profile-button-text)] py-3 px-4 rounded-lg hover:bg-[var(--profile-button-background-hover)] transition-all duration-200 shadow-md mt-3"
              onClick={() => handleDownloadManuscript()}
              style={{ fontWeight: 600 }}
            >
              Download Manuscript (for print)
            </button>
          </div>

          <div className="rounded-[16px] px-8 py-6 border border-[rgba(255,204,66,0.4)] bg-[rgb(16,26,72)] shadow-[0_4px_25px_rgba(0,0,0,0.35)]">
            <h3 className="text-xl font-semibold text-[var(--gold)] mb-4">
              Account Information
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-[var(--text-muted)]">Email:</span>
                <span>{email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Status:</span>
                <span className="text-yellow-400 font-semibold">Premium ⭐</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showSupportModal && <SupportModal onClose={handleCloseSupport} />}
    </>
  );
}

export default ProfileTab;
