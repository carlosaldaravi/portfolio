import { SvgType } from "@/types/svg";
import { SVG_REGISTRY } from "./registry";

interface SvgProps {
  type: SvgType | string;
  size?: string;
  className?: string;
  fill?: string;
  onClick?: () => void;
}

const SVG = ({ type, size, className = "", fill, onClick }: SvgProps) => {
  const Component = SVG_REGISTRY[type];
  if (!Component) return null;
  return <Component size={size} className={className} fill={fill} onClick={onClick} />;
};

export default SVG;
