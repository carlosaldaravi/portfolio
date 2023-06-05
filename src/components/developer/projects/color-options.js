import { FormattedMessage } from "react-intl";
import ColorSelect from "./color-select";

const ColorOptions = ({ colorSelected, onColorSelected }) => {
  const colorHandler = (color) => {
    if (color === "1") {
      onColorSelected("#55cccc");
    } else if (color === "2") {
      onColorSelected("#e95555");
    } else if (color === "3") {
      onColorSelected("#3b91f4");
    } else if (color === "4") {
      onColorSelected("#a57455");
    }
  };
  return (
    <div className="mx-auto self-center mt-4 sm:mt-0">
      <div className="text-center tracking-xxs mb-2 text-lg sm:text-xl font-light text-gray-600">
        <FormattedMessage id="page.developer.projects.playWithColors" />
      </div>
      <div className="flex sm:flex-col mx-auto gap-2 self-center">
        <ColorSelect
          num="1"
          colorSelected={colorSelected}
          color="#55cccc"
          onSelColor={(c) => colorHandler(c)}
        />
        <ColorSelect
          num="2"
          colorSelected={colorSelected}
          color="#e95555"
          onSelColor={(c) => colorHandler(c)}
        />
        <ColorSelect
          num="3"
          colorSelected={colorSelected}
          color="#3b91f4"
          onSelColor={(c) => colorHandler(c)}
        />
        <ColorSelect
          num="4"
          colorSelected={colorSelected}
          color="#a57455"
          onSelColor={(c) => colorHandler(c)}
        />
      </div>
    </div>
  );
};
export default ColorOptions;
