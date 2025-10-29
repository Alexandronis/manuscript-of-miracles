import React from "react";
import imageAndroid from "../../../assets/android.webp";
import imageIphone from "../../../assets/ios.webp";

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

export default InstallModal;
