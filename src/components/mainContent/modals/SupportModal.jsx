import React from "react";
import EmailSupportIcon from "../../icons/EmailSupportIcon.jsx";

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
            <span className="text-[#f6c94c] font-semibold text-base sm:text-lg" style={{ fontWeight: 600 }}>
              Email: mofm@divinescripture.org
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

export default SupportModal;
