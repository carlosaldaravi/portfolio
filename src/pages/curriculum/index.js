import Page from "@/components/UI/page";
import Education from "@/components/curriculum/education";
import { useContext, useRef, useState } from "react";
import Experience from "@/components/curriculum/experience";
import Certification from "@/components/curriculum/certification";
import HonorAndAward from "@/components/curriculum/honor-and-award";
import OtherInfo from "@/components/curriculum/other-info";
import Footer from "@/components/curriculum/footer";
import Sidebar from "@/components/curriculum/sidebar";
import Header from "@/components/curriculum/header";
import { FormattedMessage } from "react-intl";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import useTracker from "@/hooks/useTracker";
import ThemeContext from "@/store/theme-context";
import { getBgSecondaryColor } from "@/tools/theme";
import { TRACKING_TYPES } from "@/types/track";

const Curriculum = () => {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const resumeRef = useRef(null);
  const tracker = useTracker();
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.theme;
  const bgSecondaryColor = getBgSecondaryColor(theme);

  const downloadResumeAsPDF = () => {
    setIsGeneratingPDF(true);
    import("html2pdf.js").then((html2pdfModule) => {
      const html2pdf = html2pdfModule.default;
      const element = resumeRef.current;
      const opt = {
        margin: [0, 0, 0, 0],
        filename: "curriculum-carlos-aldaravi.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          dpi: 192,
          letterRendering: true,
        },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      html2pdf()
        .set(opt)
        .from(element)
        .save()
        .then(() => {
          tracker.track(TRACKING_TYPES.event.downloadCV);
          setIsGeneratingPDF(false);
        })
        .catch(() => {
          setIsGeneratingPDF(false);
        });
    });
  };

  return (
    <Page className="p-0">
      <div ref={resumeRef} className="main">
        <Sidebar isGeneratingPDF={isGeneratingPDF} />
        <div className="main__right">
          <Header />
          <div className="main__right__body">
            <div className="section">
              <Experience />
            </div>
            <div className="section">
              <Education />
            </div>
            <div className="section">
              <Certification />
            </div>
            <div className="section">
              <HonorAndAward />
            </div>
            <div className="section">
              <OtherInfo />
            </div>
            <Footer />
          </div>
        </div>
      </div>
      <div
        className="mt-12 cursor-pointer flex justify-center items-center gap-8"
        onClick={downloadResumeAsPDF}
      >
        <h3>
          <FormattedMessage id="page.developer.download" />
        </h3>
        <span className={`download-button ${bgSecondaryColor}`}>
          <ArrowDownTrayIcon className="download-icon w-10 h-10" />
        </span>
      </div>
    </Page>
  );
};

export default Curriculum;
