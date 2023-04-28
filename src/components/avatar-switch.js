import Image from "next/image";
import classes from "./avatar-switch.module.css";

const AvatarSwitch = ({ src, scale }) => {
  return (
    <div className="flex justify-center">
      <div className="relative">
        <div className={`rounded-full overflow-hidden w-48 h-48 ${scale ? 'bg-gray-50' : 'bg-gray-300'}`}></div>
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div
            className={`rounded-full overflow-hidden transform transition-transform duration-300 w-48 origin-bottom ${
              scale ? "scale-125 h-56" : 'h-48'
            }`}
          >
            <Image
              src={src}
              alt="avatar"
              width={1200}
              height={1600}
              object-fit="cover"
              object-position="top"
              className={`object-cover ${scale ? `${classes.image}` : 'grayscale'}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AvatarSwitch;
