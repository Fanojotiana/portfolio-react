import React, { useState, useEffect } from "react";
import TextType from "./TextType";

const WelcomeSplash = ({ onFinish }) => {
  useEffect(() => {
    // Si tu veux fermer l'écran après un temps total, par sécurité
    const timeout = setTimeout(() => {
      onFinish();
    }, 7000); // 7s total (ajuster selon le texte et les pauses)
    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-slate-800 to-gray-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated rays/lines background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(99, 102, 241, 0.15) 2px, rgba(99, 102, 241, 0.15) 4px)",
            animation: "slide 20s linear infinite",
          }}
        ></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/30 rounded-full filter blur-[120px] animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full filter blur-[120px] animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Geometric decoration - top left */}
      <div className="absolute top-12 left-12 w-24 h-24 border-l-2 border-t-2 border-indigo-500/40"></div>
      <div className="absolute top-16 left-16 w-16 h-16 border-l border-t border-indigo-400/30"></div>

      {/* Geometric decoration - bottom right */}
      <div className="absolute bottom-12 right-12 w-24 h-24 border-r-2 border-b-2 border-purple-500/40"></div>
      <div className="absolute bottom-16 right-16 w-16 h-16 border-r border-b border-purple-400/30"></div>

      {/* Scanline effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)",
          backgroundSize: "100% 4px",
        }}
      ></div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-8">
        {/* Decorative top line */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-indigo-500"></div>
          <div className="mx-4 flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>
            <div
              className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-indigo-500"></div>
        </div>

        {/* Text container with premium glass effect */}
        <div className="relative group">
          {/* Glow effect behind */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition duration-1000"></div>

          {/* Main card */}
          <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl px-8 py-12 md:px-16 md:py-16">
            {/* Inner glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5"></div>

            {/* Content */}
            <div className="relative">
              <TextType
                text={[
                  "Welcome to my portfolio !",
                  "I'm Fanojotiana R.",
                  "Fullstack Web Developer",
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 text-3xl md:text-5xl lg:text-6xl text-center font-bold tracking-tight leading-tight"
              />
            </div>

            {/* Shimmer effect overlay */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] animate-[shimmer_3s_infinite]"></div>
            </div>
          </div>
        </div>

        {/* Decorative bottom line */}
        <div className="flex items-center justify-center mt-8">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>
      </div>

      {/* Floating dots decoration */}
      <div className="absolute top-1/3 left-[15%] w-1 h-1 bg-indigo-400 rounded-full animate-ping"></div>
      <div
        className="absolute top-[45%] left-[20%] w-1 h-1 bg-purple-400 rounded-full animate-ping"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute top-[60%] right-[18%] w-1 h-1 bg-pink-400 rounded-full animate-ping"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-[35%] right-[22%] w-1 h-1 bg-indigo-400 rounded-full animate-ping"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-20deg);
          }
          100% {
            transform: translateX(200%) skewX(-20deg);
          }
        }
        @keyframes slide {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }
      `}</style>
    </div>
  );
};

export default WelcomeSplash;
