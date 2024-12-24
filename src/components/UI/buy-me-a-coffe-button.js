import Image from "next/image";
import useTracker from "@/hooks/useTracker";
import { TRACKING_TYPES } from "@/types/track";

const BuyMeACoffeeButton = () => {
  const tracker = useTracker();
  return (
    <div
      className="buy-me-a-coffee"
      onClick={tracker.track(TRACKING_TYPES.event.buyMeACoffee, {
        project: project.name,
      })}
    >
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
