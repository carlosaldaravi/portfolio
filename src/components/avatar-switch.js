import Image from "next/image";

const AvatarSwitch = ({ src, alt }) => {
  return (
    <div className="relative">
      <div className="rounded-full overflow-hidden w-48 h-48 bg-gray-50 ">
      </div>
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="rounded-full overflow-hidden transform transition-transform duration-300 hover:scale-125 w-48 h-48 origin-bottom">
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={1600}
            object-fit="cover"
            object-position="top"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default AvatarSwitch;
