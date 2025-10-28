import React, { useState } from "react";
import { buttons, modules } from "../../../data/contentData.js";

function ContentTab() {
  const [activeModule, setActiveModule] = useState(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [watchedSteps, setWatchedSteps] = useState({});

  const handleOpenStep = (module, stepIdx) => {
    setActiveModule(module);
    setActiveStepIndex(stepIdx);

    setWatchedSteps((prev) => ({
      ...prev,
      [module.title]: { ...(prev[module.title] || {}), [stepIdx]: true },
    }));
  };

  const handleCloseModal = () => {
    setActiveModule(null);
    setActiveStepIndex(0);
  };

  return (
    <>
      <SectionIntro />
      <InstallButtons />
      <ContentModules onOpenStep={handleOpenStep} watchedSteps={watchedSteps} />

      {activeModule && (
        <VideoModal
          module={activeModule}
          stepIndex={activeStepIndex}
          onClose={handleCloseModal}
          onPrev={() => setActiveStepIndex((i) => Math.max(i - 1, 0))}
          onNext={() =>
            setActiveStepIndex((i) =>
              Math.min(i + 1, activeModule.steps.length - 1)
            )
          }
        />
      )}
    </>
  );
}

function SectionIntro() {
  return (
    <div className="text-center mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-[var(--gold)] mb-4">
        Your Sacred Contents
      </h2>
      <p className="text-[var(--text-secondary)] text-[17px] leading-relaxed">
        Tap a lesson below to read or watch inside the app.
      </p>
    </div>
  );
}

function InstallButtons() {
  return (
    <div className="max-w-2xl mx-auto mb-8 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {buttons.slice(0, 2).map((btn, idx) => {
          const Icon = btn.icon;
          return (
            <button
              key={idx}
              className="
                w-full inline-flex items-center justify-center gap-2
                font-semibold
                py-3 px-4
                rounded-xl
                text-[var(--black)]
                transition-all duration-200
                bg-[linear-gradient(135deg,_rgb(255,216,74)_0%,_rgb(255,190,51)_100%)]
                shadow-[0_3px_10px_rgba(0,0,0,0.25)]
                brightness-100
                hover:shadow-[0_6px_16px_rgba(255,204,66,0.3)]
                hover:brightness-110
              "
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
              className="
                w-full inline-flex items-center justify-center gap-2
                font-semibold py-3 px-4 rounded-xl
                text-[var(--black)]
                transition-all duration-200
                bg-[linear-gradient(135deg,_rgb(255,216,74)_0%,_rgb(255,190,51)_100%)]
                shadow-[0_4px_12px_rgba(0,0,0,0.25)]
                brightness-100
                hover:shadow-[0_6px_16px_rgba(255,204,66,0.3)]
                hover:brightness-110
              "
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

function ContentModules({ onOpenStep, watchedSteps }) {
  return (
    <div className="space-y-8">
      {modules.map((mod, idx) => (
        <div
          key={idx}
          className="
            rounded-[16px]
            px-8 py-6
            border border-[rgba(255,204,66,0.4)]
            bg-[rgb(16,26,72)]
            shadow-[0_4px_25px_rgba(0,0,0,0.35)]
            transition-all duration-200
          "
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
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--gold)] mb-4">
                {mod.title}
              </h3>
              <div className="space-y-3">
                {mod.steps.map((step, sidx) => {
                  const watched = watchedSteps?.[mod.title]?.[sidx];
                  return (
                    <button
                      key={sidx}
                      onClick={() => onOpenStep(mod, sidx)}
                      className="flex items-center justify-between w-full p-3 sm:p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-200 group"
                    >
                      <div className="flex items-center space-x-3">
                        {watched ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5 text-green-400"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <path d="m9 11 3 3L22 4" />
                          </svg>
                        ) : (
                          <div className="w-5 h-5 border-2 border-slate-500 rounded-full"></div>
                        )}
                        <span className="font-medium text-sm sm:text-base">
                          {step.title}
                        </span>
                      </div>
                      <span className="text-slate-400 group-hover:text-yellow-400 text-xs sm:text-sm">
                        Open
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function VideoModal({ module, stepIndex, onClose, onPrev, onNext }) {
  const step = module.steps[stepIndex];

  const handleDownload = () => {
    if (!step.videoUrl) return alert("No video URL available to download.");

    const link = document.createElement("a");
    link.href = step.videoUrl;
    link.target = "_blank";
    link.download = `${step.title || "video"}.mp4`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm overflow-y-auto overscroll-contain px-4 py-8"
    >
      <div
        className="relative mx-auto w-full max-w-4xl bg-[#0d163b] rounded-2xl
        border border-white/10 shadow-lg max-h-[95vh] flex flex-col animate-fade-in overflow-hidden"
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-start justify-between sticky top-0 bg-[#0d163b]/95">
          <h3 className="text-xl sm:text-2xl font-bold text-[#f4d36b] leading-snug">
            {step.title}
          </h3>
          <button
            aria-label="Close modal"
            title="Close (Esc)"
            onClick={onClose}
            className="ml-4 inline-flex items-center justify-center w-10 h-10 rounded-full
            bg-[#f6c94c] hover:bg-[#f4d36b] text-[#0a0a0a] text-xl leading-none
            transition-all duration-200 hover:rotate-90 focus:outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-[#f6c94c] focus:ring-offset-[#0d163b]"
          >
            ✕
          </button>
        </div>

        {/* Video */}
        <div className="p-0 sm:p-4 flex-1 overflow-y-auto touch-pan-y">
          <div className="relative w-full h-[60vh] md:h-[65vh]">
            <iframe
              src={`${step.videoUrl}?rel=0&modestbranding=1&controls=1`}
              title={step.title}
              className="absolute inset-0 w-full h-full rounded-xl"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Buttons */}
          <div className="p-4 sm:p-6 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={onPrev}
                disabled={stepIndex === 0}
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-semibold py-3 rounded-xl disabled:opacity-50"
              >
                ⏮ Back
              </button>
              <button
                onClick={onNext}
                disabled={stepIndex === module.steps.length - 1}
                className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 rounded-xl disabled:opacity-50"
              >
                ⏭ Next
              </button>
            </div>

            <button
              onClick={handleDownload}
              className="block w-full text-center bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded-xl"
            >
              📥 Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentTab;
