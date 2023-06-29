import ThemeContext from "@/store/theme-context";
import { useContext } from "react";
import { getBgSecondaryColor } from "@/tools/theme";

const ContactFormHeader = () => {
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.theme;
  const bgSecondaryColor = getBgSecondaryColor(theme);

  return (
    <div
      className={`flex justify-between items-center h-12 w-full bg-gray-700`}
    >
      <div className="flex gap-2 ml-6">
        <span className="h-4 w-4 rounded-full bg-red-500"></span>
        <span className="h-4 w-4 rounded-full bg-yellow-500"></span>
        <span className="h-4 w-4 rounded-full bg-green-500"></span>
      </div>
      <div className="mr-6">
        <span className="text-2xl font-bold tracking-xxs">...</span>
      </div>
    </div>
  );
};

export default ContactFormHeader;
