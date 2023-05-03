import Image from "next/image";
import Avatar from "./avatar";
import { useState } from "react";
import classes from "./info-card.module.css";

const InfoCard = () => {
  // <Avatar src="/yo-dev.JPG" alt="avatar" />
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <>
      <div
        className={`card cursor-pointer ${classes.flip} ${
          isFlipped
            ? ""
            : ""
        }`}
        onClick={handleCardClick}
      >
        <div className={`bg-gradient-to-br from-yellow-600 via-yellow-700 to-yellow-800 rounded-lg shadow-lg ${classes.content}`}>
        <div className={`${classes.front}`}>
            {/* Header */}
            <div className="flex items-center p-4">
              {/* Avatar */}
              <div className="mr-4">
                <Avatar src="/yo-dev.JPG" alt="avatar" />
              </div>
              {/* Texto centrado */}
              <div className="flex-grow">
                <h2 className="text-lg font-semibold text-white">
                  Carlos Aldaravi
                </h2>
                <p className="text-gray-100">FullStack Developer</p>
                <p className="text-gray-300">Ingeniero Multimedia</p>
              </div>
            </div>
            {/* Texto debajo del header */}
            <div className="p-4">
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ut hendrerit nibh. Duis ac eros sit amet metus maximus venenatis
                vitae vel magna. Sed tempor felis eu ex pretium, eu venenatis
                erat faucibus.
              </p>
            </div>
          </div>
          <div className={`${classes.back}`}>
            kitesurf
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
