import Image from "next/image";
import classes from "./avatar-switch.module.css";

const AvatarSwitch = ({ src, customClass, hover }) => {
  return (
    <div className="flex justify-center">
      <div className="relative">
        <div
          className={`rounded-full overflow-hidden w-64 h-64 transition-all duration-1000 ${
            hover ? "bg-gray-50" : "bg-gray-400"
          }`}
        ></div>
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div
            className={`rounded-full overflow-hidden transition duration-1000 ease-in-out w-64 origin-bottom ${
              hover ? "scale-125 h-72" : "h-64"
            }`}
          >
            <Image
              src={src}
              alt="avatar"
              priority={true}
              width={600}
              height={800}
              object-fit="cover"
              object-position="top"
              className={`object-cover transition duration-1000 ease-in-out grayscale ${
                hover &&
                `grayscale-0 ${
                  customClass === "image-dev" ? classes.dev : classes.kite
                }`
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AvatarSwitch;
