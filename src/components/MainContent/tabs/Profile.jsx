import React from "react";

function ProfileTab() {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4 font-['Marcellus']">
          Your Spiritual Profile
        </h2>
        <p className="text-slate-300 text-lg">Track your transformation journey</p>
      </div>

      <div className="space-y-8">
        {/* Journey Progress */}
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

        {/* Spiritual Messages */}
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

        {/* Support / Download Buttons */}
        <div
          className="rounded-xl p-6 border"
          style={{
            background: "rgb(16, 26, 72)",
            borderColor: "rgba(255, 204, 66, 0.4)",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 4px 25px",
            borderRadius: "16px",
            padding: "24px 32px",
          }}
        >
          <button
            id="contact-support-profile"
            className="w-full bg-[#f6c94c] text-[#0a0a0a] font-semibold py-3 px-4 rounded-lg hover:bg-[#f4d36b] transition-all duration-200 shadow-md"
          >
            Contact Support
          </button>
          <button className="w-full bg-[#f6c94c] text-[#0a0a0a] font-semibold py-3 px-4 rounded-lg hover:bg-[#f4d36b] transition-all duration-200 shadow-md mt-3">
            Download Manuscript (for print)
          </button>
        </div>

        {/* Account Information */}
        <div
          className="rounded-xl p-6 border"
          style={{
            background: "rgb(16, 26, 72)",
            borderColor: "rgba(255, 204, 66, 0.4)",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 4px 25px",
            borderRadius: "16px",
            padding: "24px 32px",
          }}
        >
          <h3
            className="text-xl font-semibold text-[#ffcc42] mb-4 font-['Marcellus']"
            style={{ fontWeight: 600 }}
          >
            Account Information
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-[#b0b5c8]">Email:</span>
              <span className="text-[#e5e8f0]">sasha.speransky@gmail.com</span>
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
