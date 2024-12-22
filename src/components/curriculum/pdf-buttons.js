import {
  ArrowDownTrayIcon,
  CheckIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import { FormattedMessage } from "react-intl";

const PDFButtons = ({ isEditable, onDownloadResumeAsPDF, onEditCV }) => {
  return (
    <div className="absolute z-10 w-56 top-0 right-5 flex flex-col justify-center items-center">
      {!isEditable && (
        <span
          className={`download-button flex flex-col justify-center items-center animate-pulse cursor-pointer`}
          onClick={onDownloadResumeAsPDF}
        >
          <ArrowDownTrayIcon className="download-icon size-14" />
          <p className="text-2xl font-bold italic">
            <FormattedMessage id="page.developer.download" />
          </p>
        </span>
      )}
      <span
        className={`flex flex-col justify-center items-center ${
          isEditable ? "mt-10" : ""
        }`}
      >
        {isEditable ? (
          <span
            className="flex flex-col justify-center items-center cursor-pointer"
            onClick={onEditCV}
          >
            <CheckIcon
              className={`stroke-green-600 ${
                isEditable ? "size-16" : "size-10"
              }`}
            />
            <p className="text-xl font-bold italic">
              <FormattedMessage id="page.developer.finish" />
            </p>
          </span>
        ) : (
          <span
            className="flex flex-col justify-center items-center cursor-pointer"
            onClick={onEditCV}
          >
            <PencilIcon className="size-10" />
            <p className="text-xl font-bold italic">
              <FormattedMessage id="page.developer.makeYours" />
            </p>
          </span>
        )}
      </span>
    </div>
  );
};

export default PDFButtons;
