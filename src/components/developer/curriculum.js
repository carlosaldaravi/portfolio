import useDownloader from "react-use-downloader";
import SectionTitle from "@/components/UI/section-title";
import {
  ArrowDownTrayIcon,
  ArrowPathIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "@/store/theme-context";
import { FormattedMessage } from "react-intl";
import { getBgSecondaryColor } from "@/tools/theme";

const Curriculum = ({ curriculum }) => {
  const [successClass, setSuccessClass] = useState("");
  const [loadingClass, setLoadingClass] = useState("");
  const { percentage, download, error, isInProgress } = useDownloader();
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.theme;
  const bgSecondaryColor = getBgSecondaryColor(theme);

  const { fileName } = curriculum;

  const downloadHandler = (e) => {
    e.preventDefault();
    download(`/${fileName}`, fileName);
  };

  useEffect(() => {
    if (percentage && percentage === 100) {
      setSuccessClass("success");
    }
  }, [percentage]);

  useEffect(() => {
    if (isInProgress) {
      setLoadingClass("loading");
    } else {
      setLoadingClass("");
    }
  }, [isInProgress]);

  return (
    <>
      <SectionTitle
        title="page.developer.curriculum"
        className="my-12 section-title-big-vars"
      />
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="cursor-pointer flex justify-center items-center gap-8">
          <h3>
            <FormattedMessage id="page.developer.download" />
          </h3>
          <a
            href=""
            className={`download-button ${successClass} ${loadingClass} ${bgSecondaryColor}`}
            onClick={downloadHandler}
          >
            {!loadingClass && successClass !== "success" && (
              <ArrowDownTrayIcon className="download-icon w-10 h-10" />
            )}
            {loadingClass && (
              <ArrowPathIcon className={`loading-icon w-10 h-10`} />
            )}
            {!loadingClass && successClass === "success" && (
              <CheckIcon className="success-icon w-10 h-10" />
            )}
          </a>
        </div>
        {error && (
          <p className="text-red-500 text-xl inline-block">
            {JSON.stringify(error)}
          </p>
        )}
      </div>
    </>
  );
};

export default Curriculum;
