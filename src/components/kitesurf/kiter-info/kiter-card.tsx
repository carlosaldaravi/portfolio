"use client";

import { useCallback, useContext, useRef, useState } from "react";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import { MY_NAME } from "@/constants/constants";
import { THEMES_TYPES } from "@/types/themes";
import ThemeContext from "@/store/theme-context";
import SVG from "@/components/svg";
import Link from "next/link";
import Section from "@/components/UI/section";

export interface MeData {
  id: string;
  value: string;
}

interface KiterCardProps {
  me: MeData[];
  src: string;
}

const KiterCard = ({ me, src }: KiterCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const themeCtx = useContext(ThemeContext);
  const isDark = themeCtx.theme === THEMES_TYPES.dark;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 8;
    const rotateX = ((centerY - e.clientY) / (rect.height / 2)) * 8;
    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY });
    setGlare({ x: glareX, y: glareY, opacity: 0.15 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
    setIsHovered(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const renderValue = (value: string) => {
    if (value.includes("icon")) {
      const iconName = value.replace("icon-", "");
      return (
        <Link
          href="/curriculum"
          className="inline-flex items-center gap-3 px-6 py-2.5 bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <span className="text-lg sm:text-xl font-semibold">
            <FormattedMessage id="show" />
          </span>
          <SVG type={iconName} size="w-5 h-5 sm:w-6 sm:h-6" />
        </Link>
      );
    }
    return <FormattedMessage id={value} />;
  };

  return (
    <Section className="mt-16 animate-appear-1">
      {/* Avatar */}
      <div
        className="w-64 sm:w-80 mx-auto"
        style={{ filter: "drop-shadow(0 0 10px rgba(0, 0, 0, 1))" }}
      >
        <Image
          src={src}
          alt={MY_NAME}
          width={600}
          height={800}
          className="w-full"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F/PQAJpAN42RTZKQAAAABJRU5ErkJggg=="
        />
      </div>

      {/* Card 3D */}
      <div style={{ perspective: "1200px" }} className="mt-12">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          className="relative overflow-hidden rounded-2xl transition-transform duration-300 ease-out"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Glass bg */}
          <div
            className={`absolute inset-0 rounded-2xl ${
              isDark
                ? "bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.12]"
                : "bg-gradient-to-br from-black/[0.04] to-black/[0.01] border border-black/[0.08]"
            }`}
            style={{ backdropFilter: "blur(20px)" }}
          />

          {/* Glare */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 60%)`,
            }}
          />

          {/* Shimmer */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
            style={{
              opacity: isHovered ? 0.4 : 0,
              background: `linear-gradient(${105 + tilt.y * 3}deg, transparent 20%, rgba(120, 200, 255, 0.1) 40%, rgba(200, 120, 255, 0.08) 50%, rgba(255, 180, 120, 0.06) 60%, transparent 80%)`,
            }}
          />

          {/* Content */}
          <div
            className="relative z-10 p-6 sm:p-10"
            style={{
              transform: `translateZ(${isHovered ? 20 : 0}px)`,
              transition: "transform 0.4s ease-out",
            }}
          >
            <h2
              className={`text-center text-4xl sm:text-6xl tracking-xs mb-6 sm:mb-8 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {MY_NAME}
            </h2>

            <div className="mx-auto w-fit flex flex-col gap-4 sm:gap-5">
              {me.map((data) => (
                <div
                  key={data.id}
                  className="flex items-center gap-6 sm:gap-10"
                >
                  <span
                    className={`uppercase tracking-xxs text-sm sm:text-xl w-32 sm:w-52 shrink-0 text-right ${
                      isDark ? "text-white/50" : "text-black/45"
                    }`}
                  >
                    <FormattedMessage id={data.id} />
                  </span>
                  <span
                    className={`text-xl sm:text-3xl ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {renderValue(data.value)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom line */}
          <div
            className={`absolute bottom-0 left-[10%] right-[10%] h-px ${
              isDark
                ? "bg-gradient-to-r from-transparent via-white/20 to-transparent"
                : "bg-gradient-to-r from-transparent via-black/10 to-transparent"
            }`}
          />
        </div>
      </div>
    </Section>
  );
};

export default KiterCard;
