import { useState } from "react";
import logoManuscript from '../assets/manuscript.webp';

export default function AccessForm({ onAccess }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      onAccess(email.trim());
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 animate-fade-in-slow pb-24"
      style={{
        background:
          "radial-gradient(at center top, rgb(24, 36, 88) 0%, rgb(11, 18, 60) 100%) fixed",
      }}
    >
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mb-6">
            <img
              alt="The Manuscript Logo"
              className="w-full h-full object-contain rounded-lg"
              src={logoManuscript}
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#ffcc42] mb-2 font-['Marcellus']">
            The Manuscript
          </h1>
          <p className="text-[#e5e8f0] text-lg font-light">
            Manuscript of Miracles
          </p>
          <p className="text-[#b0b5c8] text-base mt-2">
            For healing and financial miracles
          </p>
        </div>

        <div
          className="rounded-2xl p-6 sm:p-8 shadow-lg border"
          style={{
            background: "rgb(16, 26, 72)",
            borderColor: "rgba(255, 204, 66, 0.4)",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 4px 25px",
          }}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-base font-medium text-[#e5e8f0] mb-2"
              >
                Access Email
              </label>
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your purchase email"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-[#e5e8f0] placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all text-[17px]"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    borderColor: "rgba(255, 204, 66, 0.2)",
                  }}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-black font-semibold py-3 px-4 rounded-xl transition-all duration-200 text-[17px]"
              style={{
                background:
                  "linear-gradient(135deg, rgb(255, 216, 74) 0%, rgb(255, 190, 51) 100%)",
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 3px 10px",
                filter: "brightness(1)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline w-5 h-5 mr-2"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              Access Members Area
            </button>
            <p className="text-[#b0b5c8] text-sm text-center leading-relaxed">
              🌿 Access your sacred materials with peace of mind — this access
              is permanent and secure.
            </p>
          </form>

          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="flex items-center justify-center gap-2 text-[#b0b5c8] text-sm mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-green-400"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              </svg>
              <span>Secure & Lifetime Access</span>
            </div>
            <p className="text-[#b0b5c8]/70 text-xs text-center">
              verified by our Support Team
            </p>
          </div>
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <p className="text-slate-400 text-xs px-4 leading-relaxed">
            © 2025 Manuscript of Miracles | Secure Access | Verified Support
          </p>
          <p className="text-slate-500 text-xs mt-2">
            ✉️ contato.suportdesafio@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
