"use client";

import { useCallback, useContext, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import { MY_NAME } from "@/constants/constants";
import { THEMES_TYPES } from "@/types/themes";
import ThemeContext from "@/store/theme-context";
import SVG from "@/components/svg";
import Link from "next/link";
import Section from "@/components/UI/section";
import { useLocaleRouter } from "@/hooks/useLocaleRouter";

export interface MeData {
  id: string;
  value: string;
}

interface FlipTarget {
  me: MeData[];
  src: string;
  href: string;
  label: string;
}

interface KiterCardProps {
  me: MeData[];
  src: string;
  flipTarget?: FlipTarget;
}

const FLIP_DURATION = 1000;

const KiterCard = ({ me, src, flipTarget }: KiterCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const themeCtx = useContext(ThemeContext);
  const isDark = themeCtx.theme === THEMES_TYPES.dark;
  const router = useRouter();
  const { locale } = useLocaleRouter();

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isFlipped) return;
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
  }, [isFlipped]);

  const handleMouseLeave = useCallback(() => {
    if (isFlipped) return;
    setTilt({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
    setIsHovered(false);
  }, [isFlipped]);

  const handleMouseEnter = useCallback(() => {
    if (!isFlipped) setIsHovered(true);
  }, [isFlipped]);

  const handleFlip = useCallback(() => {
    if (!flipTarget || isNavigating) return;
    setIsNavigating(true);
    setTilt({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
    setIsHovered(false);
    setIsFlipped(true);

    const body = document.body;
    const targetPath = locale === "es" ? flipTarget.href : `/${locale}${flipTarget.href}`;

    // Phase 1: card flips + avatar crossfades (600ms)
    // Phase 2: page fades out (starts at 40% of flip)
    setTimeout(() => {
      body.style.transition = "opacity 500ms ease-in";
      body.style.opacity = "0";
    }, FLIP_DURATION * 0.4);

    // Phase 3: navigate while invisible, then fade in
    setTimeout(() => {
      window.scrollTo({ top: 0 });
      router.push(targetPath);

      // Wait for next paint after navigation, then fade in
      setTimeout(() => {
        body.style.transition = "opacity 600ms ease-out";
        body.style.opacity = "1";
        setTimeout(() => {
          body.style.transition = "";
        }, 600);
      }, 100);
    }, FLIP_DURATION + 300);
  }, [flipTarget, isNavigating, locale, router]);

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

  const glassClasses = isDark
    ? "bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.12]"
    : "bg-gradient-to-br from-black/[0.04] to-black/[0.01] border border-black/[0.08]";

  const renderCardFace = (faceMe: MeData[], isFront: boolean) => (
    <div
      className={`${isFront ? "" : "absolute inset-0"} rounded-2xl overflow-hidden`}
      style={{
        backfaceVisibility: "hidden",
        transform: isFront ? "rotateY(0deg)" : "rotateY(180deg)",
      }}
    >
      <div
        className={`absolute inset-0 rounded-2xl ${glassClasses}`}
        style={{ backdropFilter: "blur(20px)" }}
      />

      {isFront && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 60%)`,
          }}
        />
      )}

      {isFront && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
          style={{
            opacity: isHovered ? 0.4 : 0,
            background: `linear-gradient(${105 + tilt.y * 3}deg, transparent 20%, rgba(120, 200, 255, 0.1) 40%, rgba(200, 120, 255, 0.08) 50%, rgba(255, 180, 120, 0.06) 60%, transparent 80%)`,
          }}
        />
      )}

      <div className="relative z-10 p-6 sm:p-10">
        <h2
          className={`text-center text-4xl sm:text-6xl tracking-xs mb-6 sm:mb-8 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {MY_NAME}
        </h2>

        <div className="mx-auto w-fit flex flex-col gap-4 sm:gap-5">
          {faceMe.map((data) => (
            <div key={data.id} className="flex items-center gap-6 sm:gap-10">
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
                {isFront
                  ? renderValue(data.value)
                  : data.value.includes("icon")
                    ? "CV"
                    : <FormattedMessage id={data.value} />
                }
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`absolute bottom-0 left-[10%] right-[10%] h-px ${
          isDark
            ? "bg-gradient-to-r from-transparent via-white/20 to-transparent"
            : "bg-gradient-to-r from-transparent via-black/10 to-transparent"
        }`}
      />
    </div>
  );

  return (
    <Section className="mt-16 animate-appear-1">
      {/* Avatar with crossfade */}
      <div
        className="relative w-64 sm:w-80 mx-auto"
        style={{ filter: "drop-shadow(0 0 10px rgba(0, 0, 0, 1))" }}
      >
        <Image
          src={src}
          alt={MY_NAME}
          width={600}
          height={800}
          className="w-full"
          style={{
            opacity: isFlipped ? 0 : 1,
            transition: `opacity ${FLIP_DURATION}ms ease-in-out`,
          }}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F/PQAJpAN42RTZKQAAAABJRU5ErkJggg=="
        />
        {flipTarget && (
          <Image
            src={flipTarget.src}
            alt={MY_NAME}
            width={600}
            height={800}
            className="absolute inset-0 w-full"
            style={{
              opacity: isFlipped ? 1 : 0,
              transition: `opacity ${FLIP_DURATION}ms ease-in-out`,
            }}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F/PQAJpAN42RTZKQAAAABJRU5ErkJggg=="
          />
        )}
      </div>

      {/* Card 3D */}
      <div style={{ perspective: "1200px" }} className="mt-12">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          onClick={handleFlip}
          className={`relative transition-transform ease-out ${
            flipTarget ? "cursor-pointer" : ""
          }`}
          style={{
            transform: isFlipped
              ? "rotateY(180deg)"
              : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transformStyle: "preserve-3d",
            transitionDuration: isFlipped ? `${FLIP_DURATION}ms` : "300ms",
          }}
        >
          {renderCardFace(me, true)}
          {flipTarget && renderCardFace(flipTarget.me, false)}
        </div>

        {/* Flip hint */}
        {flipTarget && !isFlipped && (
          <div className="flex justify-center mt-5">
            <button
              onClick={handleFlip}
              className={`flex items-center gap-2 text-sm tracking-wide transition-all duration-300 hover:gap-3 ${
                isDark ? "text-white/30 hover:text-white/50" : "text-black/30 hover:text-black/50"
              }`}
            >
              <span className="inline-block animate-spin" style={{ animationDuration: "3s" }}>↻</span>
              {flipTarget.label}
            </button>
          </div>
        )}
      </div>
    </Section>
  );
};

export default KiterCard;
