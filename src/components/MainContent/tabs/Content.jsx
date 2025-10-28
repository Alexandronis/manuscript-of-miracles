import React, { useState } from "react";
import { buttons, modules } from "../../../data/contentData.js";
import WatchedIcon from "../../icons/WatchedIcon.jsx";
import imageAndroid from '../../../assets/android.webp';
import imageIphone from '../../../assets/ios.webp';
import EmailSupportIcon from "../../icons/EmailSupportIcon.jsx";

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
      <ContentModules onOpenStep={handleOpenStep} watchedSteps={watchedSteps} />

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
  return (
    <div className="max-w-2xl mx-auto mb-8 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {buttons.slice(0, 2).map((btn, idx) => {
          const Icon = btn.icon;
          const type = idx === 0 ? "android" : "iphone";
          return (
            <button
              key={idx}
              onClick={() => onOpenInstall(type)}
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
              onClick={onOpenSupport}
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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SupportModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/60">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="support-modal-title"
        className="relative w-full max-w-sm md:max-w-md bg-[#0d163b] rounded-2xl shadow-lg flex flex-col max-h-[85vh] animate-fade-in"
      >
        <div className="sticky top-0 z-10 p-5 md:p-6 border-b border-white/10 bg-[#0d163b] rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-5 md:top-6 right-5 md:right-6 p-2 text-[#d8d5c6] hover:text-[#f5f3ea] transition-colors rounded-lg hover:bg-white/10"
            aria-label="Close modal"
          >
            ✕
          </button>
          <h2
            id="support-modal-title"
            className="text-2xl sm:text-3xl font-bold text-[#f4d36b] pr-10"
          >
            Need Help?
          </h2>
        </div>

        <div className="overflow-y-auto p-5 md:p-6 space-y-4" style={{ overscrollBehavior: "contain" }}>
          <p className="text-[#f5f3ea] text-[17px] leading-relaxed">
            If you have any questions, need assistance, or wish to request a cancellation,
            please contact our support team by email.
          </p>
          <p className="text-[#f5f3ea] text-[17px] leading-relaxed">
            Our service hours are Monday through Friday, from 8:00 AM to 5:00 PM.
          </p>
          <p className="text-[#f5f3ea] text-[17px] leading-relaxed">
            We reply to every message personally — please allow some time for our team to
            respond. Rest assured, we'll get back to you as soon as possible and make
            sure your request is fully resolved.
          </p>
          <div className="pt-2">
            <span className="text-[#f6c94c] font-semibold text-base sm:text-lg">
              Email: contato.suportdesafio@gmail.com
            </span>
          </div>
        </div>

        <div className="sticky bottom-0 z-10 p-5 md:p-6 border-t border-white/10 bg-[#0d163b] rounded-b-2xl">
          <a
            href="mailto:contato.suportdesafio@gmail.com?subject=Support%20Request%20-%20Manuscript%20of%20Miracles"
            className="flex items-center justify-center space-x-2 w-full bg-[#f6c94c] text-[#0a0a0a] font-semibold py-4 px-6 rounded-lg hover:bg-[#f4d36b] transition-all duration-200 shadow-md mb-3"
          >
            <EmailSupportIcon className="lucide lucide-mail w-5 h-5 text-black" /> <span className="text-black">Email Support</span>
          </a>
          <button
            onClick={onClose}
            className="w-full py-3 px-6 text-[#d8d5c6] hover:text-[#f5f3ea] transition-colors rounded-lg hover:bg-white/10 font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function StepModal({ module, stepIndex, onClose, onPrev, onNext }) {
  const step = module.steps[stepIndex];

  const [activeTab, setActiveTab] = useState(
    step.videoUrl && step.pdfUrl ? "video" : step.pdfUrl ? "pdf" : "video"
  );

  const handleDownload = () => {
    const isVideo = activeTab === "video";
    const url = isVideo ? step.videoUrl : step.pdfUrl;

    if (!url) return alert(`No ${isVideo ? "video" : "PDF"} available to download.`);

    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.download = `${step.title || "lesson"}.${isVideo ? "mp4" : "pdf"}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const showTabs = step.videoUrl && step.pdfUrl;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm overflow-y-auto overscroll-contain px-4 py-8"
    >
      <div className="relative mx-auto w-full max-w-5xl bg-[#0d163b] rounded-2xl border border-white/10 shadow-lg max-h-[95vh] flex flex-col animate-fade-in overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-start justify-between sticky top-0 bg-[#0d163b]/95">
          <h3 className="text-xl sm:text-2xl font-bold text-[#f4d36b] leading-snug">
            {step.title}
          </h3>
          <button
            aria-label="Close modal"
            title="Close (Esc)"
            onClick={onClose}
            className="ml-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#f6c94c] hover:bg-[#f4d36b] text-[#0a0a0a] text-xl leading-none transition-all duration-200 hover:rotate-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f6c94c] focus:ring-offset-[#0d163b]"
          >
            ✕
          </button>
        </div>

        {/* PDF / Video tab switcher */}
        {showTabs && (
          <div className="px-4 sm:px-6 pt-4">
            <div className="inline-flex rounded-xl overflow-hidden bg-slate-800 border border-slate-700">
              <button
                onClick={() => setActiveTab("pdf")}
                className={`px-4 py-2 text-sm sm:text-base ${
                  activeTab === "pdf"
                    ? "bg-yellow-400 text-slate-900 font-semibold"
                    : "text-slate-200 hover:bg-slate-700"
                }`}
              >
                📖 PDF
              </button>
              <button
                onClick={() => setActiveTab("video")}
                className={`px-4 py-2 text-sm sm:text-base ${
                  activeTab === "video"
                    ? "bg-yellow-400 text-slate-900 font-semibold"
                    : "text-slate-200 hover:bg-slate-700"
                }`}
              >
                ▶️ Video
              </button>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-0 sm:p-4 flex-1 overflow-y-auto touch-pan-y">
          {activeTab === "video" && step.videoUrl ? (
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
          ) : step.pdfUrl ? (
            <div className="w-full h-[65vh] flex items-center justify-center bg-slate-900 rounded-xl">
              <iframe
                src={step.pdfUrl}
                title="PDF Guide"
                className="w-full h-full rounded-xl"
              />
            </div>
          ) : null}

          <div className="px-4 sm:px-6 pt-4">
            <p className="text-slate-300 text-sm sm:text-base">
              Tap <span className="font-semibold">Play</span> to view inside the app. Prefer to save? Use Download.
            </p>
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

function InstallModal({ type, onClose }) {
  const isAndroid = type === "android";
  const title = isAndroid
    ? "Step 1 — Install on Your Android"
    : "Step 2 — Install on Your iPhone";
  const imageSrc = isAndroid ? imageAndroid : imageIphone;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm overflow-y-auto overscroll-contain px-4 py-8"
    >
      <div className="relative mx-auto w-full max-w-4xl bg-[#0d163b] rounded-2xl border border-white/10 shadow-lg max-h-[95vh] flex flex-col animate-fade-in">
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-start justify-between sticky top-0 bg-[#0d163b]/95">
          <h3 className="text-xl sm:text-2xl font-bold text-[#f4d36b] leading-snug">
            {title}
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

        <div className="p-0 sm:p-4 flex-1 overflow-y-auto touch-pan-y">
          <div className="relative w-full h-[60vh] md:h-[65vh]">
            <img
              src={imageSrc}
              alt={title}
              className="absolute inset-0 w-full h-full object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentTab;
