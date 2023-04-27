import Image from "next/image";
import Link from 'next/link';

const Maintenance = () => {
  return (
    <div className="text-center mb-4">
      <Image
        src="/maintenance.jpg"
        alt="maintenance"
        width={1920}
        height={937}
        className="w-screen h-auto"
      />
      <Link href="/" className="mt-24 py-2 px-4 bg-gray-500 rounded-lg font-bold hover:bg-gray-400">Volver a inicio</Link>
    </div>
  );
};

export default Maintenance;
