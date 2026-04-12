import Image from "next/image";
import classes from "./avatar.module.css";

interface AvatarProps {
  src: string;
  alt: string;
}

const Avatar = ({ src, alt }: AvatarProps) => {
  return (
    <div className="w-64 sm:w-80 rounded-full mx-auto">
      <Image
        src={src}
        alt={alt}
        width={600}
        height={800}
        className={`${classes.avatar}`}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F/PQAJpAN42RTZKQAAAABJRU5ErkJggg=="
      />
    </div>
  );
};
export default Avatar;
