import Image from "next/image";
import classes from "./avatar-switch.module.css";

const AvatarSwitch = ({ src, customClass, hover }) => {
  return (
    <div className="flex justify-center">
      <div className="relative">
        <div
          className={`rounded-full overflow-hidden w-48 h-48 ${
            hover ? "bg-gray-50" : "bg-gray-300"
          }`}
        ></div>
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div
            className={`rounded-full overflow-hidden transition duration-1000 ease-in-out w-48 origin-bottom ${
              hover ? "scale-125 h-56" : "h-48"
            }`}
          >
            <Image
              src={src}
              alt="avatar"
              priority={true}
              width={1200}
              height={1600}
              object-fit="cover"
              object-position="top"
              className={`object-cover transition duration-1000 ease-in-out grayscale ${
                hover && `grayscale-0 ${customClass === 'image-dev' ? classes.dev : classes.kite}`
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AvatarSwitch;
