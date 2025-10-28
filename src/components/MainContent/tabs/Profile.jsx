import React from "react";

function ProfileTab() {
  return (
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
              <span className="text-yellow-400 font-semibold">1 / 31</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-3 rounded-full transition-all duration-500"
                style={{ width: "3%" }}
              ></div>
            </div>
            <p className="text-slate-400 text-sm">
              ✨ You have completed 3% of your spiritual journey.
            </p>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">Spiritual Messages</h3>
          <div className="space-y-4">
            {[
              { emoji: "🔥", text: "Stay strong. Miracles are near." },
              { emoji: "🕊️", text: "Your faith is growing with each day of practice." },
              { emoji: "⭐", text: "You are a channel of divine blessings." },
            ].map((msg, idx) => (
              <div key={idx} className="flex items-center space-x-3 p-4 bg-slate-700/50 rounded-lg">
                <span className="text-2xl">{msg.emoji}</span>
                <p className="text-slate-300">{msg.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="
            rounded-[16px]
            px-8 py-6
            border
            border-[rgba(255,204,66,0.4)]
            bg-[rgb(16,26,72)]
            shadow-[0_4px_25px_rgba(0,0,0,0.35)]
          "
        >
          <button
            id="contact-support-profile"
            className="w-full bg-[var(--profile-button-background)] text-[var(--profile-button-text)] py-3 px-4 rounded-lg hover:bg-[var(--profile-button-background-hover)] transition-all duration-200 shadow-md"
            style={{ fontWeight: 600 }}
          >
            Contact Support
          </button>
          <button
            className="w-full bg-[var(--profile-button-background)] text-[var(--profile-button-text)] py-3 px-4 rounded-lg hover:bg-[var(--profile-button-background-hover)] transition-all duration-200 shadow-md mt-3"
            style={{ fontWeight: 600 }}
          >
            Download Manuscript (for print)
          </button>
        </div>

        <div
          className="
            rounded-[16px]
            px-8 py-6
            border
            border-[rgba(255,204,66,0.4)]
            bg-[rgb(16,26,72)]
            shadow-[0_4px_25px_rgba(0,0,0,0.35)]
          "
        >
          <h3 className="text-xl font-semibold text-[var(--gold)] mb-4">
            Account Information
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-[var(--text-muted)]">Email:</span>
              <span>sasha.speransky@gmail.com</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Status:</span>
              <span className="text-yellow-400 font-semibold">Premium ⭐</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileTab;
