import React, { useState } from "react";
import { buttons, modules } from "../../../data/contentData.js";
import SupportModal from "../modals/SupportModal.jsx";
import InstallModal from "../modals/InstallModal.jsx";
import StepModal from "../modals/StepModal.jsx";
import WatchedIcon from "../../icons/WatchedIcon.jsx";

function ContentTab({ email }) {
  const storageKey = `watchedSteps_${email}`;

  const [watchedSteps, setWatchedSteps] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : {};
  });

  const [activeModule, setActiveModule] = useState(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [activeInstall, setActiveInstall] = useState(null);
  const [showSupportModal, setShowSupportModal] = useState(false);

  const handleOpenStep = (module, stepIdx) => {
    setActiveModule(module);
    setActiveStepIndex(stepIdx);

    setWatchedSteps((prev) => {
      const updated = {
        ...prev,
        [module.title]: { ...(prev[module.title] || {}), [stepIdx]: true },
      };
      localStorage.setItem(storageKey, JSON.stringify(updated));
      return updated;
    });
  };

  const handleCloseModal = () => {
    setActiveModule(null);
    setActiveStepIndex(0);
  };

  const handleOpenInstall = (type) => setActiveInstall(type);
  const handleCloseInstall = () => setActiveInstall(null);

  const handleOpenSupport = () => setShowSupportModal(true);
  const handleCloseSupport = () => setShowSupportModal(false);

  return (
    <>
      <SectionIntro />
      <InstallButtons onOpenInstall={handleOpenInstall} onOpenSupport={handleOpenSupport} />
      <ContentModules onOpenStep={handleOpenStep} onOpenSupport={handleOpenSupport} watchedSteps={watchedSteps} />

      {activeModule && (
        <StepModal
          module={activeModule}
          stepIndex={activeStepIndex}
          onClose={handleCloseModal}
          onPrev={() => setActiveStepIndex((i) => Math.max(i - 1, 0))}
          onNext={() =>
            setActiveStepIndex((i) => Math.min(i + 1, activeModule.steps.length - 1))
          }
        />
      )}

      {activeInstall && <InstallModal type={activeInstall} onClose={handleCloseInstall} />}

      {showSupportModal && <SupportModal onClose={handleCloseSupport} />}
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

function InstallButtons({ onOpenInstall, onOpenSupport }) {
  const handleDownloadManuscript = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "Manuscript.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-2xl mx-auto mb-8 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {buttons.slice(0, 2).map((btn, idx) => {
          const Icon = btn.icon;
          const type = idx === 0 ? "android" : "iphone";
          return (
            <button
              key={idx}
              onClick={
                btn.fileToDownload
                  ? () => handleDownloadManuscript(btn.fileToDownload)
                  : () => onOpenInstall(type)
              }
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
        const isDownloadButton = btn.fileToDownload;
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
              onClick={isDownloadButton ? () => handleDownloadManuscript(btn.fileToDownload) : onOpenSupport}
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

function ContentModules({ onOpenStep, watchedSteps, onOpenSupport }) {
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
                          <WatchedIcon className="w-5 h-5 text-green-400" />
                        ) : (
                          <div className="w-5 h-5 border-2 border-slate-500 rounded-full"></div>
                        )}
                        <span className="font-medium text-sm sm:text-base">
                          {`${sidx + 1} — ${step.title}`}
                        </span>
                      </div>
                      <span className="text-slate-400 group-hover:text-yellow-400 text-xs sm:text-sm">
                        Open
                      </span>
                    </button>
                  );
                })}
              </div>
              {mod.showSupportButton && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <button
                    onClick={onOpenSupport}
                    className="
                      w-full
                      text-[var(--black)]
                      font-semibold
                      py-3 px-4
                      rounded-xl
                      transition-all duration-200
                      bg-[linear-gradient(135deg,_rgb(255,216,74)_0%,_rgb(255,190,51)_100%)]
                      shadow-[0_4px_12px_rgba(0,0,0,0.25)]
                      hover:shadow-[0_6px_16px_rgba(255,204,66,0.3)]
                      hover:brightness-110
                    "
                  >
                    Contact Support
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContentTab;
