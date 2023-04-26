// ./components/LinkImage.js
import Image from "next/image";
import Link from "next/link";

const LinkImage = ({ title, to, image }) => {
  const randomId = Math.floor(Math.random() * 1000);
  const imageUrl = `https://picsum.photos/id/${randomId}/1600/900`;

  return (
    <div
    className={`relative h-1/2 sm:h-screen sm:w-screen hover:scale-110 transform transition-transform duration-500 ease-in-out cursor-pointer`}
    >
        <Link href={to}>
        <Image
          src={image}
          alt="Imagen aleatoria"
          fill
          className="absolute h-auto"
          quality={100}
          
        />
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-4xl bg-black bg-opacity-50 px-4 py-2 rounded">
          {title}
        </p>
    </Link>
      </div>
  );
};

export default LinkImage;
