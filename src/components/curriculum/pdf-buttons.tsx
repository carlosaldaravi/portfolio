import {
  ArrowDownTrayIcon,
  CheckIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import { FormattedMessage } from "react-intl";

interface PDFButtonsProps {
  isEditable: boolean;
  onDownloadResumeAsPDF: () => void;
  onEditCV: () => void;
}

const PDFButtons = ({
  isEditable,
  onDownloadResumeAsPDF,
  onEditCV,
}: PDFButtonsProps) => {
  return (
    <div className="absolute z-10 w-56 top-0 right-5 flex flex-col justify-center items-center">
      {!isEditable && (
        <button
          className={`download-button flex flex-col justify-center items-center animate-pulse cursor-pointer bg-transparent border-none`}
          onClick={onDownloadResumeAsPDF}
          aria-label="Download CV as PDF"
        >
          <ArrowDownTrayIcon className="download-icon size-14" />
          <p className="text-2xl font-bold italic">
            <FormattedMessage id="page.developer.download" />
          </p>
        </button>
      )}
      <div
        className={`flex flex-col justify-center items-center ${
          isEditable ? "mt-10" : ""
        }`}
      >
        {isEditable ? (
          <button
            className="flex flex-col justify-center items-center cursor-pointer bg-transparent border-none"
            onClick={onEditCV}
            aria-label="Finish editing CV"
          >
            <CheckIcon
              className={`stroke-green-600 ${
                isEditable ? "size-16" : "size-10"
              }`}
            />
            <p className="text-xl font-bold italic">
              <FormattedMessage id="page.developer.finish" />
            </p>
          </button>
        ) : (
          <button
            className="flex flex-col justify-center items-center cursor-pointer bg-transparent border-none"
            onClick={onEditCV}
            aria-label="Edit CV"
          >
            <PencilIcon className="size-10" />
            <p className="text-xl font-bold italic">
              <FormattedMessage id="page.developer.makeYours" />
            </p>
          </button>
        )}
      </div>
    </div>
  );
};

export default PDFButtons;
