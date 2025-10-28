import React from "react";
import { StarYellowIcon } from "../../icons/index.jsx";
import { resultsData } from "../../../data/resultsData.js";

function ResultsTab() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
          Real Results
        </h2>
        <p className="text-slate-300 text-lg">
          Testimonials from members who transformed their lives
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resultsData.map((t, index) => (
          <div
            key={index}
            className="rounded-xl p-8 border border-yellow-400/40 backdrop-blur-sm bg-[var(--testimonial-background)] shadow-[0_4px_25px_rgba(0,0,0,0.35)]"
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-white">{t.name}</h4>
                <div className="flex space-x-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <StarYellowIcon className="w-4 h-4" key={i} />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultsTab;
