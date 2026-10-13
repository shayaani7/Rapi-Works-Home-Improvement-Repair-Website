import React, { useId } from "react";

interface LogoProps {
  variant?: "light" | "dark";
  showWordmark?: boolean;
  showTagline?: boolean;
  tagline?: string;
}

export default function Logo({
  variant = "light",
  showWordmark = true,
  showTagline = false,
  tagline,
}: LogoProps) {
  const dark = variant === "dark";

  return (
    <span className="inline-flex items-center gap-2 sm:gap-3 min-w-0">
      <span className="relative shrink-0 w-9 h-9 sm:w-11 sm:h-11" aria-hidden>
        <Mark />
      </span>

      {showWordmark && (
        <span className="leading-none min-w-0">
          <span className="flex items-baseline gap-1 sm:gap-1.5">
            <span
              className={`text-[17px] sm:text-[21px] font-black tracking-tight ${
                dark ? "text-white" : "text-slate-950"
              }`}
            >
              Rapi
              <span className={dark ? "text-slate-200" : "text-slate-800"}>
                Works
              </span>
            </span>
            <span
              className={`text-[9px] sm:text-[10px] font-extrabold tracking-[0.18em] ${
                dark ? "text-brand-300" : "text-brand-700"
              }`}
            >
              KL
            </span>
          </span>
          {showTagline && tagline && (
            <span
              className={`mt-1 hidden sm:block text-[11px] font-medium truncate ${
                dark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              {tagline}
            </span>
          )}
        </span>
      )}
    </span>
  );
}

function Mark() {
  const gradientId = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 48 48"
      className="w-full h-full drop-shadow-sm"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="8" y1="2" x2="42" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0c87eb" />
          <stop offset="1" stopColor="#074786" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill={`url(#${gradientId})`} />
      {/* Roof */}
      <path
        d="M8.5 20.5L24 8L39.5 20.5"
        stroke="white"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Plaster-ceiling L-box */}
      <path
        d="M14 21H34V24.6H17.2V27.2"
        stroke="#f59e0b"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Architectural R */}
      <path
        d="M17 40V26H26.4C30.6 26 33.4 28.5 33.4 32.1C33.4 35 31.5 36.9 28.8 37.4L35 40H30.2L24.8 37.2H21V40H17ZM21 34.4H26.2C28.2 34.4 29.5 33.4 29.5 32.1C29.5 30.8 28.2 29.8 26.2 29.8H21V34.4Z"
        fill="white"
      />
    </svg>
  );
}
