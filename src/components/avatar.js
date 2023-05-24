import Image from "next/image";

const Avatar = ({ src, alt }) => {
  return (
    <div className="h-32 w-32 sm:h-56 sm:w-56 rounded-full overflow-hidden mx-auto shadow-2xl">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={1600}
        className=""
      />
    </div>
  );
};
export default Avatar;
