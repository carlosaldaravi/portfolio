import Image from "next/image";
import { useIntl } from "react-intl";

const BuyMeACoffeeButton = () => {
  const intl = useIntl();
  return (
    <div className="buy-me-a-coffee">
      <a
        href="https://buymeacoffee.com/carlosaldaravi"
        target="_blank"
        rel="noopener noreferrer"
        className="coffee-button"
      >
        <Image
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me a Coffee"
          width={500}
          height={200}
          style={{ width: "100%", height: "auto" }}
        />
      </a>
    </div>
  );
};

export default BuyMeACoffeeButton;
