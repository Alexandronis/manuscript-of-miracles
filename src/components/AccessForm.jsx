import { useState } from "react";
import logoManuscript from '../assets/manuscript.webp';
import { EmailIcon, LockIcon, ShieldIcon} from './icons';

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
      className="
        min-h-screen
        flex items-center justify-center
        p-4 pb-24
        animate-fade-in-slow
        bg-[radial-gradient(at_center_top,_rgb(24,36,88)_0%,_rgb(11,18,60)_100%)_fixed]
      "
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
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-[var(--gold)]">
            The Manuscript
          </h1>
          <p className="text-lg font-light">
            Manuscript of Miracles
          </p>
          <p className="text-[var(--text-muted)] text-base mt-2">
            For healing and financial miracles
          </p>
        </div>

        <div
          className="
            rounded-[16px]
            py-6 px-6 sm:py-8 sm:px-8
            border border-[rgba(255,204,66,0.4)]
            bg-[rgb(16,26,72)]
            shadow-[0_4px_25px_rgba(0,0,0,0.35)]
          "
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-base font-medium mb-2"
              >
                Access Email
              </label>
              <div className="relative">
                <EmailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400"/>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your purchase email"
                  required
                  className="
                    w-full
                    pl-10 pr-4 py-3
                    rounded-lg
                    placeholder-slate-400
                    focus:outline-none focus:ring-2 focus:border-transparent
                    transition-all
                    bg-[rgba(255,255,255,0.05)]
                  "
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[var(--profile-button-background)] text-[var(--profile-button-text)] py-3 px-4 rounded-lg hover:bg-[var(--profile-button-background-hover)] transition-all duration-200 shadow-md"
            >
              <LockIcon className="inline w-5 h-5 mr-2"/>
              <span className="!font-semibold">Access Members Area</span>
            </button>
            <p className="text-[var(--text-muted)] text-sm text-center leading-relaxed">
              🌿 Access your sacred materials with peace of mind — this access
              is permanent and secure.
            </p>
          </form>

          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="flex items-center justify-center gap-2 text-[var(--text-muted)] text-sm mb-2">
              <ShieldIcon className="w-4 h-4 text-green-400"/>
              <span className="text-[var(--text-light)]">Secure & Lifetime Access</span>
            </div>
            <p className="text-[var(--text-muted)]/70 text-xs text-center">
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
