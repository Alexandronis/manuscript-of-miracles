import React from "react";

function WordOfTheDayTab() {
  return (
    <>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#ffcc42] mb-4 font-['Marcellus']"
            style={{ fontWeight: 600 }}
          >
            Word of the Day 🕊️
          </h2>
          <p className="text-[#f5f3ea] text-base sm:text-lg">
            A special message to brighten your day
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 opacity-0"></div>
          <div
            className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-12 border text-center shadow-lg"
            style={{
              background: "rgb(16, 26, 72)",
              borderColor: "rgba(255, 204, 66, 0.4)",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 4px 25px",
              borderRadius: "16px",
              padding: "24px 32px",
            }}
          >
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-6">
                <img
                  src="/ico-man.webp"
                  alt="O Manuscrito Logo"
                  className="w-full h-full object-contain animate-pulse"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h3
                className="text-lg sm:text-2xl md:text-3xl font-bold text-[#ffcc42] leading-relaxed animate-fade-in px-4 font-['Marcellus']"
                style={{ fontWeight: 600 }}
              >
                🌿 What you plant in prayer, you harvest in miracles.
              </h3>
              <div className="w-24 h-1 bg-[#ffcc42] mx-auto rounded-full"></div>
              <p className="text-[#f5f3ea] text-base sm:text-lg italic px-4">
                "May this word touch your heart and illuminate your path today."
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-xl sm:text-2xl mb-2">🙏</div>
                <p className="text-[#b0b5c8] text-xs sm:text-sm">Pray</p>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl mb-2">💖</div>
                <p className="text-[#b0b5c8] text-xs sm:text-sm">Love</p>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl mb-2">✨</div>
                <p className="text-[#b0b5c8] text-xs sm:text-sm">Believe</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
            Word of the Day
          </h2>
          <p className="text-slate-300 text-lg">
            A special message to brighten your day
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-3xl blur-xl"></div>
          <div
            className="relative rounded-3xl p-12 border text-center backdrop-blur-sm"
            style={{
              background: "rgb(16, 26, 72)",
              borderColor: "rgba(255, 204, 66, 0.4)",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 4px 25px",
              borderRadius: "16px",
              padding: "24px 32px",
            }}
          >
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-6 shadow-2xl animate-pulse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star w-10 h-10 text-slate-900"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
            </div>

            <blockquote className="text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 leading-relaxed mb-8 animate-fade-in">
              "🌿 Every prayer is a seed planted in God's heart."
            </blockquote>

            <div className="flex items-center justify-center space-x-2 text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart w-5 h-5 text-yellow-400"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
              <span className="text-sm">Renewed every day with divine love</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart w-5 h-5 text-yellow-400"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { emoji: "🌅", title: "Morning", text: "Start the day with gratitude and renewed faith" },
            { emoji: "🙏", title: "Prayer", text: "Connect with the divine through the word" },
            { emoji: "✨", title: "Miracles", text: "Open your heart to receive the blessings" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl p-6 border text-center backdrop-blur-sm"
              style={{
                background: "rgba(16, 26, 72, 0.5)",
                borderColor: "rgba(255, 204, 66, 0.1)",
                boxShadow: "rgba(0, 0, 0, 0.15) 0px 4px 12px",
              }}
            >
              <div className="text-3xl mb-3">{item.emoji}</div>
              <h3 className="text-yellow-400 font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-300 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WordOfTheDayTab;
