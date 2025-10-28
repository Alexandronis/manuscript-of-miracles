import React from "react";
import {
  HelpCircleIcon,
  SmartphoneIcon,
  AppleIcon,
  DownloadIcon,
} from "../../icons/index.jsx";

function ContentTab() {
  return (
    <>
      <SectionIntro />
      <InstallButtons />
      <ContentModules />
    </>
  );
}

function SectionIntro() {
  return (
    <div className="text-center mb-12">
      <h2
        className="text-2xl sm:text-3xl font-bold text-[#ffcc42] mb-4"
        style={{ fontWeight: 600 }}
      >
        Your Sacred Contents
      </h2>
      <p className="text-[#c8ccdf] text-[17px] leading-relaxed">
        Tap a lesson below to read or watch inside the app.
      </p>
    </div>
  );
}

function InstallButtons() {
  const buttons = [
    { label: "Install for Android", icon: SmartphoneIcon },
    { label: "Install for iPhone", icon: AppleIcon },
    { label: "Contact Support", icon: HelpCircleIcon },
    { label: "Download Manuscript (for print)", icon: DownloadIcon },
  ];
  return (
    <div className="max-w-2xl mx-auto mb-8 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {buttons.slice(0, 2).map((btn, idx) => {
          const Icon = btn.icon;
          return (
            <button
              key={idx}
              className="w-full inline-flex items-center justify-center gap-2 font-semibold py-3 px-4 rounded-xl transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, rgb(255, 216, 74) 0%, rgb(255, 190, 51) 100%)",
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 3px 10px",
                color: "#000",
              }}
            >
              <Icon className="w-5 h-5" />
              {btn.label}
            </button>
          );
        })}
      </div>
      <p className="text-center text-slate-400 text-sm mt-3">
        Tap the button for your phone. The step-by-step video opens inside the app.
      </p>
      {buttons.slice(2).map((btn, idx) => {
        const Icon = btn.icon;
        return (
          <div className="mt-4" key={idx}>
            <button
              className="w-full inline-flex items-center justify-center gap-2 font-semibold py-3 px-4 rounded-xl transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, rgb(255, 216, 74) 0%, rgb(255, 190, 51) 100%)",
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 12px",
                color: "#000",
                filter: "brightness(1)",
              }}
            >
              <Icon className="w-5 h-5" />
              {btn.label}
            </button>
          </div>
        );
      })}
    </div>
  );
}

function ContentModules() {
  const modules = [
    {
      title: "Module 1 — How to Use the Manuscript of Miracles — The Beginning",
      img: "/pt1.webp",
      steps: [
        "1 - Step 1 — Important Video",
        "2 - Step 2 — Your Daily Habit",
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {modules.map((mod, idx) => (
        <div
          key={idx}
          className="rounded-2xl p-6 border transition-all duration-200 shadow-md"
          style={{
            background: "rgb(16, 26, 72)",
            borderColor: "rgba(255, 204, 66, 0.4)",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 4px 25px",
            borderRadius: "16px",
            padding: "24px 32px",
          }}
        >
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/3">
              <img
                src={mod.img}
                alt={mod.title}
                className="w-full aspect-square object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:w-2/3">
              <h3
                className="text-xl sm:text-2xl font-bold text-[#ffcc42] mb-4 font-['Marcellus']"
                style={{ fontWeight: 600 }}
              >
                {mod.title}
              </h3>
              <div className="space-y-3">
                {mod.steps.map((step, sidx) => (
                  <button
                    key={sidx}
                    className="flex items-center justify-between w-full p-3 sm:p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-200 group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 border-2 border-slate-500 rounded-full"></div>
                      <span className="text-[#e5e8f0] font-medium text-sm sm:text-base">
                        {step}
                      </span>
                    </div>
                    <span className="text-slate-400 group-hover:text-yellow-400 text-xs sm:text-sm">
                      Open
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContentTab;
