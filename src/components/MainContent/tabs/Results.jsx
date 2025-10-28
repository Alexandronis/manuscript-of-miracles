import React from "react";
import { StarYellowIcon } from "../../icons/index.jsx";

const testimonials = [
  {
    name: "Sarah Johnson",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    text: "After I started the 12-word prayer, my financial life turned upside down! But now... for the better! 🙏",
  },
  {
    name: "Michael Davis",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    text: "I felt a spiritual force taking over my house with the Water of Lourdes! My family is protected! ✨",
  },
  {
    name: "Jennifer Martinez",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    text: "The Hebrew Prayer unlocked blessings I had been waiting for years. It's real! My debt was paid off in 30 days! 💰",
  },
  {
    name: "David Wilson",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    text: "The Canticle of Saint Michael gave me an inner peace I had never felt. My anxiety disappeared! 🕊️",
  },
  {
    name: "Amanda Thompson",
    image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    text: "I achieved the healing that doctors said was impossible! The Manuscript really works! Glory to God! 🙌",
  },
  {
    name: "Robert Anderson",
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    text: "My business took off after the prosperity rituals! Tripled revenue in 2 months! 📈",
  },
  {
    name: "Lisa Garcia",
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    text: "My family's spiritual protection is shielded! No negative energy affects us anymore! 🛡️",
  },
  {
    name: "Christopher Brown",
    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    text: "I found my soulmate after 3 weeks doing the heart prayers! Love has arrived! ❤️",
  },
];

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
        {testimonials.map((t, index) => (
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
