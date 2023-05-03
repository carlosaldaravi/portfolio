import Image from "next/image";

const Avatar = ({ src, alt }) => {
  return (
    <div className="h-32 w-32 rounded-full overflow-hidden relative left-1/2 -translate-x-1/2 shadow-2xl">
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
