import Image from "next/image";
import classes from "./avatar.module.css";

const Avatar = ({ src, alt }) => {
  return (
    <div className="size-64 sm:size-96 rounded-full overflow-hidden mx-auto">
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
