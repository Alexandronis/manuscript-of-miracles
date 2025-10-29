import React, { useState } from "react";

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

export default StepModal;
