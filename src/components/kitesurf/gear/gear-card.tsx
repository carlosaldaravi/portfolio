import Image from "next/image";
import { useState } from "react";
import { getBgSecondaryColor } from "@/tools/theme";
import { useTheme } from "@/store/theme-context";
import Link from "next/link";
import { useResponsive } from "@/hooks/useResponsive";
import type { GearItem } from "@/types/kitesurf";

interface GearCardProps {
  gear: GearItem;
}

const GearCard = ({ gear }: GearCardProps) => {
  const [hovered, setHovered] = useState(false);
  const { theme } = useTheme();
  const bgSecondaryColor = getBgSecondaryColor(theme);
  const { isMobile } = useResponsive();

  return (
    <Link
      href={gear.url}
      target={!isMobile ? "_blank" : ""}
      className={`mx-auto cursor-pointer h-auto py-8 rounded-2xl flex flex-col items-center shadow-xl transform transition-all duration-300 ${
        hovered ? "bg-opacity-80" : "bg-opacity-50"
      } ${bgSecondaryColor}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={gear.img}
        alt="kite"
        height={800}
        width={600}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F/PQAJpAN42RTZKQAAAABJRU5ErkJggg=="
        className={`w-auto transform transition-all duration-300 ${
          hovered && "-translate-y-14 -rotate-20"
        }`}
      />
      <h4
        className={`mt-4 transform transition-all duration-300 ${
          hovered && ""
        }`}
      >
        {gear.name}
      </h4>
      {gear.sizes && (
        <div className="flex gap-6 mt-4">
          {gear.sizes.map((size) => (
            <span key={`${gear.name}-${size}`} className="text-lg">
              {size}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
};

export default GearCard;
