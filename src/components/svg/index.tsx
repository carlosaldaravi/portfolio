import { SvgType } from "@/types/svg";
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
import { ReactNative } from "./tech/ReactNative";
import { Expo } from "./tech/Expo";
import { GoogleCloudPlatform } from "./tech/GoogleCloudPlatform";

interface SvgProps {
  type: SvgType | string;
  size?: string;
  className?: string;
  fill?: string;
  onClick?: () => void;
}

const SVG = ({ type, size, className = "", fill, onClick }: SvgProps) => {
  if (type === SVG_TYPES.youtubeHome) {
    return <YoutubeHome size={size} className={className} />;
  }
  if (type === SVG_TYPES.github) {
    return <Github size={size} className={className} />;
  }
  if (type === SVG_TYPES.twitter) {
    return <Twitter size={size} className={className} />;
  }
  if (type === SVG_TYPES.linkedin) {
    return <LinkedIn size={size} className={className} />;
  }
  if (type === SVG_TYPES.instagram) {
    return <Instagram size={size} className={className} />;
  }
  if (type === SVG_TYPES.tiktok) {
    return <Tiktok size={size} className={className} />;
  }
  if (type === SVG_TYPES.es) {
    return <Es />;
  }
  if (type === SVG_TYPES.en) {
    return <En />;
  }
  if (type === SVG_TYPES.youtube) {
    return <Youtube />;
  }
  if (type === SVG_TYPES.backArrow) {
    return <BackArrow />;
  }
  if (type === SVG_TYPES.ionLogo) {
    return <IonLogo />;
  }
  if (type === SVG_TYPES.duotoneLogo) {
    return <DuotoneLogo />;
  }
  if (type === SVG_TYPES.kaiLogo) {
    return <KaiLogo />;
  }
  if (type === SVG_TYPES.elmedanokiteclubLogo) {
    return <ElmedanokiteclubLogo />;
  }
  if (type === SVG_TYPES.nestjs) {
    return <NestJS size={size} />;
  }
  if (type === SVG_TYPES.vuejs) {
    return <Vue size={size} />;
  }
  if (type === SVG_TYPES.react) {
    return <React size={size} />;
  }
  if (type === SVG_TYPES.tailwind) {
    return <Tailwind size={size} />;
  }
  if (type === SVG_TYPES.angular) {
    return <Angular size={size} />;
  }
  if (type === SVG_TYPES.php) {
    return <PHP size={size} />;
  }
  if (type === SVG_TYPES.mongodb) {
    return <MongoDB size={size} />;
  }
  if (type === SVG_TYPES.postgresql) {
    return <PostgreSQL size={size} />;
  }
  if (type === SVG_TYPES.javascript) {
    return <JavaScript size={size} />;
  }
  if (type === SVG_TYPES.typescript) {
    return <TypeScript size={size} />;
  }
  if (type === SVG_TYPES.nodejs) {
    return <NodeJS size={size} />;
  }
  if (type === SVG_TYPES.mysql) {
    return <MySQL size={size} />;
  }
  if (type === SVG_TYPES.astro) {
    return <Astro size={size} />;
  }
  if (type === SVG_TYPES.nextjs) {
    return <NextJS size={size} />;
  }
  if (type === SVG_TYPES.svelte) {
    return <Svelte />;
  }
  if (type === SVG_TYPES.kitesurf) {
    return <Kitesurf />;
  }
  if (type === SVG_TYPES.developer) {
    return <Developer />;
  }
  if (type === SVG_TYPES.star) {
    return <Star size={size} fill={fill} />;
  }
  if (type === SVG_TYPES.document) {
    return <Document size={size} />;
  }
  if (type === SVG_TYPES.documentText) {
    return <DocumentText size={size} />;
  }
  if (type === SVG_TYPES.expo) {
    return <Expo size={size} />;
  }
  if (type === SVG_TYPES.laravel) {
    return <Laravel size={size} />;
  }
  if (type === SVG_TYPES.reactNative) {
    return <ReactNative />;
  }
  if (type === SVG_TYPES.googleCloudPlatform) {
    return <GoogleCloudPlatform size={size} />;
  }
};

export default SVG;
