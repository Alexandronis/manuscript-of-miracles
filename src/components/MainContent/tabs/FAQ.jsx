import React from "react";
import { faqData } from "../../../data/faqData";

function FAQTab() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-300 text-lg">
          Answers to the main questions about the Manuscript of Miracles
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="
              rounded-[16px]
              px-8 py-6
              border border-[rgba(255,204,66,0.4)]
              bg-[rgb(16,26,72)]
              shadow-[0_4px_25px_rgba(0,0,0,0.35)]
              backdrop-blur-sm
            "
          >
            <h3 className="text-lg font-semibold text-yellow-400 mb-3">
              {item.question}
            </h3>
            <p className="text-slate-300 leading-relaxed">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQTab;
