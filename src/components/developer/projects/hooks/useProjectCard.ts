import { useEffect, useState } from "react";

interface UseProjectCardProps {
  colorNum: string;
  onHover: (hovered: boolean) => void;
}

interface UseProjectCardReturn {
  isPopupOpen: boolean;
  hovered: boolean;
  color: string;
  infoPositionStyle: string | undefined;
  handleOpenPopup: () => void;
  closePopupHandler: () => void;
  hoverInHandler: () => void;
  hoverOutHandler: () => void;
}

const useProjectCard = ({ colorNum, onHover }: UseProjectCardProps): UseProjectCardReturn => {
  const [infoPositionStyle, setInfoPositionStyle] = useState<string>();
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [color, setColor] = useState("1");

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const closePopupHandler = () => {
    setPopupOpen(false);
  };

  const hoverInHandler = () => {
    onHover(true);
    setHovered(true);
  };

  const hoverOutHandler = () => {
    setHovered(false);
  };

  useEffect(() => {
    setColor(colorNum);
  }, [colorNum]);

  useEffect(() => {
    hovered
      ? setInfoPositionStyle("lg:-top-12")
      : setInfoPositionStyle("lg:top-40");
  }, [hovered]);

  return {
    isPopupOpen,
    hovered,
    color,
    infoPositionStyle,
    handleOpenPopup,
    closePopupHandler,
    hoverInHandler,
    hoverOutHandler,
  };
};

export default useProjectCard;
