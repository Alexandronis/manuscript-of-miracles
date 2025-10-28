import React from "react";
import logo from '../../../assets/manuscript.webp';
import {HeartYellowIcon, StarCircleIcon} from "../../icons/index.jsx";

function WordOfTheDayTab() {
  return (
    <>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-2xl sm:text-3xl text-[var(--gold)] mb-4"
            style={{ fontWeight: 600 }}
          >
            Word of the Day 🕊️
          </h2>
          <p className="text-[var(--word-white)] text-base sm:text-lg">
            A special message to brighten your day
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 opacity-0"></div>
          <div
            className="
              relative
              rounded-[16px]
              py-6 px-8
              border border-[rgba(255,204,66,0.4)]
              bg-[rgb(16,26,72)]
              shadow-[0_4px_25px_rgba(0,0,0,0.35)]
              text-center
            "
          >
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-6">
                <img
                  src={logo}
                  alt="O Manuscrito Logo"
                  className="w-full h-full object-contain animate-pulse"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h3
                className="text-lg sm:text-2xl md:text-3xl text-[var(--gold)] leading-relaxed animate-fade-in px-4"
                style={{fontWeight: 600}}
              >
                🌿 What you plant in prayer, you harvest in miracles.
              </h3>
              <div className="w-24 h-1 bg-[var(--gold)] mx-auto rounded-full"></div>
              <p className="text-[var(--word-white)] text-base sm:text-lg italic px-4">
                "May this word touch your heart and illuminate your path today."
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-xl sm:text-2xl mb-2">🙏</div>
                <p className="text-[var(--text-muted)] text-xs sm:text-sm">Pray</p>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl mb-2">💖</div>
                <p className="text-[var(--text-muted)] text-xs sm:text-sm">Love</p>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl mb-2">✨</div>
                <p className="text-[var(--text-muted)] text-xs sm:text-sm">Believe</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12">
        <div className="text-center mb-12">
          <h2
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
            Word of the Day
          </h2>
          <p className="text-slate-300 text-lg">
            A special message to brighten your day
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-3xl blur-xl"></div>
          <div
            className="
              relative
              rounded-[16px]
              py-6 px-8
              border border-[rgba(255,204,66,0.4)]
              bg-[rgb(16,26,72)]
              shadow-[0_4px_25px_rgba(0,0,0,0.35)]
              text-center
              backdrop-blur-sm
            "
          >
            <div className="mb-8">
              <div
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-6 shadow-2xl animate-pulse">
                <StarCircleIcon className="lucide lucide-star w-10 h-10 text-slate-900" />
              </div>
            </div>

            <blockquote
              className="text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 leading-relaxed mb-8 animate-fade-in">
              "🌿 Every prayer is a seed planted in God's heart."
            </blockquote>

            <div className="flex items-center justify-center space-x-2 text-slate-400">
              <HeartYellowIcon className="lucide lucide-heart w-5 h-5 text-yellow-400" />
              <span className="text-sm">Renewed every day with divine love</span>
              <HeartYellowIcon className="lucide lucide-heart w-5 h-5 text-yellow-400" />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {emoji: "🌅", title: "Morning", text: "Start the day with gratitude and renewed faith"},
            {emoji: "🙏", title: "Prayer", text: "Connect with the divine through the word"},
            { emoji: "✨", title: "Miracles", text: "Open your heart to receive the blessings" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="
                rounded-[16px]
                py-6 px-8
                border border-[rgba(255,204,66,0.1)]
                bg-[rgba(16,26,72,0.5)]
                shadow-[0_4px_12px_rgba(0,0,0,0.15)]
                text-center
                backdrop-blur-sm
              "
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
