import Image from "next/image";

const Avatar = ({ src, alt }) => {
  return (
    <div className="min-w-screen flex justify-center md:justify-start m-2">
      <div className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56 overflow-hidden relative">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={1600}
          className="absolute top-0 left-1/2 transform -translate-x-1/2"
        />
      </div>
    </div>
  );
};
export default Avatar;
