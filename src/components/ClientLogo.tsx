"use client";
import { useState } from "react";

interface ClientLogoProps {
  size?: "sm" | "md";
}

export default function ClientLogo({ size = "md" }: ClientLogoProps) {
  const [error, setError] = useState(false);

  const height = size === "sm" ? "h-8" : "h-10";

  if (!error) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logo-rg.png"
        alt="RG Performance"
        className={`${height} w-auto object-contain`}
        onError={() => setError(true)}
      />
    );
  }

  // CSS fallback
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="w-9 h-9 rounded-lg bg-rg-accent/10 border border-rg-accent/25 flex items-center justify-center flex-shrink-0"
        style={{ boxShadow: "0 0 14px rgba(0,230,118,0.12)" }}
      >
        <span
          className="font-sora font-black text-rg-accent text-lg leading-none"
          style={{ textShadow: "0 0 8px rgba(0,230,118,0.7)" }}
        >
          RG
        </span>
      </div>
      <div className="flex flex-col">
        <span className="font-sora font-bold text-[17px] text-white leading-none tracking-tight">
          performance
        </span>
        <span className="font-manrope text-[9px] text-rg-accent/70 tracking-[0.2em] leading-none mt-0.5 uppercase">
          Assessoria de Marketing
        </span>
      </div>
    </div>
  );
}
