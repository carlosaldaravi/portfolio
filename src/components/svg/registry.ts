import { SVG_TYPES } from "@/types/svg";

// Social
import { YoutubeHome } from "./social/YoutubeHome";
import { Github } from "./social/Github";
import { Twitter } from "./social/Twitter";
import { LinkedIn } from "./social/LinkedIn";
import { Instagram } from "./social/Instagram";
import { Tiktok } from "./social/Tiktok";

// Flags
import { Es } from "./flags/Es";
import { En } from "./flags/En";

// Icons
import { Youtube } from "./icons/Youtube";
import { BackArrow } from "./icons/BackArrow";
import { Developer } from "./icons/Developer";
import { Star } from "./icons/Star";
import { Document } from "./icons/Document";
import { DocumentText } from "./icons/DocumentText";
import { Kitesurf } from "./icons/Kitesurf";

// Logos
import { IonLogo } from "./logos/IonLogo";
import { DuotoneLogo } from "./logos/DuotoneLogo";
import { KaiLogo } from "./logos/KaiLogo";
import { ElmedanokiteclubLogo } from "./logos/ElmedanokiteclubLogo";

// Tech
import { NestJS } from "./tech/NestJS";
import { Vue } from "./tech/Vue";
import { React } from "./tech/React";
import { Tailwind } from "./tech/Tailwind";
import { Angular } from "./tech/Angular";
import { PHP } from "./tech/PHP";
import { MongoDB } from "./tech/MongoDB";
import { PostgreSQL } from "./tech/PostgreSQL";
import { JavaScript } from "./tech/JavaScript";
import { TypeScript } from "./tech/TypeScript";
import { NodeJS } from "./tech/NodeJS";
import { MySQL } from "./tech/MySQL";
import { Astro } from "./tech/Astro";
import { NextJS } from "./tech/NextJS";
import { Svelte } from "./tech/Svelte";
import { Laravel } from "./tech/Laravel";
import { Expo } from "./tech/Expo";
import { GoogleCloudPlatform } from "./tech/GoogleCloudPlatform";

export interface SvgComponentProps {
  size?: string;
  className?: string;
  fill?: string;
  onClick?: () => void;
}

export const SVG_REGISTRY: Record<string, React.ComponentType<SvgComponentProps>> = {
  [SVG_TYPES.youtubeHome]: YoutubeHome,
  [SVG_TYPES.github]: Github,
  [SVG_TYPES.twitter]: Twitter,
  [SVG_TYPES.linkedin]: LinkedIn,
  [SVG_TYPES.instagram]: Instagram,
  [SVG_TYPES.tiktok]: Tiktok,
  [SVG_TYPES.es]: Es,
  [SVG_TYPES.en]: En,
  [SVG_TYPES.youtube]: Youtube,
  [SVG_TYPES.backArrow]: BackArrow,
  [SVG_TYPES.ionLogo]: IonLogo,
  [SVG_TYPES.duotoneLogo]: DuotoneLogo,
  [SVG_TYPES.kaiLogo]: KaiLogo,
  [SVG_TYPES.elmedanokiteclubLogo]: ElmedanokiteclubLogo,
  [SVG_TYPES.nestjs]: NestJS,
  [SVG_TYPES.vuejs]: Vue,
  [SVG_TYPES.react]: React,
  [SVG_TYPES.tailwind]: Tailwind,
  [SVG_TYPES.angular]: Angular,
  [SVG_TYPES.php]: PHP,
  [SVG_TYPES.mongodb]: MongoDB,
  [SVG_TYPES.postgresql]: PostgreSQL,
  [SVG_TYPES.javascript]: JavaScript,
  [SVG_TYPES.typescript]: TypeScript,
  [SVG_TYPES.nodejs]: NodeJS,
  [SVG_TYPES.mysql]: MySQL,
  [SVG_TYPES.astro]: Astro,
  [SVG_TYPES.nextjs]: NextJS,
  [SVG_TYPES.svelte]: Svelte,
  [SVG_TYPES.kitesurf]: Kitesurf,
  [SVG_TYPES.developer]: Developer,
  [SVG_TYPES.star]: Star,
  [SVG_TYPES.document]: Document,
  [SVG_TYPES.documentText]: DocumentText,
  [SVG_TYPES.laravel]: Laravel,
  [SVG_TYPES.expo]: Expo,
  [SVG_TYPES.googleCloudPlatform]: GoogleCloudPlatform,
};
