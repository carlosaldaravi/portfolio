import Image from "next/image";

const Avatar = ({ src, alt }) => {
  return (
    <div className="h-44 w-44 sm:h-56 sm:w-56 rounded-full overflow-hidden mx-auto shadow-2xl">
      <Image
        src={src}
        alt={alt}
        width={600}
        height={800}
        className=""
      />
    </div>
  );
};
export default Avatar;
