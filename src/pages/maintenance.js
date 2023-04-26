import Image from "next/image";
import Link from 'next/link';

const Maintenance = () => {
  return (
    <div className="text-center">
      <Image
        src="/maintenance.jpg"
        alt="maintenance"
        width={1920}
        height={937}
        className="w-screen h-auto"
      />
      <Link href="/" className="mt-12 py-2 px-4 bg-gray-500 rounded-lg font-bold">Volver a inicio</Link>
    </div>
  );
};

export default Maintenance;
