import Image from "next/image";
import classes from "./avatar.module.css";

const Avatar = ({ src, alt }) => {
  return (
    <div className="w-64 sm:w-80 rounded-full mx-auto">
      <Image
        src={src}
        alt={alt}
        width={600}
        height={800}
        className={`${classes.avatar}`}
      />
    </div>
  );
};
export default Avatar;
